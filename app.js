// Array para almacenar los nombres de los amigos
let amigo = [];

// Función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let AmigoUsuario = inputAmigo.value.trim();

    if (!AmigoUsuario) {
        alert("Debes ingresar un nombre, por favor");
        return;
    }

    // Evitar nombres duplicados
    if (amigo.includes(AmigoUsuario)) {
        alert("Este amigo ya ha sido agregado.");
        return;
    }

    amigo.push(AmigoUsuario);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();
}

// Función para mostrar la lista de amigos en la pantalla
function renderizarAmigos() {
    let listaAmigo = document.getElementById("listaAmigo");
    let amigoHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        amigoHTML += `<li>${amigo[i]}</li>`;
    }

    listaAmigo.innerHTML = amigoHTML;
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigo.length < 2) {
        alert("Debe haber al menos 2 amigos para hacer un sorteo.");
        return;
    }

    let amigoDisponibles = [...amigo]; // Copia del array original
    let resultadoSorteo = {};

    amigo.forEach(participante => {
        let posibles = amigoDisponibles.filter(a => a !== participante); // Evita que sea su propio amigo secreto

        if (posibles.length === 0) {
            // Si queda solo una opción y es el mismo, se reinicia el sorteo para evitar errores
            return sortearAmigo();
        }

        let amigoSecreto = posibles[Math.floor(Math.random() * posibles.length)];
        resultadoSorteo[participante] = amigoSecreto;

        // Eliminar al amigo sorteado de los disponibles
        amigoDisponibles = amigoDisponibles.filter(a => a !== amigoSecreto);
    });

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = Object.entries(resultadoSorteo)
        .map(([amigo, secreto]) => `<p>${amigo} es el amigo secreto de ${secreto}</p>`)
        .join("");

    // Limpiar la lista de amigos después del sorteo
    amigo.length = 0;
    document.getElementById("listaAmigo").innerHTML = "";
}
