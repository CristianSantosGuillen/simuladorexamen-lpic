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
  },
  {
    pregunta: "Which of the following statements is correct when talking about /proc/?",
    opciones: [
      "All changes to files in /proc/ are stored in /etc/proc.d/ and restored on reboot.",
      "All files within /proc/ are read-only and their contents cannot be changed.",
      "All changes to files in /proc/ are immediately recognized by the kernel.",
      "All files within /proc/ are only readable by the root user."
    ],
    respuestaCorrecta: 2
  },
  {
    pregunta: "What of the following statements are true regarding /dev/ when using udev? (Choose TWO correct answers.)",
    opciones: [
      "Entries for all possible devices get created on boot even if those devices are not connected.",
      "Additional rules for udev can be created by adding them to /etc/udev/rules.d/.",
      "When using udev, it is not possible to create block or character devices in /dev/ using mknod.",
      "The /dev/ directory is a filesystem of type tmpfs and is mounted by udev during system startup.",
      "The content of /dev/ is stored in /etc/udev/dev and is restored during system startup."
    ],
    respuestaCorrecta: [1, 3]
  },
  {
    pregunta: "Which of the following information is stored within the BIOS? (Choose TWO correct answers.)",
    opciones: [
      "Boot device order",
      "Linux kernel version",
      "Timezone",
      "Hardware configuration",
      "The system's hostname"
    ],
    respuestaCorrecta: [0, 3]
  },
  {
    pregunta: "Which of the following commands reboots the system when using SysV init? (Choose TWO correct answers.)",
    opciones: [
      "shutdown - r now",
      "shutdown - 'r' rebooting'",
      "telinit 6",
      "telinit 0",
      "shutdown - k now 'rebooting'"
    ],
    respuestaCorrecta: [0, 2]
  },
  {
    pregunta: "Which of the following are init systems used within Linux systems? (Choose THREE correct answers.)",
    opciones: [
      "startd",
      "systemd",
      "Upstart",
      "SysInit",
      "SysV init"
    ],
    respuestaCorrecta: [1, 2, 4]
  },
  {
    pregunta: "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the file name only without any path.)",
    tipo: "texto", // Nuevo campo para identificar preguntas de texto
    respuestaCorrecta: "cmdline", // Respuesta como string para comparación exacta
    placeholder: "Escribe el nombre del archivo..." // Placeholder para el input
  },
  {
    pregunta: "What information can the lspci command display about the system hardware? (Choose THREE correct answers.)",
    opciones: [
      "Device IRQ settings",
      "PCI bus speed",
      "System battery type",
      "Device vendor identification",
      "Ethernet MAC address"
    ],
    respuestaCorrecta: [0, 1, 3]
  },
  {
    pregunta: "Which of the following commands brings a system running SysV init into a state in which it is safe to perform maintenance tasks? (Choose TWO correct answers.)",
    opciones: [
      "shutdown -R 1 now",
      "shutdown -single now",
      "init 1",
      "telinit 1",
      "runlevel 1"
    ],
    respuestaCorrecta: [2, 3]
  },
  {
    pregunta: "What is the first program that is usually started, at boot time, by the Linux kernel when using SysV init?",
    opciones: [
      "/lib/init.so",
      "/sbin/init",
      "/etc/rc.d/rcinit",
      "/proc/sys/kernel/init",
      "/boot/init"
    ],
    respuestaCorrecta: 1
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
  const esTexto = p.tipo === "texto"; // Verificar si es pregunta de texto

  const div = document.createElement("div");
  div.className = "question-card";

  let opcionesHTML = "";
  
  if (esTexto) {
    // Renderizar input de texto para preguntas de tipo texto
    opcionesHTML = `
      <div class="opcion-texto">
        <input type="text" id="respuesta-texto" placeholder="${p.placeholder || 'Escribe tu respuesta...'}" />
      </div>
    `;
  } else {
    // Renderizar opciones múltiples como antes
    opcionesHTML = p.opciones.map((opcion, i) => {
      const letra = String.fromCharCode(97 + i);
      return `
        <label class="opcion-label">
          <input type="${esMultiple ? "checkbox" : "radio"}" name="opcion" value="${i}" />
          <strong>${letra}.</strong> ${opcion}
        </label>
      `;
    }).join("");
  }

  div.innerHTML = `
    <div class="pregunta-header">
      <span class="pregunta-numero">Pregunta ${preguntaActual + 1}</span>
    </div>
    <p class="pregunta-texto"><strong>${p.pregunta}</strong></p>
    <div class="opciones">
      ${opcionesHTML}
    </div>
  `;

  form.appendChild(div);
}

