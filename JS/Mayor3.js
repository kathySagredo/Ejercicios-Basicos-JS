let NumX = parseInt(prompt("Verificar cual número es mayor. Escriba número X:"));
let NumY = parseInt(prompt("Verificar cual número es mayor. Escriba número Y:"));
let NumZ = parseInt(prompt("Verificar cual número es mayor. Escriba número Z:"));

if (NumX > NumY && NumX > NumZ){
    document.write("El número mayor es: ", NumX)

} else if (NumY > NumX && NumY > NumZ) {
    document.write("El número mayor es: ", NumY)

} else {
    document.write("El número mayor es: ", NumZ)
}