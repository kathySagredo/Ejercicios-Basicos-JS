let esVocal = caracter => {
    if (caracter.toLowerCase() == "a" || caracter.toLowerCase() == "e" || caracter.toLowerCase() == "i" || caracter.toLowerCase() == "o" || caracter.toLowerCase() =="u") {
        console.log(true);
    } else {
        console.log(false);
    }
}

caracter = prompt("Escribe una letra del teclado para verificar si es vocal o no");
esVocal(caracter);
