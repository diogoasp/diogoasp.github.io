function addElement(){
  var text = document.getElementById('text').value;
  if(text.length > 0){
    var newElement = document.createElement('li');
    newElement.textContent = text;
    var ul = document.querySelector('ul');
    ul.appendChild(newElement);
  }else alert("Entrada de texto vazia.");
}
document.getElementById('b1').addEventListener('click', addElement, false);

function turnLight(){
  if(this.src.includes('off')){
    this.src = "./img/lampada_on.gif";
  }else this.src = "./img/lampada_off.gif";
}

function breakLampada(){
  if(!this.src.includes('broken')){
    this.src = "./img/lampada_broken.gif";
    this.removeEventListener('click', turnLight, false);
  }
}

function fixLampada(){
  if(this.src.includes('broken')){
    this.src = "./img/lampada_off.gif";
    this.addEventListener('click', turnLight, false);
  }
}
document.getElementById('img').addEventListener('click', turnLight, false);
document.getElementById('img').addEventListener('dblclick', breakLampada, false);
document.getElementById('img').addEventListener('mousewheel', fixLampada, false);