function comprobarRespuesta() {
  if (yaComprobada) return;

  const p = preguntasAleatorias[preguntaActual];
  const esTexto = p.tipo === "texto";
  const esMultiple = Array.isArray(p.respuestaCorrecta);

  let seleccionadas;
  let correcta = false;

  if (esTexto) {
    // Manejar respuesta de texto
    const respuestaUsuario = document.getElementById("respuesta-texto").value.trim();
    if (!respuestaUsuario) {
      alert("Por favor escribe una respuesta.");
      return;
    }
    
    correcta = respuestaUsuario === p.respuestaCorrecta;
    
    // Mostrar feedback visual
    const input = document.getElementById("respuesta-texto");
    input.disabled = true;
    
    const feedback = document.createElement("span");
    feedback.style.marginLeft = "10px";
    feedback.style.fontWeight = "bold";
    feedback.textContent = correcta ? "✅ Correcto!" : `❌ Incorrecto (Respuesta: "${p.respuestaCorrecta}")`;
    feedback.style.color = correcta ? "green" : "red";
    
    input.parentNode.appendChild(feedback);
    
    // Guardar selección del usuario para el resumen
    seleccionadas = [respuestaUsuario];
  } 
  else {
    // Manejar opciones múltiples como antes
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
      const iconoExistente = label.querySelector(".icono-respuesta");
      if (iconoExistente) iconoExistente.remove();

      const esCorrecta = esMultiple
        ? p.respuestaCorrecta.includes(i)
        : i === p.respuestaCorrecta;

      if (esCorrecta) {
        label.style.color = "green";
        label.style.fontWeight = "bold";
      } else {
        label.style.color = "black";
        label.style.fontWeight = "normal";
      }

      if (op.checked && !esCorrecta) {
        label.style.color = "red";
      }

      if (op.checked) {
        const iconoSpan = document.createElement("span");
        iconoSpan.className = "icono-respuesta";
        iconoSpan.style.marginLeft = "8px";
        iconoSpan.style.fontWeight = "bold";
        iconoSpan.textContent = esCorrecta ? "✅" : "❌";
        label.appendChild(iconoSpan);
      }

      op.disabled = true;
    });

    correcta = esMultiple
      ? (seleccionadas.length === p.respuestaCorrecta.length && seleccionadas.every(val => p.respuestaCorrecta.includes(val)))
      : (seleccionadas[0] === p.respuestaCorrecta);
  }

  if (correcta) {
    respuestasCorrectas++;
  } else {
    preguntasFalladas.push({
      pregunta: p.pregunta,
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      seleccionUsuario: seleccionadas,
      tipo: p.tipo // Añadimos el tipo para el resumen
    });
  }

  yaComprobada = true;
}

// Modificar mostrarResultado para manejar preguntas de texto
function mostrarResultado() {
  const total = preguntasAleatorias.length;
  const falladas = total - respuestasCorrectas;
  const porcentaje = Math.round((respuestasCorrectas / total) * 100);

  let resultadoHTML = `
    <h2>¡Examen finalizado!</h2>
    <p><strong>✅ Preguntas correctas:</strong> ${respuestasCorrectas}</p>
    <p><strong>❌ Preguntas incorrectas:</strong> ${falladas}</p>
    <p><strong>💯 Porcentaje de acierto:</strong> ${porcentaje}%</p>
  `;

  if (preguntasFalladas.length > 0) {
    resultadoHTML += `<h3 style="margin-top: 30px;">📋 Resumen de preguntas falladas:</h3>`;

    preguntasFalladas.forEach((f) => {
      let correctas, seleccionadas;
      
      if (f.tipo === "texto") {
        // Formateo para preguntas de texto
        correctas = `<span class="respuesta-correcta">✅ ${f.respuestaCorrecta}</span>`;
        seleccionadas = `<span class="respuesta-usuario">❌ ${f.seleccionUsuario[0]}</span>`;
      } else {
        // Formateo para preguntas de opción múltiple
        correctas = Array.isArray(f.respuestaCorrecta)
          ? f.respuestaCorrecta.map(i => `<span class="respuesta-correcta">✅ <strong>${String.fromCharCode(97 + i)}.</strong> ${f.opciones[i]}</span>`).join("<br>")
          : `<span class="respuesta-correcta">✅ <strong>${String.fromCharCode(97 + f.respuestaCorrecta)}.</strong> ${f.opciones[f.respuestaCorrecta]}</span>`;

        seleccionadas = f.seleccionUsuario.map(i => {
          const esCorrecta = Array.isArray(f.respuestaCorrecta)
            ? f.respuestaCorrecta.includes(i)
            : i === f.respuestaCorrecta;

          const icono = esCorrecta ? "✅" : "❌";
          const clase = esCorrecta ? "respuesta-correcta" : "respuesta-usuario";

          return `<span class="${clase}">${icono} <strong>${String.fromCharCode(97 + i)}.</strong> ${f.opciones[i]}</span>`;
        }).join("<br>");
      }

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


