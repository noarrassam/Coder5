# Readme Documentation

## Arsheya Tripathi (N03150280) - Coder 5

This is the readme file for the three pages:

#### 1. Arsheya's profile  (profile.html)

#### 2. Play Games (games.html)

#### 3. Contact Us page (contact.html)

The three pages used HTML, CSS, JavaScript, Flex, and it is responsive

## Arsheya's profile

This page provides the information of one of the member of team coder-5. This page contains all the basic information of the member like about his skill he is excel in and about his work and education he has done. There is a slideshow which overviews the page from the team logo to the projects. There is a direct link to the home-page and contact us page so that user can ask any questions or query.

All 3 pages connect to a CSS page (main.css). This page handles all the styling for all 3 pages. The pages where designed to offer users a unique experience when compared to the whole site. There are certain theme colors that are universal to the whole site but this three pages are developed to be unique.

## Play Games

This page is for fun inteded purpose where user can play few games and fell relaxed. This page contains four major games i.e clumsy bird, 2048, Tic-Tac-Toe and snake, these all games are simple and easy to play. There is a description about the corresponding game and also there is a button which takes user to play the game.

snake game is created using JavaScript(snake.js) which contains the major functionalities of the game. The page shares the same CSS file (main.css) as all the other pages.

## Contact Us

As the name suggest this page acts as a gateway to contact with one of the member of team coder-5 in which user can ask any question related to any subject. It is just the basic and simple form which requires few mandatory details of the user. At the footer part of the page there is a terms and condition pdf of our website. There is also a direction to our work-station with a marker on it and if map doesn't load properly then there is an external link too.

This page contains form so some fields need to be validate like firstname and other mandatory fields, they all are validated under a javascript file(validate.js) and also it contains the code to initialize google maps . This page shares the same CSS file (main.css) as all the other 3 pages.

### Code Example

```JavaScript

// Initialize and add the map
function initMap() {
    var uluru = {lat: 43.7289164, lng: -79.6089591};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }


```
