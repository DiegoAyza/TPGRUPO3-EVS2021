$(document).ready(function() {
    if(localStorage.getItem('localVehiculosList') == null){
      cargarVehiculos();
    }
    const galeria = document.getElementById('galeria');
    var obras = getObras();
    mostrarObras(obras);
    //$("#modalObra").modal();
  
  });
  function modal(id){
    pintarModal(id)
    $("#modalObra").modal();
  }
  
  function pintarModal(id){
      var obra = searchObrasLocalStore(id);
      var ruta = './img/'+obra.foto;
      $('#imagenPrevia').html("<img src='"+ruta+"' />");
  
    nombre.innerHTML = obra.name;
    autor.innerHTML = obra.autor;
    description.innerHTML = obra.description;
    anio.innerHTML = obra.anio;
    estilo.innerHTML = obra.estilo;
    tecnica.innerHTML = obra.tecnica;
    disponibilidad.innerHTML= (obra.list3 == 1 ? 'En Venta' : 'En Exhibición');
    if(obra.list == 1){
        tipo.innerHTML = 'Original';
        clase.innerHTML= (obra.list2 == 1 ? 'Unica' : 'Sereada');
        observaciones.innerHTML = obra.textarea;
        $('#autorClasicoDiv').hide();
        $('#nombreAutorDiv').hide();
        $('#anioClasicoDiv').hide();
        $('#observacionesDiv').show();
    }else{
      tipo.innerHTML = 'Replica';
      $('#autorClasicoDiv').show();
      $('#nombreAutorDiv').show();
      $('#anioClasicoDiv').show();
      $('#observacionesDiv').hide();
      autorClasico.innerHTML = obra.autorClasico;
      nombreAutor.innerHTML = obra.nombreAutor;
      anioClasico.innerHTML = obra.anioClasico;
  }
  }
  
  function mostrarObras(ob){
  
    if(ob.length > 0){
      galeria.innerHTML = '';
  
      for(let valor of ob){
          var ruta = './img/'+valor.foto;
          galeria.innerHTML +=`
          <div class="item" id="itemObra" onClick="modal(${valor.id})">
              <h1>${valor.marca}</h1>
            <img src="${ruta}" alt="" class="item-img" width="350" height="300">
                <div class="item-text">
                  <h3>${valor.modelo}</h3>
                  <p> <b>Precio: </b>$${valor.precio}</p>
                  <p> <b>KM: </b>${valor.KM}</p>
                  <p> <b>Permuta: </b>${valor.permuta} </p>
                  <a class="btn btn-block btn-primary" >Comprar</a>
                 
                </div>
          </div>
          `
         }
        }else{
  swal("No hay resultados!", " As Click para Continuar!", "error");
        }
  }
  
      function buscarr(){
        var name = $("#texto").val();
           var buscarr2 = searchObrasName(name);
           mostrarObras(buscarr2);   
      }