
function descuento (nombre, precio, desc) {
    this.nombre = nombre;
    this.precio = precio;
    this.desc = desc;
    valor = this.precio*(100-this.desc)/100;
}

const descuento1 = new descuento("vestido",400,10);
descuento1.precioFinal = valor;
console.table(descuento1);

