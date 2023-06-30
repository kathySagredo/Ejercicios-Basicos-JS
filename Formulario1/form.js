const form = document.querySelector("#form1")

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("Se envio tu formulario");
})