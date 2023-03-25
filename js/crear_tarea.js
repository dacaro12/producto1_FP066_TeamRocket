function crearTarea() {

    const form = document.querySelector('form');
    if (!form.checkValidity()) {
        const errorMessage = document.querySelector('.error-message');
        errorMessage.style.display = 'block';
        return; // salimos de la función si el formulario no es válido
    }


    // Obtener valores de los campos del formulario
    var nombreTarea = document.getElementById("tarea-input").value;
    var horaInicio = document.getElementById("time-input").value;
    var horaFinal = document.getElementById("time-input").value;
    var descripcion = document.getElementById("descripcion-input").value;
    var colaboradores = document.getElementById("colaboradores-input").value;
    var prioridad = document.getElementById("prioridad").value;

    if (!nombreTarea || !horaInicio || !horaFinal || !descripcion || !colaboradores || !prioridad) {
        return; // salimos de la función si algún campo requerido está vacío
    }
    //crear card
    let card = document.createElement("div");
    card.className = "card";
    card.style.backgroundColor = prioridad;
  
    // Crear tarjeta con los valores del formulario
    var contenedor = document.getElementById("container-tareas");
    var nuevaTarjeta = document.createElement("div");
    nuevaTarjeta.classList.add("card");
    nuevaTarjeta.style.backgroundColor = prioridad;

    // Crear el cuerpo de la tarjeta
    var cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("card-body");
    cuerpoTarjeta.style.backgroundColor = prioridad;

    // Agregar los elementos al cuerpo de la tarjeta
    cuerpoTarjeta.innerHTML = `
    <h6 class="card-title">${nombreTarea}</h6>
    <p class="card-text">${descripcion}</p>
    <ul class="list-group list-group-flush" style="background-color:${prioridad};">
        <li class="list-group-item"><strong>Inicio:</strong> ${horaInicio}</li>
        <li class="list-group-item"><strong>Fin:</strong> ${horaFinal}</li>
        <li class="list-group-item"><strong>Colaboradores:</strong> ${colaboradores}</li>
    </ul>
    `;

    // Agregar el cuerpo de la tarjeta a la tarjeta
    nuevaTarjeta.appendChild(cuerpoTarjeta);

    // Agregar la nueva tarjeta al contenedor
    contenedor.appendChild(nuevaTarjeta);

  
    // Cerrar el modal
    $('#modal-tarea').modal('hide');
  
    // Limpiar los campos del formulario
    document.getElementById("formulario").reset();
  }
  