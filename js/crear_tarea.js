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

    // Crear la lista de elementos con el mismo color de fondo que la tarjeta
    var lista = document.createElement("ul");
    lista.classList.add("list-group", "list-group-flush");
    lista.style.backgroundColor = prioridad;

    var itemInicio = document.createElement("li");
    itemInicio.classList.add("list-group-item");
    itemInicio.innerHTML = `<strong>Inicio:</strong> ${horaInicio}`;

    var itemFin = document.createElement("li");
    itemFin.classList.add("list-group-item");
    itemFin.innerHTML = `<strong>Fin:</strong> ${horaFinal}`;

    var itemColaboradores = document.createElement("li");
    itemColaboradores.classList.add("list-group-item");
    itemColaboradores.innerHTML = `<strong>Colaboradores:</strong> ${colaboradores}`;

    // Agregar los elementos a la lista
    lista.appendChild(itemInicio);
    lista.appendChild(itemFin);
    lista.appendChild(itemColaboradores);

    // Crear el cuerpo de la tarjeta y agregar la lista
    var cuerpoTarjeta = document.createElement("div");
    cuerpoTarjeta.classList.add("card-body");
    cuerpoTarjeta.innerHTML = `
    <h6 class="card-title">${nombreTarea}</h6>
    <p class="card-text">${descripcion}</p>
    `;
    cuerpoTarjeta.appendChild(lista);

    // Agregar el cuerpo de la tarjeta a la tarjeta
    nuevaTarjeta.appendChild(cuerpoTarjeta);

    // Agregar la nueva tarjeta al contenedor
    contenedor.appendChild(nuevaTarjeta);

    
    // Agregar la nueva tarjeta al contenedor
    contenedor.appendChild(nuevaTarjeta);
  
    // Cerrar el modal
    $('#modal-tarea').modal('hide');
  
    // Limpiar los campos del formulario
    document.getElementById("formulario").reset();
  }
  