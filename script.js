$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=50px',
           width: '+=50px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=50px',
           width: '-=50px'
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

  var $circulito = $('.pink_circle, .yellow_circle');

  $circulito.click(function(){
    $(this).fadeTo(100, 0.1).fadeTo(200, 1.0)
  });

  var $texto = $("<p>I added this paragraph with JQuery. Shows how to .append() / .prepend() and .remove() </p>");

  $('#double').mouseenter(function(){
    $(this).append($texto);
  });

  $('#double').mouseleave(function(){
    $texto.remove();
  });


});