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

function cargarPreguntas() {
  const formulario = document.getElementById("quiz-form");
  preguntas.forEach((pregunta, index) => {
    const divPregunta = document.createElement("div");
    divPregunta.className = "question";
    divPregunta.innerHTML = `<p>${index + 1}. ${pregunta.pregunta}</p>`;

    pregunta.opciones.forEach((opcion, i) => {
      divPregunta.innerHTML += `
        <label>
          <input type="radio" name="pregunta${index}" value="${i}" />
          ${opcion}
        </label><br/>
      `;
    });

    formulario.appendChild(divPregunta);
  });
}

function calcularResultado() {
  let score = 0;
  preguntas.forEach((pregunta, index) => {
    const respuesta = document.querySelector(`input[name="pregunta${index}"]:checked`);
    if (respuesta && parseInt(respuesta.value) === pregunta.respuestaCorrecta) {
      score++;
    }
  });

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<h2>Resultado: ${score} de ${preguntas.length}</h2>`;
}

window.onload = cargarPreguntas;