function funcionArray(arreglo1, arreglo2){
    let arreglo3 = arreglo1.concat(arreglo2);
    arreglo3.forEach(element => {arregloFinal = arregloFinal.concat(element*2)});
    console.log(arregloFinal);
}

let arreglo1 = [2,5,2];
let arreglo2 = [1,5,3];
let arregloFinal = [];

funcionArray(arreglo1,arreglo2);