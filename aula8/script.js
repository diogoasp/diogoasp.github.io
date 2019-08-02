var str;

function promptGet(){
  return prompt('Entre com a palavra:');
}

function checkPalindrome(str) {
  for(var i = 0; i < str.length / 2; i++){
    if (str[i] != str[str.length - i - 1]) return false;
  }
  return true;
}

function startPalindrome(){
  str = promptGet();
  if(checkPalindrome(str)){
    alert("A palavra é um palíndromo!");
  }else{
    alert("A palavra não é um palíndromo!");
  }
}
