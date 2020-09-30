(function ($) {
		"use strict";

	jQuery(document).ready(function(){



 // skill circle Js

	$("#web-design-skill-bar").circleProgress({
    value: 0.90,
    size: 170,
    thickness:13,
    fill: "#0ABBC1",
					}).on('circle-animation-progress', function(event, progress) {
   					 $(this).find('.skill-count-number').html(Math.round(90 * progress) + '<i>%</i>');
   					 
 		 });



	$("#html-css").circleProgress({
    value: 0.75,
    size: 170,
    thickness:13,
    fill: "#d74680",
					}).on('circle-animation-progress', function(event, progress) {
   					 $(this).find('.skill-count-number').html(Math.round(75 * progress) + '<i>%</i>');
   					 
 		 });


	$("#graphic-design-skill-bar").circleProgress({
    value: 0.70,
    size: 170,
    thickness:13,
    fill: "#15c7a8",
					}).on('circle-animation-progress', function(event, progress) {
   					 $(this).find('.skill-count-number').html(Math.round(70 * progress) + '<i>%</i>');
   					 
 		 });



	$("#ui-ux").circleProgress({
    value: 0.85,
    size: 170,
    thickness:13,
    fill: "#eb7d4b",
					}).on('circle-animation-progress', function(event, progress) {
   					 $(this).find('.skill-count-number').html(Math.round(85 * progress) + '<i>%</i>');

 		 });



// sticky top

    $(".sticky-js").waypoint(function(direction){
          if(direction == "down"){

            $("nav").addClass("fixed-top");

          } else {

           $("nav").removeClass("fixed-top");

          }

      });

// mobile menubar

// portfolio Js

var mixer = mixitup('.portfolio');



});


jQuery(window).load(function(){

});


}(jQuery));


function openNav(){
  document.getElementById("myNav").style.width = "50%";
}


function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}

