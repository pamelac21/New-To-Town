
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
        
    //$("#myModal").modal('show'); ????
    
    $("#searchZip").on('click', myFunction())
        
     function myFunction() {
        //variable to capture value of user input
        let searchZip = document.getElementById('placeholder').value
        //let searchBtn = document.getElementById('searchBtn').addEventListener('click', myFunction())
            //store
            localStorage.setItem('searchZip', searchZip)
            console.log(localStorage)
            
            
            
            let queryUrl = 'https://api.openbrewerydb.org/breweries?by_postal=' + searchZip + '&sort=type,name:asc'
            //fetch request using that input
            fetch(queryUrl)
                .then(response => response.json())
            
               
                .then((response) => {
                //variable selecting div where content will be displayed
                console.log(response)
                const rcBrew = document.querySelector("#response-container-brew")
                rcBrew.innerHTML = ''
                
                for (let i = 0; i < 4; i++) {

                    $("#response-container-brew").append(`<ul><li>${response[i].name}</li>
                    <li>Phone: ${response[i].phone}</li>
                    <li>${response[i].street}</li>
                    <li><a href="${response[i].website_url}">Brewery Website</a></li></ul>`)                   
                }

                console.log($('#response-container-brew'))

        
            let ticketUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?postalCode=' + searchZip + '&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa'
            //fetch request using that input
             fetch(ticketUrl)
                .then(response => response.json())
                .then((response) => {
                console.log(response)
                    let rcTicket = document.querySelector('#response-container-ticket')
                    rcTicket.innerHTML = ''
    
                for (let i = 0; i < 4; i++) {

                    let imgContent = document.createElement('img')
                    imgContent.setAttribute('src', response._embedded.events[i].images[0].url)
                    
                    $("#response-container-ticket").append((imgContent),
                    `<ul>    
                    <li>${response._embedded.events[i].name}</li>
                    <li><a href="${response._embedded.events[i].url}">Event Website</a></li>
                    <li>${response._embedded.events[i].pleaseNote}</li></ul>`)
                                     
                }

                console.log($('#response-container-ticket'))
                
                })

        
            })}
            $("#searchZip").click(myFunction)
})
