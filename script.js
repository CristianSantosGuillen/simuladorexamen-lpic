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
    respuestaCorrecta: [0, 4]  // respuestas correctas: 0 y 4 (niveles 0 y 6)
  }
];

let preguntasAleatorias = [];
let preguntaActual = 0;
let yaComprobada = false;
let respuestasCorrectas = 0;

// Mezclar preguntas
function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

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
      </label>
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

    if (esMultiple ? p.respuestaCorrecta.includes(i) : i === p.respuestaCorrecta) {
      label.style.color = "green";
      label.style.fontWeight = "bold";
    } else {
      label.style.color = "black";
      label.style.fontWeight = "normal";
    }

    if (op.checked && !(esMultiple ? p.respuestaCorrecta.includes(i) : i === p.respuestaCorrecta)) {
      label.style.color = "red";
    }

    op.disabled = true;
  });

  // Validar si la respuesta es correcta
  const correcta = esMultiple
    ? (seleccionadas.length === p.respuestaCorrecta.length && seleccionadas.every(val => p.respuestaCorrecta.includes(val)))
    : (seleccionadas[0] === p.respuestaCorrecta);

  if (correcta) respuestasCorrectas++;

  yaComprobada = true;
}

function siguientePregunta() {
  if (!yaComprobada) {
    alert("Debes comprobar la respuesta primero.");
    return;
  }

  preguntaActual++;
  yaComprobada = false;

  if (preguntaActual < preguntasAleatorias.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const total = preguntasAleatorias.length;
  const falladas = total - respuestasCorrectas;
  const porcentaje = Math.round((respuestasCorrectas / total) * 100);

  const resultadoHTML = `
    <h2>¡Examen finalizado!</h2>
    <p><strong>Preguntas correctas:</strong> ${respuestasCorrectas}</p>
    <p><strong>Preguntas incorrectas:</strong> ${falladas}</p>
    <p><strong>Porcentaje de acierto:</strong> ${porcentaje}%</p>
  `;

  document.getElementById("quiz-form").innerHTML = resultadoHTML;
  document.getElementById("botones").style.display = "none";
  document.getElementById("boton-reiniciar").style.display = "block";
}

function reiniciarExamen() {
  preguntaActual = 0;
  respuestasCorrectas = 0;
  yaComprobada = false;

  preguntasAleatorias = mezclar([...preguntas]);

  document.getElementById("boton-reiniciar").style.display = "none";
  document.getElementById("botones").style.display = "block";

  mostrarPregunta();
}

window.onload = () => {
  preguntasAleatorias = mezclar([...preguntas]);
  mostrarPregunta();
};
