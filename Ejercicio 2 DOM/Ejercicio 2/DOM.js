

function getFormvalue() {

    const formulario = document.querySelector('#form1');
    console.log(formulario);
    const nombreInput = formulario.querySelector("input[name = 'fname']");
    const apellidoInput = formulario.querySelector("input[name = 'lname']");
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    console.log(nombre,apellido);
    }

    getFormvalue();