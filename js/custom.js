$(window).on('load',function(){
	$('.about-top img').animate({'margin':'40px 0 -25px -50px'},1800,'easeOutBounce');
	$('.about-positioning').animate({'background-position-x':'-10%'},1800,'easeOutSine');
	
});
if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(52.525595,13.393085);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

}