$(document).ready(function(){
  (function(){
    alert("hola");
  });

  $("#logout").click( function() {
    
    localStorage.removeItem('isAuth');
    $("#login").show();
    $("#register").show();
    $("#vender").hide();
    $("#comprar").hide();
    $("#serviceym").hide();
    $("#seguro").hide();
    $("#logout").hide();
    //location.href="./index.html";
    
  });

    var isAuth = localStorage.getItem('isAuth');
      if ( isAuth != null) {
        $("#login").hide();
        $("#register").hide();
        $("#vender").show();
        $("#comprar").show();
        $("#serviceym").show();
        $("#seguro").show();
        $("#logout").show();
          }else{
      $("#login").show();
      $("#register").show();
      $("#vender").hide();
      $("#comprar").hide();
      $("#serviceym").hide();
      $("#seguro").hide();
      $("#logout").hide();
        }
      

 /* $("#logout").click( function() {
            localStorage.removeItem('isAuth');
          //  localStorage.clear();
            location.href ="./index.html";
        });*/

$("#login").click( function() {
          location.href ="./login.html";
              });


$("#register").click( function() {
        location.href ="./registrar.html";
                    });
        ///////////////////////////
});
function salir() {
  location.href ="./index.html";
}
