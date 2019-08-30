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

function validate2(){
  let inputEmail = getPrompt();
  var pt1 = inputEmail.split("@");
  if((pt1.length == 2) && (pt1[0].length>0)){
    var pt2 = pt1[1].split(".");;
    if (pt2.length > 1){
      if(pt2[1].length > 2){
        alert('Email válido');
        return 0;
      }
    }
  }
  alert('Email inválido!');
  return 1;
}
