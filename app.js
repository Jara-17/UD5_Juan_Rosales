//* Variables y Constantes

//? Creamos array de objetos para almacenar las preguntas y respuestas
const questions = [
  {
    question:
      "¿Qué lenguaje de programación es ampliamente utilizado para desarrollo web?",
    answers: [
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "C++", correct: false },
      { text: "JavaScript", correct: true },
    ],
  },

  {
    question:
      "¿Qué lenguaje se utiliza principalmente para el desarrollo de aplicaciones móviles en el sistema operativo iOS?",
    answers: [
      { text: "Java", correct: false },
      { text: "Kotlin", correct: false },
      { text: "Swift", correct: true },
      { text: "C#", correct: false },
    ],
  },

  {
    question:
      "¿Qué sistema de gestión de bases de datos es de código abierto y ampliamente utilizado en aplicaciones web?",
    answers: [
      { text: "SQL Server", correct: false },
      { text: "MySQL", correct: true },
      { text: "Oracle", correct: false },
      { text: "SQLite", correct: false },
    ],
  },

  {
    question:
      "¿Qué framework de JavaScript es ampliamente utilizado para construir interfaces de usuario?",
    answers: [
      { text: "Angular", correct: false },
      { text: "Vue.js", correct: false },
      { text: "Ember.js", correct: false },
      { text: "React", correct: true },
    ],
  },

  {
    question:
      "¿Qué lenguaje de programación es conocido por su uso en el desarrollo de aplicaciones de inteligencia artificial?",
    answers: [
      { text: "Java", correct: false },
      { text: "C#", correct: false },
      { text: "Python", correct: true },
      { text: "Ruby", correct: false },
    ],
  },

  {
    question: "¿Cuál de los siguientes no es un sistema operativo?",
    answers: [
      { text: "Intel", correct: true },
      { text: "Windows", correct: false },
      { text: "iOS", correct: false },
      { text: "Linux", correct: false },
    ],
  },

  {
    question:
      "¿Qué lenguaje de programación se utiliza comúnmente para el desarrollo de aplicaciones de escritorio?",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
      { text: "C++", correct: false },
      { text: "Java", correct: true },
    ],
  },

  {
    question:
      "¿Cuál de los siguientes es un servicio de alojamiento en la nube proporcionado por Amazon?",
    answers: [
      { text: "Google Cloud", correct: false },
      { text: "AWS", correct: true },
      { text: "Azure", correct: false },
      { text: "Heroku", correct: false },
    ],
  },

  {
    question:
      "¿Qué lenguaje de programación es ampliamente utilizado para el análisis de datos y la ciencia de datos?",
    answers: [
      { text: "Java", correct: false },
      { text: "C++", correct: false },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: true },
    ],
  },

  {
    question:
      "¿Qué tecnología es conocida por permitir la comunicación entre servidores web y navegadores de manera asíncrona?",
    answers: [
      { text: "SOAP", correct: false },
      { text: "REST", correct: false },
      { text: "AJAX", correct: true },
      { text: "GraphQL", correct: false },
    ],
  },

  {
    question:
      "¿Qué lenguaje de programación es comúnmente utilizado para el desarrollo de aplicaciones de videojuegos?",
    answers: [
      { text: "C++", correct: true },
      { text: "Python", correct: false },
      { text: "Java", correct: false },
      { text: "Ruby", correct: false },
    ],
  },

  {
    question:
      "¿Cuál de las siguientes es una herramienta de control de versiones?",
    answers: [
      { text: "Slack", correct: false },
      { text: "JIRA", correct: false },
      { text: "GitHub", correct: true },
      { text: "Trello", correct: false },
    ],
  },

  {
    question:
      "¿Qué lenguaje de programación es ampliamente utilizado para el desarrollo de aplicaciones de servidor?",
    answers: [
      { text: "Java", correct: true },
      { text: "JavaScript", correct: false },
      { text: "Python", correct: false },
      { text: "C#", correct: false },
    ],
  },

  {
    question:
      "¿Qué tecnología se utiliza para agregar estilo y diseño a páginas web?",
    answers: [
      { text: "HTML", correct: false },
      { text: "JavaScript", correct: false },
      { text: "XML", correct: false },
      { text: "CSS", correct: true },
    ],
  },

  {
    question:
      "¿Cuál de los siguientes es un sistema operativo de código abierto?",
    answers: [
      { text: "Windows", correct: false },
      { text: "macOS", correct: false },
      { text: "Linux", correct: true },
      { text: "iOS", correct: false },
    ],
  },

  {
    question:
      "¿Qué tecnología es conocida por permitir la ejecución de código JavaScript en el lado del servidor?",
    answers: [
      { text: "Node.js", correct: true },
      { text: "React", correct: false },
      { text: "Angular", correct: false },
      { text: "Vue.js", correct: false },
    ],
  },

  {
    question:
      "¿Qué herramienta se utiliza para automatizar tareas repetitivas en el desarrollo de software?",
    answers: [
      { text: "Git", correct: false },
      { text: "Jenkins", correct: true },
      { text: "Subversion", correct: false },
      { text: "Mercurial", correct: false },
    ],
  },

  {
    question: "¿Cuál de los siguientes no es un paradigma de programación?",
    answers: [
      { text: "Imperativo", correct: false },
      { text: "Declarativo", correct: false },
      { text: "Scrumban", correct: true },
      { text: "Orientado a objetos", correct: false },
    ],
  },

  {
    question: "¿Qué lenguaje de marcado se utiliza para crear páginas web?",
    answers: [
      { text: "HTML", correct: true },
      { text: "JavaScript", correct: false },
      { text: "CSS", correct: false },
      { text: "JSON", correct: false },
    ],
  },

  {
    question:
      "¿Qué tecnología se utiliza para el intercambio de datos estructurados en la web?",
    answers: [
      { text: "XML", correct: false },
      { text: "HTML", correct: false },
      { text: "JSON", correct: true },
      { text: "CSV", correct: false },
    ],
  },
];

