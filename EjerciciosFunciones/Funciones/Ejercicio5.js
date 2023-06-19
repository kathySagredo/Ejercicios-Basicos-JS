function multiplicarArreglo (arrays){
    let resultado = Math.max(...arrays)*Math.min(...arrays);
    console.log(resultado);
}

let arrays = [2,3,4,5,6];
multiplicarArreglo(arrays);

