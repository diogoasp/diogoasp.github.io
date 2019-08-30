$(document).ready(function(){
  function hiddenElements(){
    var element = $(this).prev('.conteudo');

    $(element).is(':hidden') ?
    $(this).text('Ocultar Conteúdo') : $(this).text('Mostrar Conteúdo');
    $(element).toggle();
  }
  $('.enlace').click(hiddenElements);
});
