var main = function() {
  $("#top-text").keyup(function(){
    var $toptext = $('input[id=top-text]').val();
    $('.top-caption').empty();
    $('.top-caption').append($toptext);
  });
  $("#bottom-text").keyup(function(){
    var $toptext = $('input[id=bottom-text]').val();
    $('.bottom-caption').empty();
    $('.bottom-caption').append($toptext);
  });
  $("#image-url").keyup(function(){
    var $toptext = $('input[id=image-url]').val();
    $('.memepic').empty();
    $('.memepic').attr('src', $toptext);
    
  });
}
 
$(document).ready(main);