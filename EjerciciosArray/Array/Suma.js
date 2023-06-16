const array = [2,4,5,1,2];
let contador = 0
let resultado = 0
function sumaLista(array){
    for(i=0;i < array.length;i=i+1){
        resultado = array[i]+contador
        contador = resultado
    }
    console.log(resultado)
}

sumaLista(array)

