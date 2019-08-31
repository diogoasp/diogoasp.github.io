$(document).ready(function(){

  function calculate(){
    var dtChegada = new Date($('#dataChegada').val());
    var dtSaida = new Date($('#dataSaida').val());
    // Quantidade de milisegundos em um dia
    const DIA = 24 * 60 * 60 * 1000;
    var qtdDias = (dtSaida.getTime()-dtChegada.getTime())/DIA;
    var valorCriancas = $('#qtdCrianca').val()*30.0;
    var nQuartos = $("input[name='quartos']:checked").val();
    var nQuartos2 = $("input[name='quartos2']:checked").val();
    var nQuartos3 = $("input[name='quartos3']:checked").val()
    var valorTotal = 0;
    // Tentei o Switch Case mas não rolou

    if(nQuartos == 1) valorTotal += 139.00;
    if(nQuartos == 2) valorTotal += 220.00;
    if(nQuartos == 3) valorTotal += 240.00;

    if(nQuartos2 == 1) valorTotal += 139.00;
    if(nQuartos2 == 2) valorTotal += 220.00;
    if(nQuartos2 == 3) valorTotal += 240.00;

    if(nQuartos3 == 1) valorTotal += 139.00;
    if(nQuartos3 == 2) valorTotal += 220.00;
    if(nQuartos3 == 3) valorTotal += 240.00;

    valorTotal += valorCriancas;
    valorTotal *= qtdDias;
    $('#final').empty();
    var nome = $('#nome').val();
    $('#final').append('<h3>Resumo: </h3><p>Nome:'+nome+'</p><p>Data Chegada:'+dtChegada+'</p><p>Data Saida: '+dtSaida+'</p><p>Valor:'+valorTotal+'</p>');
    $(this).prev('.form').append('<input type="submit" name="" value="Reservar" id="btnSubmit">');
  };

  function detalheCrianca(){
    var element = $('#divCrianca');
    if(element.is(':hidden')){
      $('#divCrianca').show();
    }else $('#divCrianca').hide();
  }


  $('#crianca').click(detalheCrianca);
  $('#btnCalcular').click(calculate);
});
