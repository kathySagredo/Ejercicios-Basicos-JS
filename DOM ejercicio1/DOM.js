
function enviarSaludo(){
    const formulario = document.querySelector('form');
    formulario.addEventListener('submit', (e)=>{
        e.preventDefault();
        const nombre = document.querySelector("#nombre").value
        const apellido = document.querySelector('#apellido').value
        const parrafo1 = document.querySelector('P')
        parrafo1.textContent = `Hola ${nombre} ${apellido}, gracias por rellenar el formulario`
});   }








