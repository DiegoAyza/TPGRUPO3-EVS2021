$(document).ready(function() {
    $( "#formRegistro2" ).submit(function( event ) {
      mensajeRegistro();
      saveVehiculo() ;
      event.preventDefault();
  });
  
    var isAuth = localStorage.getItem('isAuth');
    
  $("#home").click( function() {
    location.href ="./index.html";
        });
  });

  function saveVehiculo() {
          var id = 10;//getId();
          var marca2 = $("#marca1").val();
          var modelo2 = $("#modelo1").val();
          var precio2 = $("#precio1").val();
          var ano2 = $("#ano1").val();
          var km2 = $("#km1").val();
          var vendedor2 = $("#vendedor1").val();
          var permuta2 =$("#permutar2").val();

           foto2 ='ka.jpg';
          //var foto2 =$("#foto1").val();

          cargarVehiculos();
        saveObra(createObras(id, vendedor2, marca2, modelo2, ano2, precio2, permuta2, km2, foto2, true));
     }
  
     function mensajeRegistro(){
        swal({
          title:"Muy Bien",
          text: "Continuar",
          icon: "Success",
          button: "Continuar",
          }).then((value) => {
               location.href ="./index.html";
        });
        } 
      function mensajeErrorRegistro(){
        swal({
          title: "Algun Dato esta Mal!",
          text: "Toca Continuar para volver a Intentarlo!",
          icon: "warning",
          button: "Continuar",
          });
       }