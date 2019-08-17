let action1 = document.getElementById('enlace_1');
action1.addEventListener('click',() => {
  ocultarElemento(action1, 'conteudo_1');
},false);

let action2 = document.getElementById('enlace_2');
action2.addEventListener('click',() => {
  ocultarElemento(action2, 'conteudo_2');
},false);

let action3 = document.getElementById('enlace_3');
action3.addEventListener('click',() => {
  ocultarElemento(action3, 'conteudo_3');
},false);

function ocultarElemento(action, id){
  let element = document.getElementById(id);
  var display = element.style.display;
  if(display == "none"){
    element.style.display = 'block';
    action.textContent = 'Ocultar Conteúdo'
  }else {
    element.style.display = 'none';
    action.textContent = 'Mostrar Conteúdo'
  }
}
