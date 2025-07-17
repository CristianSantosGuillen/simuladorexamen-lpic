const preguntas = [
  {
    pregunta: "¿Cuál es la capital de Francia?",
    opciones: ["Madrid", "París", "Roma", "Berlín"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuánto es 5 + 3?",
    opciones: ["5", "8", "10", "9"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué lenguaje se usa en la web?",
    opciones: ["Python", "HTML", "Java", "C++"],
    respuestaCorrecta: 1
  }
];

let preguntasAleatorias = [];
let preguntaActual = 0;
let yaComprobada = false;

// Función para mezclar preguntas aleatoriamente
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

  p.opciones.forEach((opcion, i) => {
    div.innerHTML += `
      <label>
        <input type="radio" name="opcion" value="${i}" />
        ${opcion}
      </label><br/>
    `;
  });

  form.appendChild(div);
}

function comprobarRespuesta() {
  if (yaComprobada) return;

  const seleccion = document.querySelector('input[name="opcion"]:checked');
  if (!seleccion) {
    alert("Selecciona una opción antes de comprobar.");
    return;
  }

  const correcta = preguntasAleatorias[preguntaActual].respuestaCorrecta;
  const opciones = document.getElementsByName("opcion");

  opciones.forEach((op, i) => {
    if (i === correcta) {
      op.parentElement.style.color = "green";
      op.parentElement.style.fontWeight = "bold";
    } else if (op.checked) {
      op.parentElement.style.color = "red";
    }
    op.disabled = true;
  });

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
    document.getElementById("quiz-form").innerHTML = "<h2>¡Examen finalizado!</h2>";
    document.getElementById("botones").style.display = "none";
  }
}

window.onload = () => {
  preguntasAleatorias = mezclar([...preguntas]);
  mostrarPregunta();
};
