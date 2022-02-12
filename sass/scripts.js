$(document).ready(function() {

   $('.abts').click(function () {
      $('html, body').animate({scrollTop: $('.sec-about-us').offset().top}, 100); 
   });

   $('.actvt').click(function () {
      $('html, body').animate({scrollTop: $('.sec-our-activity').offset().top}, 100); 
   });

   $('.vsn').click(function () {
      $('html, body').animate({scrollTop: $('.sec-our-vision').offset().top}, 100); 
   });

   $('.cntcts').click(function () {
      $('html, body').animate({scrollTop: $('.sec-contact-us').offset().top}, 100); 
   });


   
   const mediaQuery = window.matchMedia('(min-width: 1024px)')
   if (mediaQuery.matches){

      
 
      $('.js--wp-1').waypoint(function (direction) {
       $('.js--wp-1').addClass('animate__animated animate__fadeInBottomLeft');
      },{offset: '69%;'});
 
      $('.js--wp-2').waypoint(function (direction) {
       $('.js--wp-2').addClass('animate__animated animate__fadeInBottomRight');
      },{offset: '45%;'});
 
      $('.js--wp-3').waypoint(function (direction) {
       $('.js--wp-3').addClass('animate__animated animate__fadeInLeftBig');
      },{offset: '60%;'});
 
      $('.js--wp-4').waypoint(function (direction) {
       $('.js--wp-4').addClass('animate__animated animate__fadeIn');
      },{offset: '60%;'});
 
      $('.js--wp-5').waypoint(function (direction) {
      $('.js--wp-5').addClass('animate__animated animate__fadeIn');
      },{offset: '60%;'});
 
      $('.js--wp-6').waypoint(function (direction) {
      $('.js--wp-6').addClass('animate__animated animate__fadeInRightBig');
      },{offset: '60%;'});
 
      $('.js--h2-about-us').waypoint(function (direction) {
      $('.js--h2-about-us').addClass('animate__animated animate__fadeIn');
      },{offset: '75%;'});
 
      $('.js--h2-our-activity').waypoint(function (direction) {
      $('.js--h2-our-activity').addClass('animate__animated animate__fadeIn');
      },{offset: '75%;'});
 
      $('.js--h2-our-vision').waypoint(function (direction) {
      $('.js--h2-our-vision').addClass('animate__animated animate__fadeIn');
      },{offset: '75%;'});
 
      $('.js--h2-contact-us').waypoint(function (direction) {
       $('.js--h2-contact-us').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
       $('.js--h3-network').waypoint(function (direction) {
       $('.js--h3-network').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
       $('.js--h3-quality').waypoint(function (direction) {
       $('.js--h3-quality').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
       $('.js--h3-packaging').waypoint(function (direction) {
       $('.js--h3-packaging').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
       $('.js--h3-our-excellence').waypoint(function (direction) {
       $('.js--h3-our-excellence').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
    
       $('.js--white-box-1').waypoint(function (direction) {
       $('.js--white-box-1').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
       $('.js--white-box-2').waypoint(function (direction) {
       $('.js--white-box-2').addClass('animate__animated animate__fadeIn');
       },{offset: '75%;'});
 
       $('.js--h3-vision').waypoint(function (direction) {
          $('.js--h3-vision').addClass('animate__animated animate__fadeIn');
          },{offset: '75%;'});
 
       $('.js--h3-mission').waypoint(function (direction) {
          $('.js--h3-mission').addClass('animate__animated animate__fadeIn');
          },{offset: '75%;'});
 
 
       $('.js--h3-address').waypoint(function (direction) {
       $('.js--h3-address').addClass('animate__animated animate__fadeInLeftBig');
          },{offset: '80%;'});
 
       $('.js--h3-phone').waypoint(function (direction) {
       $('.js--h3-phone').addClass('animate__animated animate__fadeInLeftBig');
             },{offset: '85%;'});
 
       $('.js--h3-email').waypoint(function (direction) {
       $('.js--h3-email').addClass('animate__animated animate__fadeInLeftBig');
             },{offset: '90%;'});
 
       $('.js--address-icon').waypoint(function (direction) {
       $('.js--address-icon').addClass('animate__animated animate__fadeIn');
             },{offset: '90%;'});
 
       $('.js--phone-icon').waypoint(function (direction) {
       $('.js--phone-icon').addClass('animate__animated animate__fadeIn');
             },{offset: '93%;'});
 
       $('.js--email-icon').waypoint(function (direction) {
       $('.js--email-icon').addClass('animate__animated animate__fadeIn');
             },{offset: '96%;'});
 
       $('.js--txt-history').waypoint(function (direction) {
       $('.js--txt-history').addClass('animate__animated animate__slideInLeft');
       },{offset: '75%;'});
 
       $('.js--logo-white').waypoint(function (direction) {
          $('.js--logo-white').addClass('animate__animated animate__fadeIn');
          },{offset: '75%;'});
 
       $('.js--map').waypoint(function (direction) {
          $('.js--map').addClass('animate__animated animate__fadeInRightBig');
          },{offset: '75%;'});

   }
    

      
});