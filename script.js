$(document).ready(function() {
   $('div').mouseenter(function() {
       $(this).animate({
           height: '+=10px',
           width: '+=10px'
       });
   });
   $('div').mouseleave(function() {
       $(this).animate({
           height: '-=10px',
           width: '-=10px'
       });
   });

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

  var $texto = $('<p>I added this paragraph with JQuery. Shows how to .append() / .prepend() and .remove() </p>');

  $('.double').mouseenter(function(){
    $(this).append($texto);
    $(this).addClass('highlighted');
  });

  $('.double').mouseleave(function(){
    $texto.remove();
    $(this).removeClass('highlighted');

  });

  $('#button').mouseenter(function(){
    $(this).addClass('highlighted');
  });

  $('#button').mouseleave(function(){
    $(this).removeClass('highlighted');
  })

  $('#button').click(function(){
    var toAdd = $('input[name=CheckListItem]').val();
    console.log(toAdd);
    //saving the value of
     // input[name=CheckListItem] value into a var
     var $ToDoItem = $('<li class="item">' + toAdd + '</li>')
     console.log($ToDoItem);
     $('.list').append($ToDoItem);
     // append the 'toAdd' var to the list div, wrapped
     // in an '.item' div for later targetting.
     $('input[name=CheckListItem]').val('');
     // clear the value of the textbox.

     $(document).on('click', '.item', function(){
      $(this).remove();
     });
     // This removes the ToDo item when clicked.
     // had to use .on because we are not reloading the dom
     // .on takes: ( event,  selector, function(){} )
  });

  $(document).keydown(function(key){
    switch(parseInt(key.which,10)){
      // Left arrow is pressed (value 37)
      case 37:
        $('img').animate({left: "-=30px"}, 'fast');
        break;
      // Up Arrow is pressed (value 38)
      case 38:
        $('img').animate({top: "-=30px"}, 'fast');
        break;
      // Right Arrow is pressed (value 39)
      case 39:
        $('img').animate({left: "+=30px"}, 'fast');
        break;
      // Down arrow is pressed (value 40)
      case 40:
        $('img').animate({top: "+=30px"}, 'fast')
        break;
    }
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

});