$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       });
   });

   // $('div').click(function() {
   //     $(this).toggle(1000);
   // });

  // $('div').click(function(){
  //   $(this).fadeOut('slow');
  // });

  // $('li:last-child').click(function(){
  //   $(this).toggle(500);
  // });

//Example of selecting by list item tag:
  $('li').click(function(){
    $(this).fadeOut('slow');
  });

// Example of using variable and id:
  var $cajita_roja = $('#red');

  $cajita_roja.click(function(){
    $(this).fadeOut('fast');
  });

// Example of using variable and class:

  var $circulito = $('.circle');

  $circulito.click(function(){
    $(this).fadeOut('slow');
  })


});