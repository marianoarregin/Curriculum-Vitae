ScrollReveal().reveal('.main');
ScrollReveal().reveal('.experiencia', { delay: 500 });
ScrollReveal().reveal('.formacion', { delay: 500 });
ScrollReveal().reveal('.habilidades', { delay: 500 });

let tema=document.getElementById("tema");
let body=document.body;

tema.addEventListener("click", function(){
    let val=body.classList.toggle("dark")
    localStorage.setItem("tema",val)
})

let valor=localStorage.getItem("tema")

if (valor=="true") {
    body.classList.add("dark")
} else {
    body.classList.remove("dark")
}