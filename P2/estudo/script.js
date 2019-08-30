$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
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
