var misUsers = [];

$(document).ready(function() {
  $("#formularioLogin" ).submit(function( event ) {
   validarUser();
   event.preventDefault();

 });
  var isAuth = localStorage.isAuth;
  if(isAuth){
    location.href ="./index.html";
   }
});

function validarUser() {
  var email = $("#email").val();
  var password = $("#password").val();
  var existsUser = searchUserLocalStore(email, password);

  if(existsUser){
        localStorage.setItem('isAuth', true);
        mensajeLoginSuccess();
        }else{
         mensajeLoginError();
    }
}

function salir() {
  location.href ="./index.html";
}

function mensajeLoginSuccess(){
  swal({
  title: "Muy bien!",
  text: "Te Logueaste Correctamente!",
  icon: "success",
  button: "Continuar",
}).then((value) => {
           location.href ="./index.html";
});
}

function mensajeLoginError(){
  swal({
  title: "Algo Salio mal!",
  text: "Toca Continuar para volver a Intentarlo!",
  icon: "warning",
  button: "Continuar",
});
}
/////////////////////////////////////
function searchUserLocalStore(email, password){
  misUsers = getUsers();
  for(let i = 0; i < misUsers.length; i++){
    if(misUsers[i].email == email && misUsers[i].password == password){
          return true;
         }
      }
     return false;
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