const huevo = document.querySelector("#huevo");
const contador = document.querySelector("#contador");
const temporizador = document.querySelector("#temporizador");
const progressBar = document.querySelector("#progress-bar");
const META_CLICKS = 100;

let contadorClicks = 0;
let juegoActivo = false;
let tiempoInicio;
let intervalId;

function actualizarTemporizador() {
    if (!juegoActivo) return;
    
    const tiempoActual = new Date().getTime();
    const tiempoTranscurrido = Math.floor((tiempoActual - tiempoInicio) / 1000);
    const minutos = Math.floor(tiempoTranscurrido / 60);
    const segundos = tiempoTranscurrido % 60;
    
    temporizador.textContent = `Tiempo: ${minutos}:${segundos.toString().padStart(2, '0')}`;
}

function actualizarContador(numero) {
    contador.textContent = `¡Has hecho click ${numero} ${numero === 1 ? 'vez' : 'veces'}!`;
    
    // Actualizar la barra de progreso
    const progreso = (numero / META_CLICKS) * 100;
    progressBar.style.width = `${progreso}%`;
}

function reiniciarJuego() {
    contadorClicks = 0;
    juegoActivo = false;
    clearInterval(intervalId);
    huevo.classList.remove('celebrate');
    temporizador.textContent = 'Tiempo: 0:00';
    contador.textContent = "¡Comienza a clickear!";
    progressBar.style.width = '0%';
}

function completarJuego() {
    juegoActivo = false;
    clearInterval(intervalId);
    huevo.classList.add('celebrate');
    contador.textContent = "¡Lo lograste! El huevo se rompió";
    
    setTimeout(() => {
        reiniciarJuego();
    }, 3000);
}

huevo.addEventListener('click', () => {
    if (!juegoActivo) {
        juegoActivo = true;
        tiempoInicio = new Date().getTime();
        intervalId = setInterval(actualizarTemporizador, 100);
    }

    contadorClicks++;
    huevo.classList.add('click');
    setTimeout(() => huevo.classList.remove('click'), 200);
    
    actualizarContador(contadorClicks);

    if (contadorClicks >= META_CLICKS) {
        completarJuego();
    }
});

// Inicializar el juego xd
reiniciarJuego();