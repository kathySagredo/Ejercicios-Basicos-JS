//1. Seleccione la sección con una identificación de contenedor sin usar querySelector.
const sectionId = document.getElementById('container');
console.log(sectionId);

//2. Seleccione la sección con una identificación de contenedor usando querySelector.
const sectionIdquerySelector = document.querySelector('#container');
console.log(sectionIdquerySelector);

//3. Seleccione toda la lista de elementos con una clase de "second"
const listaSecond = sectionId.getElementsByClassName("second");
console.log(listaSecond);

//4. Seleccione un elemento de la lista con una clase de “third”, pero solo el elemento de la lista dentro de la etiqueta ol.
const listaThird = sectionId.getElementsByClassName("third");
console.log(listaThird[1]);
console.log(listaThird[1].classList);

//5. Dar el texto "¡Hola!" a la sección con un ID de contenedor.
parrafo = document.createElement('P');
parrafo.textContent = "¡Hola!"
sectionId.appendChild(parrafo);

//6. Agregue la clase principal al div con una clase de pie de página.
const footer = document.querySelector(".footer")
/* footer.classList.add("main");
console.log(footer); */ // Agrega una nueva lista, codigo comentado
footer.className = "main"
console.log(footer);

//7. Elimine la clase principal en el div con una clase de pie de página.
/* footer.classList.remove("main");
console.log(footer); */ //Remueve la nueva lista, codigo comentado
footer.className = "footer"
console.log(footer);

//8. Crea un nuevo elemento li.
const nuevaLista = document.createElement("ul")
const nuevaLi = document.createElement("li")
sectionId.appendChild(nuevaLista).appendChild(nuevaLi);

//9. Dale al li el texto "cuatro".
nuevaLi.textContent = "cuatro"

//10. Agregue el li al elemento ul ==== Hecho en (8.)






