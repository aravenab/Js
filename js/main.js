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
  
  // for (let i = 0; i < 3; i++) {
  //   let mensaje = `Ingresa el monto número ${i + 1} para calcular el Bruto de todos tus montos ingresados juntos`;
  // let monto = parseInt(prompt(mensaje));
  //   if (monto <= 0) {
  //     console.log("No se puede calcular el IVA de números negativos o de 0");
  //     continue;
  //   }
  //   let resultado = calcular(monto, ivaInfo);
  //   resultados.push(resultado);
  // }
  
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
    
    console.log(monto1);
    console.log(monto2);
    console.log(monto3);
    const bruto1 = monto1 * 1.19;
    const bruto2 = monto2 * 1.19;
    const bruto3 = monto3 * 1.19;
    
    document.getElementById("resultado1").innerHTML = `El bruto de tu monto 1 es: ${bruto1}`;
    document.getElementById("resultado2").innerHTML = `El bruto de tu monto 2 es: ${bruto2}`;
    document.getElementById("resultado3").innerHTML = `El bruto de tu monto 3 es: ${bruto3}`;
  }

  


// STORAGE

// function calcularMonto() {
//   // Obtener los valores de los inputs
//   let monto1 = document.getElementById("monto1").value;
//   let monto2 = document.getElementById("monto2").value;
//   let monto3 = document.getElementById("monto3").value;

//   // Convertir los valores de los inputs a números
//   monto1 = parseFloat(monto1);
//   monto2 = parseFloat(monto2);
//   monto3 = parseFloat(monto3);

// Calcular el bruto
  let bruto = (monto1 + monto2 + monto3)* 1.19;

//   // Guardar el valor del bruto en localStorage
//   localStorage.setItem("bruto", bruto);

//   // Mostrar el resultado
//   document.getElementById("resultado").textContent = bruto;
// }

// Json ()
const infoProyecto = {
  curso: 'JavaScript',
  comision:  52125,
  empresa: 'CoderHouse',
}
const infoProyectoJson = JSON.stringify(infoProyecto);
localStorage.setItem('infoProyecto', infoProyectoJson)

console.log(infoProyectoJson)


   //storage
   //Guardar datos en localStorage
  localStorage.setItem('proyecto','Proyecto creado por Tomás Aravena');
  localStorage.setItem('edad', 26);

  //  Recuperar datos de localStorage
   const creadorProyecto = localStorage.getItem('proyecto');
   const edad = localStorage.getItem('edad');
   console.log(creadorProyecto); 
   console.log(edad); 




 

  // aqui esta el DOM + evento de click y cambio de nombre en js para html OK
  
  document.addEventListener('DOMContentLoaded', () => {
    // Selecionar el botón por su clase "btn"
    const btn = document.querySelector('.btn');
  
    // Cambiar el texto del botón
    btn.textContent = '¡Realizar el calculo!';
    
    // Agregar un listener al botón
    btn.addEventListener('click', () => {
      Swal.fire(
        '¡Realizaste el calculo!',
        'Puedes darle al ok y repetir el proceso las veces que desees',
        'success'
      )
      console.log('¡Haz clickeado el botón!');
    });
  });
  
  const btn =document.querySelector(".btn");

  // asincronia
  setTimeout(()=>(
    console.log("Sigues aquí?, si necesitas ayuda puedes llamarme al +569 81576344")
  ), 5000)

  btn.addEventListener('click', ()=>{
    btn.classList.remove("btn-primary")
    btn.classList.add("btn-warning")
  })

  //Promesas
  const promesa = (res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (res === true) {
          resolve("¡Entraste a mi proyecto!");
        } else {
          reject("Promesa rechazada");
        }
      }, 2500);
    });
  };
  // console.log(promesa(true));

  promesa(true).then((response)=> console.log(response));

  //Fetch
  const listaUl = document.querySelector("ul")
  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res)=> res.json(res))
  .then((post)=>{
    console.log(post);
    console.log(post.userId);
    console.log(post.title);
    console.log(post.body);
    // const li = document.createElement('li')
    // li.className ="card";
    // li.textContent =${post.title}
    // li.innerHTML= `
    // <h2> ${post.title} </h2>
    // <p> ${post.body} </p>`
    // listaUl.appendChild(li)
  });
  