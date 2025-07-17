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

let preguntasAleatorias = [];
let preguntaActual = 0;
let yaComprobada = false;
let respuestasCorrectas = 0;
let preguntasFalladas = [];

function mezclar(array) {
  return array.sort(() => Math.random() - 0.5);
}

function mostrarPregunta() {
  const form = document.getElementById("quiz-form");
  form.innerHTML = "";

  const p = preguntasAleatorias[preguntaActual];
  const esMultiple = Array.isArray(p.respuestaCorrecta);

  const div = document.createElement("div");
  div.className = "question-card";

  div.innerHTML = `
    <div class="pregunta-header">
      <span class="pregunta-numero">Pregunta ${preguntaActual + 1}</span>
    </div>
    <p class="pregunta-texto">${p.pregunta}</p>
    <div class="opciones">
      ${p.opciones.map((opcion, i) => {
        const letra = String.fromCharCode(97 + i);
        return `
          <label class="opcion-label">
            <input type="${esMultiple ? "checkbox" : "radio"}" name="opcion" value="${i}" />
            <strong>${letra}.</strong> ${opcion}
          </label>
        `;
      }).join("")}
    </div>
  `;

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

  const correcta = esMultiple
    ? (seleccionadas.length === p.respuestaCorrecta.length && seleccionadas.every(val => p.respuestaCorrecta.includes(val)))
    : (seleccionadas[0] === p.respuestaCorrecta);

  if (correcta) {
    respuestasCorrectas++;
  } else {
    preguntasFalladas.push({
      pregunta: p.pregunta,
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      seleccionUsuario: seleccionadas
    });
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

function mostrarResultado() {
  const total = preguntasAleatorias.length;
  const falladas = total - respuestasCorrectas;
  const porcentaje = Math.round((respuestasCorrectas / total) * 100);

  let resultadoHTML = `
    <h2>¡Examen finalizado!</h2>
    <p><strong>Preguntas correctas:</strong> ${respuestasCorrectas}</p>
    <p><strong>Preguntas incorrectas:</strong> ${falladas}</p>
    <p><strong>Porcentaje de acierto:</strong> ${porcentaje}%</p>
  `;

  if (preguntasFalladas.length > 0) {
    resultadoHTML += `<h3 style="margin-top: 30px;">Resumen de preguntas falladas:</h3>`;

    preguntasFalladas.forEach((f) => {
      const correctas = Array.isArray(f.respuestaCorrecta)
  ? f.respuestaCorrecta.map(i => `<span class="respuesta-correcta">✅ <strong>${String.fromCharCode(97 + i)}.</strong> ${f.opciones[i]}</span>`).join("<br>")
  : `<span class="respuesta-correcta">✅ <strong>${String.fromCharCode(97 + f.respuestaCorrecta)}.</strong> ${f.opciones[f.respuestaCorrecta]}</span>`;

const seleccionadas = f.seleccionUsuario.map(i => {
  const esCorrecta = Array.isArray(f.respuestaCorrecta)
    ? f.respuestaCorrecta.includes(i)
    : i === f.respuestaCorrecta;

  const icono = esCorrecta ? "✅" : "❌";
  const clase = esCorrecta ? "respuesta-correcta" : "respuesta-usuario";

  return `<span class="${clase}">${icono} <strong>${String.fromCharCode(97 + i)}.</strong> ${f.opciones[i]}</span>`;
}).join("<br>");

      resultadoHTML += `
        <div class="tarjeta-fallada">
          <p><strong>${f.pregunta}</strong></p>
          <p><em>Tu respuesta:</em><br>${seleccionadas}</p>
          <p><em>Respuesta correcta:</em><br>${correctas}</p>
        </div>
      `;
    });
  }

  document.getElementById("quiz-form").innerHTML = resultadoHTML;
  document.getElementById("botones").style.display = "none";
  document.getElementById("boton-reiniciar").style.display = "block";
}

function reiniciarExamen() {
  preguntaActual = 0;
  respuestasCorrectas = 0;
  yaComprobada = false;
  preguntasFalladas = [];

  preguntasAleatorias = mezclar([...preguntas]);

  document.getElementById("boton-reiniciar").style.display = "none";
  document.getElementById("botones").style.display = "block";

  mostrarPregunta();
}

window.onload = () => {
  preguntasAleatorias = mezclar([...preguntas]);
  mostrarPregunta();
};
