var misUsers = [];
var id;
$(document).ready(function() {
    $( "#formRegistro2" ).submit(function( event ) {
      mensajeRegistro();
      saveVehiculo() ;
      event.preventDefault();
  });
  
    var isAuth = localStorage.getItem('isAuth');
    /*if(isAuth != null){
      location.href ="./index.html";
    }else{
        $("#login").show();
        $("#register").show();
        $("#logout").hide();
        $("#panel").hide();
  
  $("#login").click( function() {
            location.href ="./login.html";
                });
  
  $("#home").click( function() {
            location.href ="./index.html";
                });
  }*/
  $("#home").click( function() {
    location.href ="./index.html";
        });
  });

  function saveVehiculo() {
          //getUsers();
          var id = 10;//getId();
          var marca2 = $("#marca1").val();
          var modelo2 = $("#modelo1").val();
          var precio2 = $("#precio1").val();
          var ano2 = $("#ano1").val();
          var km2 = $("#km1").val();
          var vendedor2 = $("#vendedor1").val();
          

          var foto2 ='ka.jpg';//$("#foto1").val();//



          var permuta2 ="SI";// $("#permuta1").val();
          cargarVehiculos();
        saveObra(createObras(id, vendedor2, marca2, modelo2, ano2, precio2, permuta2, km2, foto2, true));
        

     }

  
       function myFunction() {
       var checkBox = document.getElementById("myCheck");
       var text = document.getElementById("text");
  
       if (checkBox.checked == true){
         text.style.display = "block";
         $("#checkBox").hide();
       } else {
         text.style.display = "none";
         
         $("#checkBox").show();
       }
      }
  
     function mensajeRegistro(){
        swal({
          title:"Muy Bien!",
          text: "Continuar!",
          icon: "Success",
          button: "Continuar",
          }).then((value) => {
               location.href ="./index.html";
        });

        
       } function mensajeErrorRegistro(){
        swal({
          title: "Algun Dato esta Mal!",
          text: "Toca Continuar para volver a Intentarlo!",
          icon: "warning",
          button: "Continuar",
          });
       }

       function getId(){
        var storeList = localStorage.getItem('localUserList');
        if(storeList == null){
          id = 1;
          }else{
          misUsers = JSON.parse(storeList);
          id = misUsers.length +1;
          }
        return id;
      }