var index = 1;
$(document).ready(function (){
    $.ajax({
        url: "https://my-json-server.typicode.com/diogoasp/diogoasp.github.io/publi/1",
        success: function(result){
                $('#publi').append(`<div><p>${result.text}</p></div>`);
        }
    });

    function changePubli(){
        $.ajax({
            url: "https://my-json-server.typicode.com/diogoasp/diogoasp.github.io/publi/"+index,
            success: function(result){
              console.log("changePubli dentro / index: "+index);
              console.log("https://my-json-server.typicode.com/diogoasp/diogoasp.github.io/publi/"+index);
              $('#publi').empty();
              $('#publi').append(`<div><p>${result.text}</p></div>`);
            }
        });
    }

    $('#publiUp').click(function(e){
        index++;
        changePubli();
    });

    $('#publiDown').click(function(e){
      if(index>1){
        index--;
        changePubli();
      }
    })
    $('#homeBtn').click(function(e){
      index = 1;
      changePubli();
    })
});


var con = document.getElementById('contraste');
function contrast(){
    $('body').css("background-color","black").css("color","white");
    $('a').css("color","white");
    $('#contraste').css("background-color","white").css("color","black");
    $('.spot').css("background-color","#4e4e4e");
    con.removeEventListener('click', contrast, false);
    con.addEventListener('click', n_contrast, false);
}

function n_contrast(){
  location.reload();
}
con.addEventListener('click', contrast, false);
