$(document).ready(function(){
  function showQuartos() {
      if($('#nQuartos').val() == 2){
          $('#2quarto').show();
          $('#3quarto').hide();
      }
      if($('#nQuartos').val() == 3){
        $('#2quarto').show();
        $('#3quarto').show();
      }
      if($('#nQuartos').val() == 1){
        $('#2quarto').hide();
        $('#3quarto').hide();
      }
  };
  function calculate(){
    var dtChegada = new Date($('#dataChegada').val());
    var dtSaida = new Date($('#dataSaida').val());
    // Quantidade de milisegundos em um dia
    const DIA = 24 * 60 * 60 * 1000;
    var qtdDias = (dtSaida.getTime()-dtChegada.getTime())/DIA;
    var valorCriancas = $('#qtdCrianca').val()*30.0;
    var tQuartos = $("input[name='quartos1']:checked").val();
    var tQuartos2 = $("input[name='quartos2']:checked").val();
    var tQuartos3 = $("input[name='quartos3']:checked").val()
    var valorTotal = 0;

    // Tentei o Switch Case mas não rolou
    if(tQuartos == 1) valorTotal += 139.00;
    if(tQuartos == 2) valorTotal += 220.00;
    if(tQuartos == 3) valorTotal += 340.00;

    if(tQuartos2 == 1) valorTotal += 139.00;
    if(tQuartos2 == 2) valorTotal += 220.00;
    if(tQuartos2 == 3) valorTotal += 340.00;

    if(tQuartos3 == 1) valorTotal += 139.00;
    if(tQuartos3 == 2) valorTotal += 220.00;
    if(tQuartos3 == 3) valorTotal += 340.00;

    valorTotal += valorCriancas;
    valorTotal *= qtdDias;
    var nome = $('#nome').val();

    $('#final').empty();
    $('#final').append('<h3>Resumo: </h3><p>Nome:'+nome+'</p><p>Data Chegada:'+dtChegada+'</p><p>Data Saida: '+dtSaida+'</p><p>Valor: R$'+valorTotal+'</p>');
    $(this).prev('.form').append('<input type="submit" name="" value="Reservar" id="btnSubmit">');
  };

  function detalheCrianca(){
    var element = $('#divCrianca');
    if(element.is(':hidden')){
      $('#divCrianca').show();
    }else $('#divCrianca').hide();
  }

  $('#seQuartos').click(showQuartos);
  $('#crianca').click(detalheCrianca);
  $('#btnCalcular').click(calculate);
});
