$(document).ready(function(){
  (function(){
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

$("#login").click( function() {
          location.href ="./login.html";
              });


$("#register").click( function() {
        location.href ="./registrar.html";
                    });

$("#vender").click( function() {
       location.href ="./vender.html";
       });                    

/*$("#buscarr").click( function() {
  buscarr();
  });*/

});
function salir() {
  location.href ="./index.html";
}

