function crearTarea() {

    // obtener valores de los inputs del formulario
    const nombre = document.getElementById("tarea-input").value;
    const horaInicio = document.getElementById("time-input").value;
    const horaFinal = document.getElementById("time-input").value;
    const descripcion = document.getElementById("descripcion-input").value;
    const colaboradores = document.getElementById("colaboradores-input").value;
    const prioridad = document.getElementById("prioridad").value;
  
    // validar que se hayan llenado todos los campos
    if (!nombre || !horaInicio || !horaFinal || !descripcion || !colaboradores || !prioridad) {
      const errorDiv = document.querySelector(".error-message");
      errorDiv.style.display = "block";
      return;
    }
  
    // crear elemento card
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundColor = prioridad;
    card.style.width = "200px";
    card.style.height = "155px";
  
    // crear elemento card-body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // crear elementos para mostrar los datos de la tarea
    const nombreTarea = document.createElement("h5");
    nombreTarea.classList.add("card-title");
    nombreTarea.textContent = nombre;
  
    const horaInicioTarea = document.createElement("p");
    horaInicioTarea.classList.add("card-text");
    horaInicioTarea.textContent = "Hora de inicio: " + horaInicio;
  
    const horaFinalTarea = document.createElement("p");
    horaFinalTarea.classList.add("card-text");
    horaFinalTarea.textContent = "Hora de finalización: " + horaFinal;
  
    const descripcionTarea = document.createElement("p");
    descripcionTarea.classList.add("card-text");
    descripcionTarea.textContent = "Descripción: " + descripcion;
  
    const colaboradoresTarea = document.createElement("p");
    colaboradoresTarea.classList.add("card-text");
    colaboradoresTarea.textContent = "Colaboradores: " + colaboradores;
  
    // añadir elementos a la card
    cardBody.appendChild(nombreTarea);
    cardBody.appendChild(horaInicioTarea);
    cardBody.appendChild(horaFinalTarea);
    cardBody.appendChild(descripcionTarea);
    cardBody.appendChild(colaboradoresTarea);
  
    card.appendChild(cardBody);
  
    // añadir card al container de tareas
    const container = document.getElementById("container-tareas");
    container.appendChild(card);
  
    // cerrar modal
    $('#modal-tarea').modal('hide');
  
    // limpiar valores del formulario
    document.getElementById("formulario").reset();
  }
  