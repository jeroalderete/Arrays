/*
Obligo al usuario a cargar todos los productos disponibles para luego decidir cual quiere comprar
*/

//Declaro un array vacio 

const listaProductos = [];

//Luego indicamos el maximo de productos a cargar disponibles
let limiteProductos = 3;

/* En un bucle do while pedimos que se ingrese
el nombre de los productos que iran dentro del array */
do {
  let entrada = prompt("Bienvenido a Batacazo ! Ingrese todos los nombres de los productos de la tienda");
  listaProductos.push(entrada.toUpperCase());
  console.log(listaProductos.length);
  // Se cuenta la cant de valores que hay dentro del array
} while (listaProductos.length <= limiteProductos);
{
  alert("Excelente! ud ha agregado 4 productos !");
  /*Y cuando el array llega al limiteindicado
    en la variable  el bucle termina
    con un mensaje de alert en el que se prosigue con la compra de los productos */
}

// utilizo un ciclo for en todo el simulador para el ingreso maximo de 3 usuarios

  let nombre = prompt("ahora  ingrese su nombre de usuario").toLowerCase();
  // validacion de ingreso de nombre
  if (!isNaN(nombre) || nombre === "") {
    alert("ud ingreso un nombre incorrecto");
  } else {
    // defino el iva en una variable GLOBAL y el envio como un costo fijo

    // IVA CON FUNCION FLECHA
    const iva = (x) => x * 0.21;
    const envioTotal = 1000;

    // Aplico una funcion para calcular el precio del total de la compra

    function calcularPrecioTotal(
      precioUnidad,
      cantidadUnidades,
      porcentajeDescuento
    ) {
      // calculo del descuento sobre el precio de la unidad segun el cupon de descuento
      let descuento = (precioUnidad * porcentajeDescuento) / 100;
      // aplico el descuento total al precio de unidad
      let precioConDescuento = precioUnidad - descuento;
      // retorno el precio total multiplicado por las unidades
      return precioConDescuento * cantidadUnidades;
    }

    // pedimos al usuario que ingrese el precio de la unidad que desea comprar

    let precio = parseInt(
      prompt(
        `Hola ${nombre}! ahora ingrese el precio del producto que desea comprar!`
      )
    );
    // solicitamos al usuario la cantidad de unidades que desea llevar
    let cantidad = parseInt(
      prompt("ingrese la cantidad de unidades que desea llevar")
    );
    // le pedimos al usuario que ingrese el cupon de descuento por la unidad
    let descuento = parseInt(prompt("Ingrese su cupon de descuento"));

    // Realizo Validaciones de datos para que el usuario cumpla con los requisitos

    if (isNaN(precio) || precio < 4000) {
      alert("ud ha ingresado un precio invalido");
    } else if (precio > 4000 && precio < 7000) {
      alert("ud ha ingresado un precio invalido");
    } else if (precio > 7000 && precio < 10000) {
      alert("ud ha ingresado un precio invalido");
    } else if (precio > 10000 && precio < 15000) {
      alert("ud ha ingresado un precio invalido");
    } else if (isNaN(cantidad)) {
      alert("ud ha ingresado un precio invalido");
    } else if (isNaN(descuento)) {
      alert("ud ha ingresado un precio invalido");
    } else {
      // llamo a la funcion pero sin el iva incluido
      let resultadoSinIva = calcularPrecioTotal(precio, cantidad, descuento);
      // calculo el iva multiplicando al resultado de la funcion que llame
      let resultadoConIva = iva(resultadoSinIva);
      let resultadoTotal = resultadoSinIva + resultadoConIva + envioTotal;
      // imprimimos en pantalla el resultado total con iva incluido
      alert(
        `el precio total de su compra con iva incluido  mas el envio es de $ ${resultadoTotal} pesos`
      );
      alert(
        `Muchas gracias por su compra ${nombre}! No olvides de revisar nuestras promociones! - BATACAZO`
      );
    }
  }


// Fin del simulador interactivo
