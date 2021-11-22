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

$("#vender").click( function() {
       location.href ="./vender.html";
       });                    

/*$("#buscarr").click( function() {
  buscarr();
  });*/
        ///////////////////////////
});
function salir() {
  location.href ="./index.html";
}




/*
//const carrito = document.getElementById('carrito');
const TodosVehiculos = document.getElementById('lista-productos');
const productos = document.getElementById('lista-productos');




function buscarVehiculo(){
  /*for(let i = 0; i < TodosVehiculos.length; i++){
    if(TodosVehiculos[i].id == id){
          return TodosVehiculos[i];
         }
   return null;
} 
console.log(TodosVehiculos);
alert("casa");
}


function comprarProducto(e){
  e.preventDefault();
  //Delegado para agregar al carrito
  if(e.target.classList.contains('agregar-carrito')){
      const producto = e.target.parentElement.parentElement;
      //Enviamos el producto seleccionado para tomar sus datos
      this.buscarProducto(producto);
  }
}


function buscarProducto(producto){
  const infoProducto = {
      titulo: producto.querySelector('h4').textContent,
      precio: producto.querySelector('.precio span').textContent,
      id: producto.querySelector('a').getAttribute('data-id'),
      cantidad: 1
  };
  let productosLS;
  productosLS = this.obtenerProductosLocalStorage();
  productosLS.forEach(function (productoLS){
      if(productoLS.id === infoProducto.id){
          productosLS = productoLS.id;
      }
  });
  if(productosLS === infoProducto.id){
      Swal.fire({
          type: 'info',
          title: 'Oops...',
          text: 'El producto ya está agregado',
          showConfirmButton: false,
          timer: 1000
      })
  }
  else {
      this.insertarCarrito(infoProducto);
  }

}
*/



