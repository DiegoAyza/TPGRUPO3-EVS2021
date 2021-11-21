var misUsers = [];
var id;
$(document).ready(function() {
    $( "#formRegistro" ).submit(function( event ) {

      
      mensajeRegistro();
      saveUser() ;
      event.preventDefault();
  });
  

    var isAuth = localStorage.getItem('isAuth');
    if(isAuth != null){
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
  
 
  
  }
  });
  
  function saveUser() {
          getUsers();
          var id = getId();
          var name = $("#name").val();
          var apellido = $("#apellido").val();
          var domicilio = $("#domicilio").val();
          var fecha = $("#fecha").val();
          var dni = $("#dni").val();
          var tarjeta = $("#tarjeta").val();
          var email = $("#email").val();
          var password = $("#password").val();
          createUser(id, name,apellido,domicilio,fecha,dni,tarjeta, email, password);
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


//////////////////////////////////////////////////////////

       
       function createUser(id, name,apellido,domicilio,fecha,dni,tarjeta, email, password){
           var user = {
           id : id,
           name : name,
           apellido: apellido,
           domicilio: domicilio,
           fecha: fecha,
           dni: dni,
           tarjeta:tarjeta,
           email : email,
           password : password
         };
         
              misUsers.push(user);
              
               localStoregeUserList(misUsers);

         }
       
         function getUsers(){
           var storeList = localStorage.getItem('localUserList');
           if(storeList == null){
             misUsers = [];
             }else{
             misUsers = JSON.parse(storeList);
           }
           return misUsers;
         }
       
         function localStoregeUserList(list){
                 localStorage.setItem('localUserList', JSON.stringify(list));
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