

function js_style(){
    const clickbtn = document.querySelector("#jsstyle")
    clickbtn.addEventListener('click',(e)=>{
        const parrafo1 = document.querySelector("#text")
        parrafo1.style.color = 'blue'
        parrafo1.style.fontFamily = 'Impact';
        parrafo1.style.fontSize = '50px'
    })
}
js_style()