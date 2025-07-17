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
let respuestasCorrectas = 0;

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

  // Verificar si fue correcta
  if (parseInt(seleccion.value) === correcta) {
    respuestasCorrectas++;
  }

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

window.onload = () => {
  preguntasAleatorias = mezclar([...preguntas]);
  mostrarPregunta();
};

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
