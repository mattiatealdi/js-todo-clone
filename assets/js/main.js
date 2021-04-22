
// Soluzione 1
$(document).ready(function(){

  var arrayTodo = [
    'Mangiare fuori',
    'Comprare un nuovo libro',
    'Andare in aeroporto a prendere mia sorella',
  ];

  for(i = 0; i < arrayTodo.length; i++){
    var elementTodo = arrayTodo[i];
    console.log(elementTodo);

    var elementHTML = '<li><p>' + elementTodo + '</p><i class="fas fa-trash-alt"></i></li>'
    $('.container ul').append(elementHTML);
  }

  $('#text').keyup(function(event){
    console.log(event.which)

    if(event.which === 13){
      console.log("invio");
      if($(this).val().length > 3){
        var element = $('.template li').clone();
        element.find('.text').append($(this).val());
        $('.container ul').append(element);
      }
    }

  });

  $(document).on('click', '.fa-trash-alt', function(){
    var currentElement = $(this).parent('li');
    currentElement.remove();
  });



});


// Soluzione 2
$(document).ready(function(){

  var arrayTodo = [
    'Mangiare fuori',
    'Comprare un nuovo libro',
    'Andare in aeroporto a prendere mia sorella',
  ];

  for(var i = 0; i < arrayTodo.length; i++){
    var elementTodo = arrayTodo[i];

    var item = $('.template li').clone();
    item.find('.text').append(elementTodo);
    $('.container ul').append(item);
  }

  $('#text').keyup(function(event){
    console.log(event.which);
    if(event.which === 13){
      console.log("invio");
      var element = $(this).val().trim();
      if(element.length > 3){
        var item = $('.template li').clone();
        item.find('.text').append(element);
        $('.container ul').append(item);
      }
    }
  });


  $(document).on('click', '.fa-trash-alt', function(){
    var currentTodo = $(this).parent();
    currentTodo.remove();
  });

});