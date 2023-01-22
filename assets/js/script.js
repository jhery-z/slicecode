$(document).ready(function() {
 $('.hamburger').click(function() {
    $('.menu-wrapper').css('right', '0');
 });

 $('.close').click(function() {
    $('.menu-wrapper').css('right', '100vw');
 });
});