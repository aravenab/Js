const ivaInc = 1.19;
function calcular(monto) {
  let resultado = monto * ivaInc;
  return resultado;
}

let montoTotal = 0;
for (let i = 0; i < 3; i++) {
  let mensaje = `Ingresa el monto número ${i + 1} para calcular el Bruto de todos tus montos ingresados juntos`;
  let monto = parseInt(prompt(mensaje));
  if (monto <= 0) {
    console.log("No se puede calcular el IVA de números negativos o de 0");
    continue;
  }
  montoTotal += monto;
}
let resultadoFinal = calcular(montoTotal);

console.log(resultadoFinal);
