const huevo = document.querySelector("#huevo");
const contador = document.querySelector("#contador");
const META_CLICKS = 100;

let contadorClicks = 0;
let juegoActivo = true;


function actualizarContador(numero) {
    contador.textContent = `¡Has hecho click ${numero} ${numero === 1 ? 'vez' : 'veces'}!`;
    contador.classList.add('actualizar');
    setTimeout(() => contador.classList.remove('actualizar'), 200);
}


function reiniciarJuego() {
    contadorClicks = 0;
    juegoActivo = true;
    huevo.src = "https://static.vecteezy.com/system/resources/previews/025/377/474/non_2x/chicken-egg-cartoon-vector.jpg";
    contador.textContent = "¡Comienza de nuevo!";
    huevo.classList.remove('completado');
}


function completarJuego() {
    juegoActivo = false;
    huevo.classList.add('completado');
    contador.textContent = "Ya lo rompiste p";
    
    
    huevo.src = "chicken-egg-cartoon-vector.png";
    
    
    setTimeout(() => {
        reiniciarJuego();
    }, 3000);
}


huevo.addEventListener('click', () => {
    if (!juegoActivo) return;

    contadorClicks++;
    huevo.classList.add('click');
    
   
    setTimeout(() => huevo.classList.remove('click'), 200);

    
    actualizarContador(contadorClicks);

    
    if (contadorClicks >= META_CLICKS) {
        completarJuego();
    }
});


const styles = `
    .click {
        transform: scale(0.95);
        transition: transform 0.1s;
    }

    .completado {
        animation: victoria 0.5s infinite alternate;
    }

    .actualizar {
        animation: aparecer 0.2s ease-out;
    }

    @keyframes victoria {
        from { transform: scale(1); }
        to { transform: scale(1.1); }
    }

    @keyframes aparecer {
        from { transform: scale(1.1); opacity: 0.7; }
        to { transform: scale(1); opacity: 1; }
    }
`;

// Agregar los estilos al documento
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);