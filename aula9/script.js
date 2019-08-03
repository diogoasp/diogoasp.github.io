function getPrompt(){
  return prompt();
}

function calculate(){
  var inputDate = new Date(getPrompt()).getTime();
  var date = new Date().getTime();
  var d = new Date(date - inputDate);
  console.log(d);
  var days = d.getDay();
  var mounths = d.getMonth();
  var years = d.getFullYear() - 1970;
  alert("Dias: " + days + "\nMeses : " + mounths + "\nAnos: " + years);
}

function validate(){
  let inputEmail = getPrompt();
  var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
  if(pattern.test(inputEmail)){
    alert('Email válido!');
  } else alert('Email inválido!');
}
