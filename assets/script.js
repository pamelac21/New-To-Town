

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

function myFunction(response) {
    
    //variable to capture value of user input
    var searchZip = document.querySelector('#searchZip').value
    
    //fetch request using that input
    fetch('https://api.openbrewerydb.org/breweries?by_postal=' + searchZip)
        
        .then(function(response) { return response.json()})
        .then(function(response) { console.log(response.data[0])})
        //.then(data => {console.log(data.website_url)})
        //variable selecting div where content will be displayed
    const rcBrew = document.querySelector("response-container-brew")
        //clear div
        //rcBrew.innerHTML = ''

        var brewInfo = document.createElement('p')
        brewInfo.setAttribute('src', response.data._website_url)

        rcBrew.appendChild(brewInfo)
              
    //fetch request using that input
     fetch('https://app.ticketmaster.com/discovery/v2/events.json?postalCode=' + searchZip + '&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa')
        .then(function(response) { return response.json()})
        .then(function(response) { console.log(response.data[0])})
        //.then(data => {console.log(response.data._embedded_events)})
        //variable selecting div where content will be displayed
        const rcTicket = document.querySelector("response-container-ticket")
        //clear div
        //rcTicket.innerHTML = ''

        var ticketInfo = document.createElement('p')
        ticketInfo.setAttribute('src', response.data._embedded_events)

        rcTicket.appendChild(ticketInfo)

}
myFunction()
