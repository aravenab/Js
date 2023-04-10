// -------------------------------------------------------------------------- Clase 1 ----------------------------------------------------------------
// // declaracion de variables
// let apellido = "Gomez";
// let apellido1 = "Perez Gonzalez";
// const PI = 3.14159; // la const no es modificable

// let numero;

// // asignacion
// numero = 12

// // reasignacion de valores
// apellido1 = "Perez Perez";
// apellido1 = 23;

// // metodos de salida
// console.log(numero);
// alert(apellido1);

// // metodos de entrada
// let nombre2 = prompt("ingresa tu nombre");

// console.log(nombre2);

// ----------------------------------------------------------------------------- Clase 2 ---------------------------------------------------------------

// convertir strings de texto a numero
// parseFloat: Convierte a numero decimal  ; ejemplo: altura ó peso
// parseInt: Convierte a numero entero ; ejemplo: edad

// let nombre = promptjuani("ingresa tu nombre");
// console.log("bienvenido/a " + nombre);
// // primera manera de parsear
// let n1 = parseInt( prompt("Ingresa un numero"));
// let n2 = parseInt(prompt("ingresa un numero"));
// // segunda manera de parsear
// n1= parseFloat(n1)

// let res = n1 + n2
// console.log("el resultado de la suma entre " + n1 + " y " + n2 + " es " + res);
// 20

// let condicion =true;
// if (condicion){
//     console.log("vas a ver el mensaje")
// }

// // = es asignacion ; == comparacion;
// let numero=10
// if(numero==10 ){
//     console.log("son iguales")
// }
// // existe el else; y el else if;
// else{
//     console.log("no son iguales")
// }

// console.log("fin del proceso")

// ----------------------------------------------------------------------------- Clase 3 ---------------------------------------------------------------

// //For
// for (let i=0; i < 10; i++){

// // bloque de ejecucion

//     console.log(i);
// }

// //

//Continue

// //ejemplo de lista de numeros impares
// for (let i = 0; i < 10; i++) {
//     if(i % 2 == 0){
//         continue;
//     }
//     console.log(i)
// }

// //ejemplo de lista de numeros pares
// for (let i = 0; i < 10; i++) {
//     if(i % 2 !== 0){
//         continue;
//     }
//     console.log(i)
// }

// ejercicio

// for (let i = 0; i < 10; i++) {
//     if(i % 1 && i == 0){
//       continue;
//    }
//    console.log(i)
// 

// let numero = 15;
// let nombre = prompt ("cuál es tu nombre?");

// let dineroCofla = prompt ("cuanto dinero tienes?") ;

// let roberto = 1.5;
// let pedro = 1.7;
// let cofla = 3;

// let palitoDeHeladoDeAgua = 0.6;
// let palitoDeHeladoDeCrema = 3;
// let bombonheladomarcaheladix =3;
// let bombonheladomarcaheladovich =3;
// let bombonheladomarcaheraldo =3
// let potecitodeheladoconconfites =3;
// let potedeUnCuarto =3;

// if (dineroCofla <0.6){
//     alert("no te alcanza")
// }

// else if (dineroCofla >= 0.6 && dineroCofla >= 2.9 ) alert("comprate el mas caro")

// ----------------------------------------capitulo 2----------------------------------------------------------------------------------------------------

// // let frutas = ["banana", "manzana","pera"]
// // document.write(frutas[2])

// let animales = ["gato", "perro", "tiranosaurio rex"];
// // for in muestra la posicion
// for (animal in animales) {
//   document.write(animal + "<br>");
// }



// document.write("<br>");


// // for of muestra el valor
// for (animal of animales) {
//   document.write(animal + "<br>");
// }

// // declarar
// function funcion1 () {
//     respuesta = prompt("hola, como te va?")
// if(respuesta == "bien"){
//     alert("me alegro")
// }

// else if (respuesta == "mal"){
//     alert("una pena")
// }

// else{
//     alert("responde bien")
// }
// }

// // Implementar, llamar a la funcion


// ----------------------------------------------------------------------------- Clase 4 ---------------------------------------------------------------


// function impuestos(empresa,persona,operacion) {
//     switch (operacion) {
//        case "empresa":
//           return empresa * 1,19;
    
//           case "persona":
//           return persona * 1,13;
 
//        default:
//           return "operación no valida";
         
//  }
//  let calculo = impuestos(10000, 10000, )
//  }


// funciones anonimas
// const saludo2= function (saludo, nombre){
//     console.log( saludo + " " + nombre);
// }

// saludo2("hola", "Dani")

//funciones flecha ()=>{} ; bi hace falta poner un return, pero si uso {} necesito poner un return


/// preentrega 1, debe haber una funcion, un bucle (for, while, etc), un if + else, variables


// HTML + CSS en bootstrap  <!-- <form class="container">
    //     <div class="mb-3">
    //     <label for="baseImponible" class="form-label">Base Imponible</label>
    //     <input type="number" class="form-control sm" id="exampleInputEmail1" aria-describedby="100">
    //     <div id="emailHelp" class="form-text">revisa dos veces antes de estar list@.</div>
    //   </div>
    //   <div class="mb-3">
    //     <label for="IVA" class="form-label">IVA</label>
    //     <input type="number" class="form-control" id="IVA" readonly>
    //   </div>
     
    //   <div class="mb-3">
    //     <label for="Total" class="form-label">Total</label>
    //     <input type="number" class="form-control" id="IVA" readonly>
    //   </div>
     

    //   <button type="button" class="btn btn-primary" onclick="Calcular()">Calcular</button>
    // </form> -->

    let monto = parseFloat(prompt("Ingresa un Monto para calcular el Bruto"))
    const ivaInc = 1.19
    function calcular() {
       
       let resultado = monto * ivaInc
       return resultado
    }
    
    alert(calcular)


// ----------------------------------------------------------------------------- Clase 5 ---------------------------------------------------------------
function contacto (nombre, direccion, telefono, email){
    this.nombre
}
// no puedo utilizar el metodo de un obj, si no creo el objeto

// 
// ----------------------------------------------------------------------------- Clase 6 ---------------------------------------------------------------
// Consejos GIT en el break
// const Arrays[esto, es, un , array]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(array[index]) //así te muestra todo el array, con .length, te dice el largo del array, comenzando desde el 0 )
// }

// Agregar elementos al final del array * EL MÁS USADO
// nombreDelArray.push("valor para agregar, puede ser como string o en numero")

//agregar elementos al principio del array (desde la posición 0)
// nombreDelArray.unshift("valor para agregar, puede ser como string o en numero")

// quita ó elimina el elemento del final, solamente los elimina de a 1..... pop() 
// nombreDelArray.pop()

//elimina elementos al principio del array (desde la posición 0)
// nombreDelArray.shift()

//splice(inicio, cantidad de elementos a eliminar)
//hacer un corte para eliminar determinada cantidad de elementos desde el inicio, como aparece arriba

//slice(inicio, Final no incluido) el inicio debe ser menor al final no incluido (te trae el numero antes del final)

//concat
//este metodo une dos arrays, ejemplo: const arrayNuevo= array.concat()

//indexof , devuelve la posición del elemento
// console.log(array.indexof("juan")); y devuelve por ejemplo un 1, de la posicion en la que se encuentra juan


//includes; este metodo devuelve true o false
// en el ejemplo anterior, si ocupamos "juan" y en el array esta dicho valor, me devuelve true



// ----------------------------------------------------------------------------- Clase 7 ---------------------------------------------------------------
