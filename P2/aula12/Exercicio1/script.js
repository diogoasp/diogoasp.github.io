$(document).ready(function(){
  $('#textInput').keyup(function(){
    $('span').text($('#textInput').val());
  });
});
