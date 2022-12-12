/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  var obj={};
  largo=amigos.length;
  for(let i=0; i<largo; i++){
    ob=amigos[i];
    for(let clave in ob){
      //console.log(ob[clave]);
      if(ob.nombre===nombre){
        obj.nombre=nombre;
        obj.edad=ob.edad;
 		    break;	
      }
    }
  }
  return obj;
}

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo