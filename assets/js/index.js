$(document).ready(function(){
    $('#burger-menu').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('menu--open');
    });
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 43.8071413, lng: 39.6113559 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("contact-map"), {
        zoom: 10,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}
