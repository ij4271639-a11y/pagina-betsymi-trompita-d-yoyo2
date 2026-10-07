// ==========================================
// ENTRAR A LA PÁGINA
// ==========================================

function entrar() {

    const intro = document.getElementById("intro");

    if (intro) {
        intro.style.opacity = "0";
        intro.style.pointerEvents = "none";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1000);
    }
}


// ==========================================
// CUENTA REGRESIVA
// ==========================================

function actualizarCuentaRegresiva() {

    const fechaCumple = new Date("2026-10-07T00:00:00").getTime();

    const ahora = new Date().getTime();

    const diferencia = fechaCumple - ahora;

    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );


    const diasElemento = document.getElementById("dias");
    const horasElemento = document.getElementById("horas");
    const minutosElemento = document.getElementById("minutos");
    const segundosElemento = document.getElementById("segundos");


    if (diferencia <= 0) {

        if (diasElemento) diasElemento.textContent = "00";
        if (horasElemento) horasElemento.textContent = "00";
        if (minutosElemento) minutosElemento.textContent = "00";
        if (segundosElemento) segundosElemento.textContent = "00";

        return;
    }


    if (diasElemento)
        diasElemento.textContent = String(dias).padStart(2, "0");

    if (horasElemento)
        horasElemento.textContent = String(horas).padStart(2, "0");

    if (minutosElemento)
        minutosElemento.textContent = String(minutos).padStart(2, "0");

    if (segundosElemento)
        segundosElemento.textContent = String(segundos).padStart(2, "0");
}

setInterval(actualizarCuentaRegresiva, 1000);

actualizarCuentaRegresiva();


// ==========================================
// CARTA
// ==========================================

function abrirCarta() {

    const envelope = document.querySelector(".envelope");

    if (envelope) {
        envelope.classList.toggle("open");
    }
}


// ==========================================
// GALERÍA
// ==========================================

function abrirFoto(nombre) {

    const modal = document.getElementById("modal");

    const imagen = document.getElementById("modalImg");

    if (modal && imagen) {

        imagen.src = nombre;

        modal.classList.add("active");
    }
}


function cerrarFoto() {

    const modal = document.getElementById("modal");

    if (modal) {
        modal.classList.remove("active");
    }
}


// ==========================================
// MENSAJES SORPRESA
// ==========================================

function mensaje(numero) {

    const mensajes = {

        1: "Gracias por todos los momentos bonitos que hemos compartido 💖",

        2: "Espero que este nuevo año de vida esté lleno de cosas increíbles ✨",

        3: "Nunca olvides lo especial que eres para las personas que te quieren 🌷",

        4: "¡Feliz cumpleaños, Betsy! 🎂💗"

    };


    alert(mensajes[numero]);
}


// ==========================================
// CONTRASEÑA SECRETA
// ==========================================

function desbloquear() {

    const password =
        document.getElementById("password");

    const mensaje =
        document.getElementById("secretMessage");


    if (!password || !mensaje) return;


    if (
        password.value.toLowerCase().trim()
        === "isaac"
    ) {

        mensaje.textContent =
            "🔓 ¡Has descubierto el secreto! 💖✨";

    } else {

        mensaje.textContent =
            "❌ Esa no es la contraseña...";

    }
}


// ==========================================
// MÚSICA
// ==========================================

let audio = null;

function musica() {

    if (!audio) {

        audio = new Audio("musica.mp3");

        audio.loop = true;
    }


    if (audio.paused) {

        audio.play();

    } else {

        audio.pause();

    }
}


// ==========================================
// CELEBRACIÓN
// ==========================================

function celebrar() {

    for (let i = 0; i < 120; i++) {

        const confeti =
            document.createElement("div");

        confeti.classList.add("confetti");

        confeti.style.left =
            Math.random() * 100 + "vw";

        confeti.style.animationDelay =
            Math.random() * 2 + "s";

        confeti.style.background =
            obtenerColor();

        document.body.appendChild(confeti);


        setTimeout(() => {

            confeti.remove();

        }, 5000);
    }
}


function obtenerColor() {

    const colores = [
        "#ff4f9a",
        "#c77dff",
        "#ffd166",
        "#ffffff",
        "#ff9dcc"
    ];

    return colores[
        Math.floor(
            Math.random() * colores.length
        )
    ];
}


// ==========================================
// CERRAR MODAL
// ==========================================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("modal");

    if (event.target === modal) {

        cerrarFoto();
    }

});