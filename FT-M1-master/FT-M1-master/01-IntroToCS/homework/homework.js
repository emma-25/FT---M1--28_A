'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

const arreglo = num.split('');                                                    //que me separe los datos como un arreglo
let resultadoFinal = 0;                                                          //mi resultado comienza desde 0s

  for (let index = 0; index < arreglo.length; index++) {                        //por cada uno voy realizar una operación matemática
    resultadoFinal += arreglo[index] * Math.pow(2, arreglo.length -1 - index); //sumar el resultado final
  }
  return Number(resultadoFinal);
}
//console.log(BinarioADecimal('101'))

function DecimalABinario(num) {
  // tu codigo aca                                                            
                                                                                                                                                       
  let arreglo = [];                                                           //tomamos el numero y lo dividimos por 2s
                                                                              //dividir hasta que el resultado de 0s
  while(num > 0) {                                                            //tomar todas las sobras para formar mi número binario
    arreglo.unshift(num % 2);                                                 //guardar mi número binario
    num = Math.floor(num / 2);
  }
  return arreglo.join('');
}
//console.log(DecimalABinario(40))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}