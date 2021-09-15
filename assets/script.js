
$(document).ready(function(){
    function fetchData() {
        //brew
        fetch('https://api.openbrewerydb.org/breweries?by_postal=98826')
            .then(response => response.json())
            .then(data => console.log(data))
        
        //ticket
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=28146&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa')
            .then(response => response.json())
            .then(data => console.log(data))
        }
        fetchData()
        
        //onclick function for search zip
        
        function myFunction() {
        
            //variable to capture value of user input
            const searchZip = document.querySelector('#searchZip').value
            
            let queryUrl = 'https://api.openbrewerydb.org/breweries?by_postal=' + searchZip + '&sort=type,name:asc'
            //fetch request using that input
            fetch(queryUrl)
            .then(response => response.json())
            // .then(function(response) { console.log(response)})
               
                .then((response) => {
                //variable selecting div where content will be displayed
                // const rcBrew = document.querySelector("#response-container-brew")
                console.log(response)
                let rcBrewHTML = '<ul><li>${response[0].street}</li></ul>'
                                    
        
                for (let i = 0; i < 4; i++) {
                    
                    $("#response-container-brew").append(`<li>${response[i].name}</li>`)
                    $("#response-container-brew").append(`<li>${response[i].phone}</li>`)
                    $("#response-container-brew").append(`<li>${response[i].street}</li>`)
                    $("#response-container-brew").append(`<li>${response[i].website_url}</li>`)
                                     
                }
        // Append the results to the DOM
        console.log($('#response-container-brew'))
        // $('#response-container-brew').html(rcBrewHTML);
            //    var brewInfo = document.createElement('p')
            //    brewInfo.setAttribute('src', response.data._website_url)
        
            //    rcBrew.appendChild(rcBrewHTML)
            let ticketUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?postalCode=' + searchZip + '&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa'
            //fetch request using that input
             fetch(ticketUrl)
                .then(response => response.json())
                .then((response) => {
                    console.log(response)
                     const rcTicket = document.querySelector('#response-container-ticket')
                //clear div
                for (let i = 0; i < 4; i++) {
                    let imgContent = document.createElement('img')
                    imgContent.setAttribute('src', response._embedded.events[i].images[0].url)
                    
                    $("#response-container-ticket").append(imgContent)
                    $("#response-container-ticket").append(`<li>${response._embedded.events[i].name}</li>`)
                    
                    $("#response-container-ticket").append(`<li>${response._embedded.events[i].url}</li>`)
                    $("#response-container-ticket").append(`<li>${response._embedded.events[i].place}</li>`)
                                     
                }

                console.log($('#response-container-ticket'))
                
                })

        
            })}
            $("#searchZip").click(myFunction)
})
