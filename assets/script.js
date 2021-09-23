$(document).ready(function () {
  console.log(localStorage);

  //MODAL
  var modal = document.querySelector(".modal");
  function displayModal() {
    modal.style.display = "block";
  }
  displayModal();

  $(".startBtn").click(function hideModal() {
    modal.style.display = "none";
  });

  //display last zip code
  if (localStorage.length >= 1) {
    $("#placeholder").val(localStorage.getItem('searchZip'));
  }

  //function for enter key search
  $("#placeholder").keyup(function (event) {
    if (event.keyCode === 13) {
      $("#searchZip").click();
    }
  });

  function fetchData() {
    //brew
    fetch("https://api.openbrewerydb.org/breweries?by_postal=98826")
      .then((response) => response.json())
      .then((data) => console.log(data));

    //ticket
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?postalCode=28202&mode=no-cors&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  fetchData();

  function myFunction(event) {
    const rcTicket = document.querySelector("#response-container-ticket");
    const rcBrew = document.querySelector("#response-container-brew");
    //variable to capture value of user input
    let searchZip = document.getElementById("placeholder").value;
    event.preventDefault();
    //store
    localStorage.setItem("searchZip", searchZip);

    let queryUrl =
      "https://api.openbrewerydb.org/breweries?by_postal=" +
      searchZip +
      "&sort=type,name:asc";
    //fetch request brews
    fetch(queryUrl).then((response) =>
      response
        .json()

        .then((response) => {
          if (response.length === 0) {
            rcBrew.innerHTML = "";
            $("#response-container-brew").append(`Sorry! None In Your Area`);
            console.log("nada");
          } else {
            console.log(response);
            const rcBrew = document.querySelector("#response-container-brew");
            rcBrew.innerHTML = "";

            for (let i = 0; i < 4; i++) {
              $("#response-container-brew")
                .append(`<ul><li>${response[i].name}</li>
                    <li>Phone: ${response[i].phone}</li>
                    <li>${response[i].street}</li>
                    <li><a href="${response[i].website_url}">Brewery Website</a></li></ul>`);
            }
          }
          console.log($("#response-container-brew"));
        })
    );

    event.preventDefault();
    let ticketUrl =
      "https://app.ticketmaster.com/discovery/v2/events.json?postalCode=" +
      searchZip +
      "&mode=no-cors&apikey=SbkH1ltdeIub58BAAadKCyFaXfy7RKZa";
    //fetch request ticketmaster
    fetch(ticketUrl)
      .then((response) => response.json())
      .then((response) => {
        if (!response._embedded) {
          rcTicket.innerHTML = "";
          $("#response-container-ticket").append(`Sorry! None In Your Area`);
          console.log("nada");
        } else {
          let rcTicket = document.querySelector("#response-container-ticket");
          rcTicket.innerHTML = "";

          for (let i = 0; i < 4; i++) {
            let imgContent = document.createElement("img");
            imgContent.setAttribute(
              "src",
              response._embedded.events[i].images[0].url
            );

            $("#response-container-ticket").append(
              imgContent,
              `<ul>    
                    <li>${response._embedded.events[i].name}</li>
                    <li><a href="${response._embedded.events[i].url}">Event Website</a></li>
                    <li>${response._embedded.events[i].pleaseNote}</li></ul>`
            );
          }
          console.log(localStorage);
          //console.log($("#response-container-ticket"));
        }
      });

    //window.localStorage.clear()
  }
  $("#searchZip").click(myFunction);
});
