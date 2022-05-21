## USER STORY

As a person new to town, I want to be able to find local Breweries to fit my needs, or be able to find entertaintment for fun, so that I am able to discover new places and meet new people!

## DESCRIPTION

We want to create a user-friendly application that will allow users moving to a new area, or looking for more to do in their area, find bars and other forms of entertainment in their geographical areas. Our goal is to help people find fun and safe ways to engage with others in their community.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployed Site](#final-product)
- [Tech Used](#built-with)
- [Contact](#contributing)
- [Contributing](#contributing)
- [License](#license)

## ABOUT THE PROJECT

We added a modal to the introduction screen to introduce the user to our application.

We then incorporated a function that fetched the ticketmaster and brewery data, from their respective API's, when the user types in their zip code to find social events and breweries around them.

Implemented an if statement that displays an error message if the zip code typed into the search bar returns no data.

Created a varibale that would display the data in a readable and easy to navigate manner for the user on the web page.

Made the links fetched by the APIs clickable, taking you to the correlating websites. Also, made the returned images a uniform size for aesthetic purposes.

We saved the user input into localStorage and displayed the value in the label.

Made the start up modal and main page responsive with media queries.



## FINAL PRODUCT

[Deployed Website](https://shagens.github.io/New-To-Town/)

![image](https://user-images.githubusercontent.com/87335354/133401571-f71d2711-7e7a-45fe-affd-ff7c5d37fefc.png)

![image](SS.png)

## BUILT WITH

- HTML, CSS & JS
- ZURB Foundation
- Server-side APIs
- Git branching workflow
- Agile software development
- Font Awesome
- jQuery
- Responsive framework

## USUAGE

Many zip codes may not display many results. If you want to get a good idea of what we were going for, you could try some from highly populated areas. Here are a few incase you don't feel like looking some up: 10001 - 90017 - 28715

The main usage for our web application, will be from users who have recently moved to a new area and are looking for fast and fun ways to integrate with their new found communities.

## FUTURE DEVELOPMENT

- Utilize a search method that will return more results.
- Add some animation to the app.
- Add more options for display and internal page links to accomodate the page length.
- More streamlined look. Possible use of different CDNs.


## ROADMAP

See the issues (GitHub) for a list of proposed changes.

## CONTRIBUTING

- Matias A. ~ matiasahrensdorf@gmail.com
- Celeste F. ~ celestefarris@hotmail.com
- Pamela C. ~ pamelac021@gmail.com
- Shikelia H. ~ Hagensshik@gmail.com

## ACKNOWLEGEMENTS

- Open Brewery DB
- Ticket Master

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

