

const form = document.querySelector(".form1");
const lista = document.querySelector("#lista");
const btnAñadir = form.querySelector("input[id='anadir']");
const btnBorrar = form.querySelector("input[id='borrar']");

const nuevaOl = document.createElement("ol");
const nuevalista = lista.appendChild(nuevaOl);



/* function agregarLista(){
    let nombreTarea = form.querySelector("input[id='tarea']").value
    console.log(nombreTarea)
    const nuevaLi = document.createElement("li");
    btnAñadir.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e)
        nuevaLi.textContent = nombreTarea; 
        nuevalista.appendChild(nuevaLi);
    }) 
} */

function agregarLista(){

    btnAñadir.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(e)
        let nombreTarea = form.querySelector("input[id='tarea']").value 
        console.log(nombreTarea)
        const nuevaLi = document.createElement("li");
        nuevaLi.textContent = nombreTarea;   
        nuevalista.appendChild(nuevaLi);
    })
}

function borrarLista(){
    btnBorrar.addEventListener('click',(e)=>{
        e.preventDefault();
        nuevalista.textContent = ""
    })
}

agregarLista()
borrarLista()
