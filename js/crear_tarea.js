function crearTarea() {

    const form = document.querySelector('form');
    if (!form.checkValidity()) {
        const errorMessage = document.querySelector('.error-message');
        errorMessage.style.display = 'block';
        return; // salimos de la función si el formulario no es válido
    }

    // Obtener los valores de los inputs
    let tarea = document.getElementById("tarea-input").value;
    let inicio = document.getElementById("time-input").value;
    let final = document.getElementById("time-input").value;
    let descripcion = document.getElementById("descripcion-input").value;
    let colaboradores = document.getElementById("colaboradores-input").value;
    let prioridad = document.getElementById("prioridad-select").value;

// Verificar que todos los campos requeridos tengan valor
if (!tarea || inicio || !final || !descripcion || !colaboradores || !prioridad) {
    return; // salimos de la función si algún campo requerido está vacío
}

let fondo = document.createElement("div");
    fondo.className = "fondo";
    fondo.style.backgroundColor = "#F6F1D1";

// Crear el elemento card
let card = document.createElement("div");
card.className = "card";
card.style.backgroundColor = color;


// Crear el contenido de la card
let cardBody = document.createElement("div");
cardBody.className = "card-body";
let cardTitle = document.createElement("h5");
cardTitle.className = "card-title";
cardTitle.textContent = "tarea " + tarea + " - " + inicio + final;
let cardText = document.createElement("p");
cardText.className = "card-text";
cardText.textContent = descripcion;
let cardFooter = document.createElement("div");
cardFooter.className = "card-footer";
// let cardFooterText = document.createElement("small");
// cardFooterText.className = "text-muted";
// cardFooterText.textContent = mes + " - " + horas + " horas";
let button1 = document.createElement("button");
button1.className = "btn btn-primary";
button1.textContent = "Detalles";
button1.href = "tareas_pendientes.html"; //agrgar enlace a tareas pendientes
let button2 = document.createElement("button");
button2.className = "btn btn-secondary";
button2.textContent = "Eliminar";
button2.setAttribute("data-toggle", "modal"); // Agregar el atributo data-toggle
button2.setAttribute("data-target", "#editar-modal"); // Agregar el atributo data-target con el ID del modal deseado PENDIENTE DE HACER

// Añadir el contenido a la card

cardBody.appendChild(cardTitle);
cardBody.appendChild(cardText);
cardFooter.appendChild(cardFooterText);
cardFooter.appendChild(button1);
cardFooter.appendChild(button2);
card.appendChild(cardBody);
card.appendChild(cardFooter);
fondo.appendChild(card);

// Añadir la card al contenedor
let contenedor = document.getElementById("contenedor-cards");
contenedor.appendChild(card);

// Cerrar el modal
let modal = document.getElementById("anadir-tarea");
$(modal).modal('hide');

// Resetear el formulario
document.getElementById("formulario").reset();
}

