const preguntas = [
  {
    pregunta: "Which SysV init configuration file should be modified to disable the ctrl-alt-delete key combination?",
    opciones: ["/etc/keys", "/proc/keys", "/etc/inittab", "/proc/inittab", "/etc/reboot"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "During a system boot cycle, what program is executed after the BIOS completes its tasks?",
    opciones: ["The bootloader", "The inetd program", "The init program", "The kernel"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "Which run levels should never be declared as the default run level when using SysV init? (Choose TWO correct answers.)",
    opciones: ["0", "1", "3", "5", "6"],
    respuestaCorrecta: [0, 4]
  }
];

function mostrarPregunta() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = "";

  const p = preguntasAleatorias[preguntaActual];
  const div = document.createElement("div");
  div.className = "question";

  div.innerHTML = `<p><strong>Pregunta ${preguntaActual + 1}:</strong> ${p.pregunta}</p>`;

  const esMultiple = Array.isArray(p.respuestaCorrecta);

  p.opciones.forEach((opcion, i) => {
    div.innerHTML += `
      <label>
        <input type="${esMultiple ? "checkbox" : "radio"}" name="opcion" value="${i}" />
        ${opcion}
      </label><br/>
    `;
  });

  form.appendChild(div);
}

function comprobarRespuesta() {
  if (yaComprobada) return;

  const p = preguntasAleatorias[preguntaActual];
  const esMultiple = Array.isArray(p.respuestaCorrecta);

  let seleccionadas;
  if (esMultiple) {
    seleccionadas = Array.from(document.querySelectorAll('input[name="opcion"]:checked')).map(i => parseInt(i.value));
    if (seleccionadas.length === 0) {
      alert("Selecciona al menos una opción antes de comprobar.");
      return;
    }
  } else {
    const seleccion = document.querySelector('input[name="opcion"]:checked');
    if (!seleccion) {
      alert("Selecciona una opción antes de comprobar.");
      return;
    }
    seleccionadas = [parseInt(seleccion.value)];
  }

  const opciones = document.getElementsByName("opcion");

  opciones.forEach((op, i) => {
    const label = op.parentElement;

    // Resaltar respuestas correctas
    if (esMultiple ? p.respuestaCorrecta.includes(i) : i === p.respuestaCorrecta) {
      label.style.color = "green";
      label.style.fontWeight = "bold";
    } else {
      label.style.color = "black";
      label.style.fontWeight = "normal";
    }

    // Si está seleccionado pero es incorrecto, marcar en rojo
    if (op.checked && !(esMultiple ? p.respuestaCorrecta.includes(i) : i === p.respuestaCorrecta)) {
      label.style.color = "red";
    }

    op.disabled = true;
  });

  // Comprobar si la selección coincide con la correcta
  const correcta = esMultiple
    ? (seleccionadas.length === p.respuestaCorrecta.length && seleccionadas.every(val => p.respuestaCorrecta.includes(val)))
    : (seleccionadas[0] === p.respuestaCorrecta);

  if (correcta) respuestasCorrectas++;

  yaComprobada = true;
}
