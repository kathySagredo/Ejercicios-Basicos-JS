function numeroMayor (a,b,c) {
    if (a==b==c){
        console.log('Los numeros son iguales');
    } else if ( a>b && a>c){
        console.log(a);
    } else if (b>a && b>c){
        console.log(b);
    } else {
        console.log(c);
    }
} 

let a = prompt("Obtener el número mayor. Número X")
let b = prompt("Obtener el número mayor. Número Y")
let c = prompt("Obtener el número mayor. Número Z")

numeroMayor(a,b,c);
