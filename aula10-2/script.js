var button = document.getElementById('b1');
button.addEventListener('click', addElement, false);

function addElement(){
  var text = document.getElementById('text');
  var newElement = document.createElement('li');
  newElement.textContent = text.value;
  var ul = document.querySelector('ul');
  ul.appendChild(newElement);
}

var img = document.getElementById('img');
img.addEventListener('click', lampada, false);

function lampada(){
  if(this.src.includes('off')){
    this.src = "./lampada_on.gif";
  }else{
    this.src = "./lampada_off.gif";
  }
}
