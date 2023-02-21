

let mostrarTexto_btn = document.getElementById('mostrarTexto_btn');

let mostrarTexto = document.getElementById('mostrarTexto');

mostrarTexto_btn.addEventListener('click', toggleText);

function toggleText() {
    mostrarTexto.classList.toggle('mostrar-texto');

    if(mostrarTexto.classList.contains ('mostrar-texto')) {
        mostrarTexto_btn.innerHTML = 'Leer menos';
    }
    else {
        mostrarTexto_btn.innerHTML = 'Leer mas';
    }

}