const ticketApi = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa'
const ticketApiKey = 'SbkH1ltdeIub58BAAadKCyFaXfy7RKZa'

const foodApi = 'https://api.documenu.com/v2/restaurant/4072702673999819?key=238ccc5eae51a83bd782ddd2f63f9664'
const foodApiKey = '238ccc5eae51a83bd782ddd2f63f9664'

//food
async function getFood() {
    const response = await fetch(foodApi)
    const data = await response.json()
    console.log(data)

    // 'https://api.documenu.com/v2/restaurants/zip_code/' + zip + '?size=5' + foodApiKey
}
getFood()

//ticket
async function getTicket() {
    const response = await fetch(ticketApi)
    const data = await response.json()
    console.log(data)
}
getTicket()

