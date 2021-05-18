document.addEventListener('keypress',function(){
    document.body.style.color = 'red';
});
let $ = function(id){
    return document.getElementById(id);
}

window.onload = function(){
    $('register').onclick = validateform;
}

function validateform(){
    let firstname = $('fname');
    let namepattern = /^[a-z,A-Z]{2,30}$/
    if(firstname.value == ''){
    firstname.nextElementSibling.innerHTML = 'please enter first name';
    }else if(!namepattern.test(firstname.value)){
        firstname.nextElementSibling.innerHTML = 'please enter first name with letters only';
    }else{
        firstname.nextElementSibling.innerHTML = '';
    } 

}
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 43.7289164, lng: -79.6089591};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }