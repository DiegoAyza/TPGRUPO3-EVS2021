var misVehiculos = [];
function cargarVehiculos(){

var vehiculo1 = {
    id : '1',
    vendedor : 'Pedro',
    marca : 'Ford',
    modelo : 'Eco Sport',
    anio : '2016',
    precio : '1.500.000',
    permuta : 'SI',
    KM : '15.000',
    foto : 'ford.jpg',
    status : true,
};
misVehiculos.push(vehiculo1);

var vehiculo2 = {
    id : '2',
    vendedor : 'Lucas',
    marca : 'Fiat',
    modelo : 'Palio',
    anio : '2015',
    precio : '75.000',
    permuta : 'SI',
    KM : '45.000',
    foto : 'fiat.jpg',
    status : true,
    };
misVehiculos.push(vehiculo2);

var vehiculo3 = {
    id : '3',
    vendedor : 'Juan',
    marca : 'Peugeot',
    modelo : '208',
    anio : '2015',
    precio : '1.000.000',
    permuta : 'NO',
    KM : '11.500',
    foto : 'peugeot.jpg',
    status : true,
    };
misVehiculos.push(vehiculo3);
    
var vehiculo4 = {
    id : '4',
    vendedor : 'Noelia',
    marca : 'Chevrolet',
    modelo : 'Camaro',
    anio : '2019',
    precio : '3.000.000',
    permuta : 'NO',
    KM : '10.000',
    foto : 'chevrolet.png',
    status : true,
    };
misVehiculos.push(vehiculo4);

var vehiculo5 = {
    id : '5',
    vendedor : 'Luciano',
    marca : 'Citroen',
    modelo : 'C4',
    anio : '2017',
    precio : '1.200.000',
    permuta : 'SI',
    KM : '45.000',
    foto : 'citroen.jpg',
    status : true,
    };
misVehiculos.push(vehiculo5);
        
var vehiculo6 = {
    id : '6',
    vendedor : 'Jose',
    marca : 'Toyota',
    modelo : 'Corolla',
    anio : '2020',
    precio : '1.250.000',
    permuta : 'SI',
    KM : '35.000',
    foto : 'toyota.jpg',
    status : true,
    };
misVehiculos.push(vehiculo6);

var vehiculo7 = {
    id : '7',
    vendedor : 'Leonardo',
    marca : 'Renault',
    modelo : 'Duster',
    anio : '2016',
    precio : '1.400.000',
    permuta : 'SI',
    KM : '37.500',
    foto : 'renault.jpg',
    status : true,
    };
misVehiculos.push(vehiculo7);
            
var vehiculo8 = {
    id : '8',
    vendedor : 'David',
    marca : 'Volskwagen',
    modelo : 'Gol',
    anio : '2014',
    precio : '800.000',
    permuta : 'SI',
    KM : '80.000',
    foto : 'volkswagen.jpg',
    status : true,
    };
misVehiculos.push(vehiculo8);

var vehiculo9 = {
    id : '9',
    vendedor : 'Daniel',
    marca : 'Honda',
    modelo : 'Civic',
    anio : '2020',
    precio : '1.500.000',
    permuta : 'SI',
    KM : '10.000',
    foto : 'civic.jpg',
    status : true,
    };
misVehiculos.push(vehiculo9);

localStoregeObrasList(misVehiculos);
};


var id;


function createObras(id, vendedor, marca, modelo, anio, precio, permuta, KM, foto, status){
    var obra = {
    id : id,
    vendedor : vendedor,
    marca : marca,
    modelo : modelo,
    anio : anio,
    precio : precio,
    permuta : permuta,
    KM : KM,
    foto : foto,
    status : status,
    };
    return obra;
    }

  function saveObra(obra){
    misVehiculos.push(obra);
    localStoregeObrasList(misVehiculos);
  }

  function getObras(){

    var obrasList = localStorage.getItem('localVehiculosList');
    if(obrasList == null){
      misVehiculos = [];
      }else{
      misVehiculos = JSON.parse(obrasList);
    }
    return misVehiculos;
  }
  function localStoregeObrasList(list){
          localStorage.setItem('localVehiculosList', JSON.stringify(list));
  }

  function getId(){
    var obrasList = localStorage.getItem('localVehiculosList');
    if(obrasList == null){
      id = 1;
      }else{
      misVehiculos = JSON.parse(obrasList);
      id = misVehiculos.length +1;
      }
    return id;
  }       
  function searchObrasName(name){
    misVehiculos = getObras();
    if(name.length == 0){
      return misVehiculos;
    }else{
    var busquedaObras = [];
      for(let i = 0; i < misVehiculos.length; i++){
        if(misVehiculos[i].marca.toLowerCase()  == name.toLowerCase() ||
           misVehiculos[i].modelo.toLowerCase() == name.toLowerCase() ||
           misVehiculos[i].precio == name
           /*misVehiculos[i].list3.toLowerCase() == name.toLowerCase()*/) {
              busquedaObras.push(misVehiculos[i]);
             }
        /*else{
          if(name.toLowerCase() == 'SI' &&
          misVehiculos[i].permuta.toLowerCase() == 1 ){
            busquedaObras.push(misVehiculos[i]);
          }
          if(name.toLowerCase() == 'NO' &&
          misVehiculos[i].permuta.toLowerCase() != 1 ){
            busquedaObras.push(misVehiculos[i]);
          }
        }*/
          }
            return busquedaObras;
      }
    }

  function searchObrasLocalStore(id){
      misVehiculos = getObras();
    for(let i = 0; i < misVehiculos.length; i++){
      if(misVehiculos[i].id == id){
            return misVehiculos[i];
           }
        }
       return null;
    }

    // function searchObrasName(name){
    //   misVehiculos = getObras();
    //   if(name.length == 0){
    //     return misVehiculos;
    //   }else{
    //   var busquedaObras = [];
    //     for(let i = 0; i < misVehiculos.length; i++){
    //       if(misVehiculos[i].name == name){
    //             busquedaObras.push(misVehiculos[i]);
    //            }
    //         }
    //           return busquedaObras;
    //     }
    //   }

    function editarObra(id, obra){
      misVehiculos = getObras();
      for(i of misVehiculos){
        if(i.id == id){
          var j = misVehiculos.indexOf(i);
          misVehiculos.splice(j, 1, obra);
          localStoregeObrasList(misVehiculos);
             }
        }
    }

  function deleteObra(id){
      misVehiculos = getObras();
      for(i of misVehiculos){
        if(i.id == id){
              var j = misVehiculos.indexOf(i);
              misVehiculos.splice(j, 1);
              localStoregeObrasList(misVehiculos);
             }
          }
         return null;
    }
