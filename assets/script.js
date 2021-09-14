
$(document).ready(function(){
    function fetchData() {
        //brew
        fetch('https://api.openbrewerydb.org/breweries?by_postal=98826')
            .then(response => response.json())
            .then(data => console.log(data))
        
        //ticket
        fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa')
            .then(response => response.json())
            .then(data => console.log(data))
        }
        fetchData()
        
        //onclick function for search zip
        
        function myFunction() {
        
            //variable to capture value of user input
            var searchZip = document.querySelector('#searchZip').value
            
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
                    $("#response-container-brew").append(`<li>${response[i].street}</li>`)                    
                }
        // Append the results to the DOM
        console.log($('#response-container-brew'))
        // $('#response-container-brew').html(rcBrewHTML);
            //    var brewInfo = document.createElement('p')
            //    brewInfo.setAttribute('src', response.data._website_url)
        
            //    rcBrew.appendChild(rcBrewHTML)
                      
            //fetch request using that input
             fetch('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=' + searchZip + '&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa')
                .then(function(response) { return response.json()})
                .then(function(response) {
                    // const rcTicket = document.querySelector('#response-container-ticket')
                //clear div
                    var rcTicket = `<ul>${response._embedded.events}</ul>`
                    $("#response-container-ticket").html (rcTicket);
                })
                //.then(data => {console.log(response.data._embedded_events)})
                //variable selecting div where content will be displayed
                
        
            //    var ticketInfo = document.createElement('p')
            //    ticketInfo.setAttribute('src', response_embedded.events)
        
            //    rcTicket.appendChild(ticketInfo)
        
            })}
            $("#searchZip").click(myFunction)
})
