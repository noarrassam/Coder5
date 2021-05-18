- _Name: Noar Rassam
- _Arsheya Tripathi
- _Emmanuel Data Akangbou

# Coder 5 Project

- _Link_: [Visit website](https://noarrassam.github.io/ "Coder 5")

## Noar Rassam's My Pages:
|home-page|login|tutorial|Noor’s bio|welcome|
|-------- |---- |------- |--------- |-------|
|One      |Two  |Three   |Four      |Five   | 

***

## HTML & CSS Process:

- Font: Times New Roman, Times, Serif.
- Other fonts: Arial, Helvetica, San-serif for - the header
- Linear gradient is used for all pages.
- Official color is Blue.
- Other colors are white and black.
- The official color for the text is black.
- Links are white.
- box-shadow is used for boxes.
- Responsive layout using grid and flex.
- Labels is used for accessibility reason beside the search bar.

## HTML & CSS Pages
- **tutorail**
- The Tutorials page was created to show the userd a several videos that teaches front-end-development using _CSS_ and _HTML_.

## JavaScript:

1. **Home-page**
- _JavaScript_ is used for the home-page to create a slide show.
- The main idea of the slide show is to use jQuery through setting an function, including to hover on the slideshow to make it pause while its moving from right to left.
- `ul` tag is used to gather all photos into one box, including the overflow: hidden tag was used to coombine all photos into one box.

```javaScript
    function beginSLide()
        interval = setInterval(function()
    function stopSlide()
        clearInterval(interval);
    $sContainer
        .on('mouseenter', stopSlide).on('mouseleave', beginSLide);
    beginSLide();

```
    

2. **Login Page**
- _JavaScript_ is used to validate the registration and login forms, including using push method to add an new users to an array using `for` loop.

3. **bio-page**
- _JavaScript_ is used to create a simple carousel slides to the left and right hand sides to preview my portfolio through using jQuery and special functions such as below:

```javaScript

$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
```
4. **welcome**
- This page contains a body that created for people who successfuly registered and logged in into the login page.
- It contains a `function` for the sign out button used by _JavaScript_ to directly to visit to the home-page after pressing the `signing out` buttom. 

***


## Arsheya's Pages:

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

***

## Data's Pages:

#### 1. About (about.html)

#### 2. Data's Profile (data.html)

#### 3. Coder 5 TV (coder5tv.html)

The three pages used HTML, CSS, JavaScript, Flex, and it is responsive

## About

This page is an information page that provides visitors to the website information about what Coder 5 is. Like all the pages, this page has links to 4 pages in the header. The links go to the home page which connects to all pages on the website. The other three links are to the About page, the Data's Profile and Coder 5 TV.

The about page has a main content section with information about Coder 5, a section with a form and a section that links to some JavaScript (main.js).

All 3 pages connect to a CSS page (main.css). This page handles all the styling for all 3 pages. The pages where designed to offer users a unique experience when compared to the whole site. There are certain theme colors that are universal to the whole site but this three pages are developed to be unique.

## Data's Profile

This page is an information page that provides visitors to the website information about one of the members of coder. This page acts as a resume to this member. Like all the pages, this page has links to 4 pages in the header. The links go to the home page which connects to all pages on the website. The other three links are to the About page, the Data's Profile and Coder 5 TV.

Data's Profile page acts as a web resume for one of the members of Coder 5 (Emmanuel Data Akangbou). The page shows skill and capabilities as well as previous work experience. The page shares the same CSS file (main.css) as all the other pages.

## Coder 5 TV

This page is an information page that provides visitors to the website information about what Coder 5 is. Like all the pages, this page has links to 4 pages in the header. The links go to the home page which connects to all pages on the website. The other three links are to the About page, the Data's Profile and Coder 5 TV.

Coder 5 TV is the edutainment section of the website. This page showcases videos that are both entertaining and educational. This page shares the same CSS file (main.css) as all the other 3 pages.

### Code Example

```JavaScript

<nav>
        <ul class="container">
          <li><a href="home-page.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="coder5tv.html">Coder5 tv</a></li>
          <li><a href="data.html">Data's Profile</a></li>
        </ul>
      </nav>


```