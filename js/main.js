// Inicio de la primera entrega
// const ivaInc = 1.19;
// function calcular(monto) {
//   let resultado = monto * ivaInc;
//   return resultado;
// }

// let montoTotal = 0;
// for (let i = 0; i < 3; i++) {
//   let mensaje = `Ingresa el monto número ${i + 1} para calcular el Bruto de todos tus montos ingresados juntos`;
//   let monto = parseInt(prompt(mensaje));
//   if (monto <= 0) {
//     console.log("No se puede calcular el IVA de números negativos o de 0");
//     continue;
//   }
//   montoTotal += monto;
// }
// let resultadoFinal = calcular(montoTotal);

// console.log(resultadoFinal);

// Término de la primera entrega

//Inicio de la segunda entrega ---------------------------------------------------------------
// const ivaInfo = {
//     tasa: 1.19,
//     moneda: 'CLP'
//   };
  
//   function calcular(monto, ivaInfo) {
//     let iva = monto * ivaInfo.tasa;
//     let total = monto + iva;
//     return {
//       monto: monto,
//       iva: iva,
//       total: total,
//       moneda: ivaInfo.moneda
//     };
//   }
  
//   function buscarResultadoPorMonto(monto) {
//     return resultados.find(resultado => resultado.monto === monto);
//   }
  
//   let resultados = [];
  
//   for (let i = 0; i < 3; i++) {
//     let mensaje = `Ingresa el monto número ${i + 1} para calcular el Bruto de todos tus montos ingresados juntos`;
//     let monto = parseInt(prompt(mensaje));
//     if (monto <= 0) {
//       console.log("No se puede calcular el IVA de números negativos o de 0");
//       continue;
//     }
//     let resultado = calcular(monto, ivaInfo);
//     resultados.push(resultado);
//   }
  
//   resultados = resultados.filter(resultado => resultado.monto > 0);
  
//   console.log(resultados);
  
//   let montoBuscado = parseInt(prompt("Ingrese el monto que desea buscar"));
//   let resultadoBuscado = buscarResultadoPorMonto(montoBuscado);
  
//   if (resultadoBuscado) {
//     console.log(`El resultado para el monto ${montoBuscado} es: ${JSON.stringify(resultadoBuscado)}`);
//   } else {
//     console.log(`No se encontró un resultado para el monto ${montoBuscado}`);
//   }
  
//   let montoTotal = resultados.reduce((total, resultado) => total + resultado.total, 0);
  
//   console.log(`El monto total a pagar es: ${montoTotal} ${ivaInfo.moneda}`);
// fin segunda entrega

// inicio tercera entrega ----------------------------------------------------------------------------------
// const formulario = document.querySelector('#formulario')
// const btnSend = document.querySelector('#boton-enviar')
// btnSend.addEventListener('click', enviarForm)
// function enviarForm(e){
//   e.preventDefault();
//   const formular = form['nombre'].value
//   const formular2 = form['nombre2'].value
//   const formular3 = form['nombre3'].value

//   const formularTotal = {
//     form = nombre
//     form2 = nombre2
//     form3 = nombre3

//   }
//   console.log(formularTotal)

//   document.write(` ${formularTotal.nombre} ${formularTotal.nombre2} ${formularTotal.nombre3}`)
// }






const ivaInfo = {
    tasa: 1.19,
    moneda: 'CLP'
  };
  
  function calcular(monto, ivaInfo) {
    let iva = monto * ivaInfo.tasa;
    let total = monto + iva;
    return {
      monto: monto,
      iva: iva,
      total: total,
      moneda: ivaInfo.moneda
    };
  }
  
  function buscarResultadoPorMonto(monto) {
    return resultados.find(resultado => resultado.monto === monto);
  }
  
  let resultados = [];
  
  for (let i = 0; i < 3; i++) {
    let mensaje = `Ingresa el monto número ${i + 1} para calcular el Bruto de todos tus montos ingresados juntos`;
   // let monto = parseInt(prompt(mensaje));
    if (monto <= 0) {
      console.log("No se puede calcular el IVA de números negativos o de 0");
      continue;
    }
    let resultado = calcular(monto, ivaInfo);
    resultados.push(resultado);
  }
  
  resultados = resultados.filter(resultado => resultado.monto > 0);
  
  console.log(resultados);
  
  let montoBuscado = parseFloat(document.getElementsByClassName("montoBuscado").value);
let resultadoBuscado = buscarResultadoPorMonto(montoBuscado);

  
  //JSON
  if (resultadoBuscado) {
    console.log(`El resultado para el monto ${montoBuscado} es: ${JSON.stringify(resultadoBuscado)}`);
  } else {
    console.log(`No se encontró un resultado para el monto ${montoBuscado}`);
  }
  
  let montoTotal = resultados.reduce((total, resultado) => total + resultado.total, 0);
  
  console.log(`El monto total a pagar es: ${montoTotal} ${ivaInfo.moneda}`);


  function calcularMonto() {
    const monto1 = parseFloat(document.getElementById("monto1").value);
    const monto2 = parseFloat(document.getElementById("monto2").value);
    const monto3 = parseFloat(document.getElementById("monto3").value);
    
    const bruto1 = monto1 * 1.19;
    const bruto2 = monto2 * 1.19;
    const bruto3 = monto3 * 1.19;
    
    document.getElementById("resultado1").innerHTML = `El bruto de tu monto 1 es: ${bruto1}`;
    document.getElementById("resultado2").innerHTML = `El bruto de tu monto 2 es: ${bruto2}`;
    document.getElementById("resultado3").innerHTML = `El bruto de tu monto 3 es: ${bruto3}`;
}

  











  // aqui esta el DOM + evento de click y cambio de nombre en js para html OK
  
  document.addEventListener('DOMContentLoaded', () => {
    // Selecionar el botón por su clase "btn"
    const btn = document.querySelector('.btn');
  
    // Cambiar el texto del botón
    btn.textContent = '¡Realizar el calculo!';
  
    // Agregar un listener al botón
    btn.addEventListener('click', () => {
      console.log('¡Haz clickeado el botón!');
    });
  });
  
