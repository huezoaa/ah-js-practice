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

  $('div').click(function(){
    $(this).fadeOut('slow');
  });

  // $('li:last-child').click(function(){
  //   $(this).toggle(500);
  // });

//Example of selecting by list item tag:
  $('li').click(function(){
    $(this).fadeOut('slow');
  });


});