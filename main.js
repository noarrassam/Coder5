"use strict";

$(function() {

    //SLider Settings
    let animationSpeed = 1000;
    let stop = 3000;
    let width = 720;
    let interval;
    let cSlides = 1;

    //DOM Cache
    let $slider = $('#slider');
    let $sContainer = $slider.find('.slides');
    let $slides = $sContainer.find('.slide');

    function beginSLide() {
        interval = setInterval(function() {
            $sContainer.animate({
                'margin-left': '-=' + width
            }, animationSpeed, function() {
                cSlides++;
                if (cSlides === $slides.length) {
                    cSlides = 1;
                    $sContainer.css('margin-left', 0);
                }
            });
        }, stop);
    }

    function stopSlide() {
        clearInterval(interval);
    }

    $sContainer
        .on('mouseenter', stopSlide).on('mouseleave', beginSLide);
    beginSLide();

});

function validate() {
    let username = document.getElementById('usname').value;
    let password = document.getElementById('passw').value;

    if (username == '' || password == '') {
        document.getElementById('result1').innerHTML = 'All Field Required';
        return false;
    } else if (username.length < 4) {
        document.getElementById('result1').innerHTML = 'UserName Should be More than Four Characters';
        return false;
    } else if (password.length < 8) {
        document.getElementById('result1').innerHTML = 'Password is Too Short';
        return false;
    } else
    login()
    return true;

}

function validation() {

    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let rgusername = document.getElementById('uname').value;
    let rgpassword = document.getElementById('pass').value;

    if (firstname == '' || lastname == '' || email == '' || rgusername == '' || rgpassword == '') {
        document.getElementById('result').innerHTML = 'All Field Required';
        return false;

    } else

    if (firstname.length < 4) {
        document.getElementById('result').innerHTML = 'First Name Must be at Least Four Characters';
        return false;

    } else if (!isNaN(firstname)) {
        document.getElementById('result').innerHTML = 'First Name Must be Letters';
        return false;

    } else if (lastname.length < 4) {
        document.getElementById('result').innerHTML = 'Last Name Must be at Least Four Characters';
        return false;
    } else

    if (!isNaN(lastname)) {
        document.getElementById('result').innerHTML = 'Last Name Must be Letters';
        return false;
    } else

    if (rgusername.length < 4) {
        document.getElementById('result').innerHTML = 'UserName Should be at Least Four Characters';
        return false;

    } else if (rgpassword.length < 8) {
        document.getElementById('result').innerHTML = 'Password Should be at Least Eight Characters';
        return false;
    } else

    {
        registerUser()
        return true;
        // window.open('../HTML/home-page.html');
    }


}

let objPeople = [

    {
        username: "John",
        password: "password25",
        firstname: "John",
        lastname: "M",
        email: "john@gmail.com"
    },

    {
        username: "Matt",
        password: "password88",
        firstname: "Matt",
        lastname: "H",
        email: "matt@gmail.com"
    },

    {
        username: "Chris",
        password: "password3",
        firstname: "Chris",
        lastname: "T",
        email: "chris@gmail.com"
    }

]

function logout(){
    window.open('../HTML/home-page.html');
}

function login() {
    let username = document.getElementById("usname").value
    let password = document.getElementById("passw").value
    let firstname = document.getElementById("fname").value
    let lastname = document.getElementById("lname").value
    let email = document.getElementById("email").value

    for (let i = 0; i < objPeople.length; i++) {
        if (username == objPeople[i].username && password == objPeople[i].password && firstname == objPeople[i].firstname && lastname == objPeople[i].lastname && email == objPeople[i].email) { 
            console.log(username + " is logged in");
            window.open('../HTML/welcome.html');
            return true;
        }
    }
    document.getElementById('result1').innerHTML = 'Incorrect UserName or Password';
    console.log(" incorrect username or password")
}

function registerUser() {
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let rgusername = document.getElementById("uname").value;
    let rgpassword = document.getElementById("pass").value;

    let newUser = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        username: rgusername,
        password: rgpassword
    }

    for (let i = 0; i < objPeople.length; i++) {
        if (rgusername == objPeople[i].username) {
            document.getElementById('result').innerHTML = 'UserName is already in Use';
            return false;
        } 
           
    }
    document.getElementById('result').innerHTML = 'Login to your Account';
    objPeople.push(newUser)
    console.log(objPeople)

}

$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.active');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        nextImg.addClass('active').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.active');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('active').css('z-index', -10);
        prevImg.addClass('active').css('z-index', 10);
      }
    });
  });