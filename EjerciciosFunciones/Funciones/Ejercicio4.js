function sumaArreglo(array){
    console.log(array.length);
    contador = 0;
    for (i=0;i<array.length;i=i+1){
        contador += array[i];
    }
    console.log(contador);
}

let array = [1,2,3,4];
sumaArreglo(array);