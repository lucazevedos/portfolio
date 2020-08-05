var manulateral = document.querySelector(".menulateral");


manulateral.addEventListener("click", function() {
    document.querySelector(".container").classList.toggle("show-menu");

});

function typeWriter(elemento) {
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}


const titulo = document.querySelector('h1');
typeWriter(titulo);