//? Capturamos el elemento donde se renderizaran las preguntas
const questionElement = document.querySelector("#question");

//? Capturamos el elemento donde se renderizaran las respuestas
const answerButtons = document.querySelector("#answer-buttons");

//? Capturamos el botón para ir a la siguiente pregunta
const nextBtn = document.querySelector("#next-btn");

//? Creamos un indexador para identificar la pregunta
let currentQuestionIndex = 0;

//? Cramos una variable acumuladora para llevar un conteo de las respuestas correctas
let score = 0;

//* Eventos
document.addEventListener("DOMContentLoaded", startQuiz);
nextBtn.addEventListener("click", () => {
  //? Validamos que continue hasta que no hayan mas preguntas
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

//* Funciones
/**
 * * Funcion para iniciar el quiz
 */
function startQuiz() {
  //? Inicializamos todo
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

/**
 * * Funcion para mostrar la pregunta
 */
function showQuestion() {
  //? Limpimamos el html previo
  cleanHtml();

  //? Obtenemos la primera pregunta
  let currentQuestion = questions[currentQuestionIndex];

  //? Iniciamos el index en 1
  let index = currentQuestionIndex + 1;

  //? Renderizamos la pregunta
  questionElement.innerHTML = currentQuestion.question;

  //? Renderizamos las respuestas
  currentQuestion.answers.forEach((answer) => {
    //? Creamos el botón
    const btn = document.createElement("button");

    //? Le agregamos el texto
    btn.innerHTML = answer.text;

    //? Le añadimos estilos
    btn.classList.add(
      "border",
      "border-gray-500",
      "hover:bg-gradient-to-r",
      "from-cyan-500",
      "to-blue-900",
      "hover:text-white",
      "transition",
      "rounded",
      "py-2",
      "px-4",
      "text-start",
      "font-semibold",
      "w-full"
    );

    //? Lo agregamos al contenedor
    answerButtons.appendChild(btn);

    //? Validamos si la respuesta es correcta
    if (answer.correct) btn.dataset.correct = answer.correct;

    //? Añadimos el evento click para responder
    btn.addEventListener("click", selectAnswer);
  });
}

/**
 * * Función para limpiar el html
 */
function cleanHtml() {
  //? Ocultamos el botton next
  nextBtn.classList.add("hidden");

  //? Eliminamos el html previo
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

/**
 * * Función para seleccionar la respuesta
 */
function selectAnswer(event) {
  //? Almacenamos la respuesta
  const selectedBtn = event.target;

  //? Almacenamos la respuesta y validamos si es correcta
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add(
      "bg-green-100",
      "border-green-600",
      "text-green-700"
    );
    score++;
  } else {
    selectedBtn.classList.add("bg-red-100", "border-red-600", "text-red-700");
  }

  //? Recorremos los botones
  Array.from(answerButtons.children).forEach((btn) => {
    //? Validamos la respuesta correcta
    if (btn.dataset.correct === "true") {
      btn.classList.add("bg-green-100", "border-green-600", "text-green-700");
    }

    //? Desabilitamos los botones
    btn.disabled = true;

    if (btn.disabled) {
      btn.classList.remove(
        "hover:bg-gradient-to-r",
        "from-cyan-500",
        "to-blue-900",
        "hover:text-white",
        "corsor-no-drop"
      );
    }
  });

  //? Habilitamos el botón next
  nextBtn.classList.remove("hidden");
}

/**
 * * Función para manejar el botón next
 */
function handleNextBtn() {
  //? Incrementamos el indice
  currentQuestionIndex++;

  //? Validamos que el indice no sobrepase la cantidad de preguntas
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

/**
 * * Función para mostrar el marcaje final
 */
function showScore() {
  //? Limpiamos el html previo
  cleanHtml();

  //? Mostramos el resultado
  questionElement.innerHTML = `Tus respuestas fueron ${score} de ${questions.length}!`;

  //? Reiniciamos el quiz
  nextBtn.innerHTML = "Reiniciar";

  //? Habilitamos el boton de next
  nextBtn.classList.remove("hidden");
}
