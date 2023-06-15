let frase = prompt("Escriba una frase");
let letraA = "";

for(let i = 0; i < frase.length; i = i+1) {

    if (frase.charAt(i).toLowerCase() === "a"){
        letraA = letraA + frase.charAt(i)
    }
}
let cantidadA = letraA.length;
document.write("La frase contiene ", cantidadA, " a" );