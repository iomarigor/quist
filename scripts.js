const questions = [
    // Preguntas del ejemplo
    {
        question: "Los ataques cibernéticos no son nuevos, pero ahora los adversarios son más sofisticados, cuentan con más recursos, están capacitados y son adeptos a lanzar campañas de intrusión hábilmente planificadas llamadas:",
        options: ["Amenazas Persistentes Avanzadas (APT)", "Phishing", "Malware", "Spyware"],
        answer: [0]
    },
    {
        question: "Algunas herramientas utilizadas para la recopilación de correos electrónicos son:",
        options: ["Dnsenum", "Hunter.io", "Dig", "Theharverster"],
        answer: [1, 3]
    },
    {
        question: "Las etapas generales ordenadas para el manejo de incidentes son:",
        options: [
            "a) Preparación / Contención, erradicación y recuperación / Detección y análisis / Actividades post-incidentes.",
            "b) Detección y análisis / Preparación / Contención, erradicación y recuperación / Actividades post-incidentes.",
            "c) Preparación / Detección y análisis/ Contención, erradicación y recuperación / Actividades post-incidentes.",
            "d) Detección y análisis / Contención, erradicación y recuperación / Preparación / Actividades post-incidentes.",
            "e) Preparación / Detección y análisis / Actividades post-incidentes / Contención, erradicación y recuperación."
        ],
        answer: [2]
    },
    {
        question: "Un SIEM recibe datos/información de diferentes fuentes (Firewall, IDS/IPS, antivirus, etc.) y los formatos de estos datos/información pueden ser distintos. ¿Qué característica o función tiene el SIEM para la presentación uniforme de esos datos?",
        options: ["a) Correlación", "b) Cumplimiento", "c) Predicción", "d) Normalización", "e) Difusión"],
        answer: [3]
    },
    {
        question: "Threat Hunting es un enfoque __________ de ciberseguridad que busca detectar y mitigar las amenazas en las redes y equipos de una compañía antes de que ______________.",
        options: [],
        answer: ["proactivo", "causen algún daño"]
    },
    {
        question: "La primera generación de un SOC incluye el uso de herramientas como un SIEM.",
        options: ["a) Verdadero", "b) Falso"],
        answer: [1]
    },
    {
        question: "¿Cuál es el ciclo de la inteligencia, según la Central Intelligence Agency (CIA)?",
        options: [
            "a) Dirección, Procesamiento, Recolección, Análisis, Difusión",
            "b) Dirección, Recolección, Análisis, Procesamiento, Difusión",
            "c) Análisis, Recolección, Dirección, Procesamiento, Difusión",
            "d) Dirección, Recolección, Procesamiento, Análisis, Difusión",
            "e) Análisis, Dirección, Recolección, Procesamiento, Difusión"
        ],
        answer: [3]
    },
    {
        question: "Un personal de seguridad de la empresa ACME ha clasificado o categorizado inicialmente un incidente de seguridad como EJERCICIO. ¿En qué etapa del manejo de incidentes se realiza está acción?",
        options: ["a) Actividad Post-incidente", "b) Recopilación de datos", "c) Triaje", "d) Investigación"],
        answer: [2]
    },
    {
        question: "Mencione el documento creado por la Unión Europea y la Ley existente en el Perú relacionado a la protección de datos personales.",
        options: [],
        answer: ["GDPR", "Ley de Protección de Datos Personales", "Ley 29733", "Protección de Datos Personales"]
    },
    {
        question: "Un atacante, envía un correo electrónico con un archivo malicioso adjunto. ¿En qué fase de la cadena de la muerte se ubica esta acción?",
        options: ["a) Installation", "b) Weaponization", "c) Delivery", "d) Explotation", "e) Command & Control"],
        answer: [2]
    },
    {
        question: "¿Cuáles de las siguientes alternativas son consideradas como PII – Sensitive/Direct? (Seleccione las que corresponda).",
        options: ["a) Lugar de nacimiento", "b) Dirección de correo electrónico", "c) DNI", "d) Número de cuenta bancario", "e) Género", "f) Tipo de sangre", "g) Número de teléfono móvil", "h) Peso"],
        answer: [0, 2, 3, 5]
    },
    {
        question: "Con la herramienta SHODAN.IO se puede listar los dispositivos (servidores, equipos industriales, etc.) expuestos en Internet.",
        options: ["a) Verdadero", "b) Falso"],
        answer: [0]
    },
    {
        question: "Relacione según el tipo de inteligencia de amenazas:",
        options: [],
        answer: null
    },
    {
        question: "Mencione tres plataformas utilizadas en el Threat Hunting.",
        options: [],
        answer: ["HELK", "DETECTION LABS", "SOF-HELK", "helk", "detection labs", "sof-helk", "sof helk"]
    },
    {
        question: "En el ciclo de caza de Threat Hunting, en la fase de investigación, las hipótesis se investigan a partir de diversas fuentes y técnicas, seleccione aquellas que no corresponden a técnicas.",
        options: ["a) Clustering", "b) Weaponization", "c) Stack Counting", "d) Grouping", "e) Command & control (C2)"],
        answer: [1, 4]
    },
    // Preguntas de las Pruebas Generadas
    {
        question: "¿Qué es la continuidad del negocio (BC)?",
        options: [
            "a) La capacidad de una organización para continuar la entrega de productos o servicios a niveles aceptables tras un incidente disruptivo.",
            "b) La implementación de nuevos sistemas de TI.",
            "c) La actualización de software en los servidores.",
            "d) La creación de nuevos departamentos en la empresa."
        ],
        answer: [0]
    },
    {
        question: "¿Qué estándar internacional especifica los requisitos para la gestión de servicios de TI?",
        options: [
            "a) ISO/IEC 27001",
            "b) ISO/IEC 20000",
            "c) ISO/IEC 22301",
            "d) COBIT"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es el objetivo principal del análisis de impacto en el negocio (BIA)?",
        options: [
            "a) Identificar funciones críticas y evaluar el impacto de su interrupción.",
            "b) Desarrollar nuevos productos.",
            "c) Aumentar las ventas.",
            "d) Mejorar la eficiencia operativa."
        ],
        answer: [0]
    },
    {
        question: "¿Cuál de los siguientes no es un componente del plan de continuidad del negocio (BCP)?",
        options: [
            "a) Análisis de impacto",
            "b) Evaluación de riesgos",
            "c) Estrategias de mitigación",
            "d) Plan de marketing"
        ],
        answer: [3]
    },
    {
        question: "¿Cuál de las siguientes herramientas es utilizada para la auditoría de sistemas de información?",
        options: [
            "a) Nmap",
            "b) Photoshop",
            "c) Excel",
            "d) Word"
        ],
        answer: [0]
    },
    {
        question: "¿Qué funcionalidad principal ofrece Nessus?",
        options: [
            "a) Edición de imágenes",
            "b) Escaneo de vulnerabilidades",
            "c) Creación de documentos",
            "d) Gestión de proyectos"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es una estrategia de contingencia?",
        options: [
            "a) Un plan para desarrollar nuevos productos",
            "b) Un conjunto de planes y acciones preestablecidos diseñados para mitigar el impacto de eventos inesperados",
            "c) Una estrategia de ventas",
            "d) Una técnica de análisis de mercado"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál de los siguientes es un beneficio de tener estrategias de contingencia?",
        options: [
            "a) Aumenta la complejidad del proyecto",
            "b) Mejora de la confianza de los stakeholders",
            "c) Disminuye la eficiencia operativa",
            "d) Reduce la cantidad de empleados necesarios"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es ITIL?",
        options: [
            "a) Una herramienta de diseño gráfico",
            "b) Un conjunto de prácticas para la gestión de servicios de TI",
            "c) Un sistema operativo",
            "d) Un lenguaje de programación"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es una de las fases de la metodología de auditoría informática?",
        options: [
            "a) Publicidad",
            "b) Planificación",
            "c) Venta",
            "d) Marketing"
        ],
        answer: [1]
    },
    {
        question: "¿Qué estándar se enfoca en la gestión de la seguridad de la información?",
        options: [
            "a) ISO/IEC 20000",
            "b) ISO/IEC 27001",
            "c) COBIT",
            "d) ITIL"
        ],
        answer: [1]
    },
    {
        question: "¿Qué técnica se utiliza en la fase de pruebas del ciclo de vida de desarrollo de un sistema TI?",
        options: [
            "a) Publicidad en redes sociales",
            "b) Pruebas automatizadas",
            "c) Análisis de mercado",
            "d) Capacitación de empleados"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es el objetivo del desarrollo de un sistema según las especificaciones de diseño?",
        options: [
            "a) Construir el sistema",
            "b) Realizar encuestas",
            "c) Publicar artículos",
            "d) Aumentar la visibilidad en redes sociales"
        ],
        answer: [0]
    },
    {
        question: "¿Qué es COBIT?",
        options: [
            "a) Un estándar para la gestión de la seguridad de la información",
            "b) Un framework para la gestión y el gobierno de TI",
            "c) Un lenguaje de programación",
            "d) Un sistema operativo"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es el propósito de la planificación de la auditoría?",
        options: [
            "a) Desarrollar nuevos productos",
            "b) Definir el alcance y objetivos de la auditoría",
            "c) Aumentar las ventas",
            "d) Mejorar el marketing"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es la gestión de incidentes?",
        options: [
            "a) La implementación de nuevas tecnologías.",
            "b) La identificación y resolución de incidentes que pueden afectar la operatividad de los servicios de TI.",
            "c) La planificación de eventos empresariales.",
            "d) La evaluación de riesgos financieros."
        ],
        answer: [1]
    },
    {
        question: "¿Qué estándar es conocido por establecer un marco para la entrega de servicios de TI eficientes y de alta calidad?",
        options: [
            "a) ISO/IEC 27001",
            "b) ISO/IEC 20000",
            "c) ITIL",
            "d) NIST SP 800-34"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es un análisis de impacto en el negocio (BIA)?",
        options: [
            "a) Un estudio de mercado",
            "b) Un análisis de las funciones críticas y el impacto de su interrupción",
            "c) Un informe financiero",
            "d) Un plan de marketing"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál de los siguientes no es una herramienta de auditoría de sistemas de información?",
        options: [
            "a) Nessus",
            "b) Metasploit",
            "c) Splunk",
            "d) Photoshop"
        ],
        answer: [3]
    },
    {
        question: "¿Cuál es el objetivo de las pruebas automatizadas en la fase de pruebas del ciclo de vida de desarrollo de un sistema TI?",
        options: [
            "a) Aumentar las ventas",
            "b) Verificar y validar que el sistema funciona según lo esperado",
            "c) Mejorar el diseño gráfico",
            "d) Capacitar a nuevos empleados"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es un Plan de Continuidad del Negocio (BCP)?",
        options: [
            "a) Un plan de marketing",
            "b) Un plan integral que detalla las estrategias y procedimientos para mantener la operatividad de los procesos críticos de negocio",
            "c) Un informe financiero",
            "d) Un plan de ventas"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál de los siguientes es un componente de un plan de auditoría?",
        options: [
            "a) Definición de objetivos y alcance",
            "b) Desarrollo de productos",
            "c) Publicidad en redes sociales",
            "d) Aumento de la visibilidad online"
        ],
        answer: [0]
    },
    {
        question: "¿Qué estándar internacional se centra en la gestión de la continuidad del negocio?",
        options: [
            "a) ISO/IEC 27001",
            "b) ISO/IEC 22301",
            "c) ITIL",
            "d) COBIT"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es una de las fases del ciclo de vida de desarrollo de un sistema TI donde se implementan estrategias de contingencia?",
        options: [
            "a) Marketing",
            "b) Análisis de Requisitos",
            "c) Publicidad",
            "d) Finanzas"
        ],
        answer: [1]
    },
    {
        question: "¿Qué herramienta se utiliza para el escaneo de redes y la auditoría de seguridad?",
        options: [
            "a) Excel",
            "b) Nmap",
            "c) Word",
            "d) Photoshop"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es ITIL?",
        options: [
            "a) Un sistema operativo",
            "b) Un conjunto de prácticas para la gestión de servicios de TI",
            "c) Un lenguaje de programación",
            "d) Un plan de marketing"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es el propósito del monitoreo continuo en la fase de mantenimiento del ciclo de vida de desarrollo de un sistema TI?",
        options: [
            "a) Desarrollar nuevas funcionalidades",
            "b) Detectar y corregir problemas en tiempo real",
            "c) Capacitar a nuevos empleados",
            "d) Realizar marketing digital"
        ],
        answer: [1]
    },
    {
        question: "¿Qué es COBIT?",
        options: [
            "a) Un estándar para la gestión de la seguridad de la información",
            "b) Un framework para la gestión y el gobierno de TI",
            "c) Un lenguaje de programación",
            "d) Un sistema operativo"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es el objetivo del desarrollo de un sistema según las especificaciones de diseño?",
        options: [
            "a) Construir el sistema",
            "b) Realizar encuestas",
            "c) Publicar artículos",
            "d) Aumentar la visibilidad en redes sociales"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál es el objetivo principal de la gestión de continuidad de servicios de TI?",
        options: [
            "a) Mejorar el rendimiento del hardware",
            "b) Asegurar la continuidad de los servicios críticos de TI en caso de interrupciones",
            "c) Incrementar las ventas",
            "d) Desarrollar nuevos productos"
        ],
        answer: [1]
    },
    {
        question: "¿Qué componente es esencial en un plan de continuidad de servicios de TI?",
        options: [
            "a) Estrategias de mitigación de riesgos",
            "b) Plan de marketing",
            "c) Estrategias de ventas",
            "d) Diseño gráfico"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál de los siguientes NO es un beneficio de tener un plan de continuidad de servicios de TI?",
        options: [
            "a) Reducción del tiempo de inactividad",
            "b) Mejorar la eficiencia operativa",
            "c) Aumento de la visibilidad online",
            "d) Mitigación de riesgos"
        ],
        answer: [2]
    },
    {
        question: "¿Qué es ISO/IEC 22301?",
        options: [
            "a) Un estándar internacional para la gestión de la continuidad del negocio",
            "b) Un sistema operativo",
            "c) Un lenguaje de programación",
            "d) Un software de diseño gráfico"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál es el propósito principal de implementar ISO/IEC 22301 en una organización?",
        options: [
            "a) Asegurar la disponibilidad de servicios críticos durante y después de una interrupción",
            "b) Mejorar el diseño gráfico",
            "c) Incrementar las ventas",
            "d) Realizar campañas de marketing"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál de los siguientes es un componente clave en la implementación de ISO/IEC 22301?",
        options: [
            "a) Análisis de impacto en el negocio (BIA)",
            "b) Diseño de páginas web",
            "c) Estrategias de ventas",
            "d) Investigación de mercado"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál de las siguientes herramientas se utiliza para la auditoría de sistemas de información?",
        options: [
            "a) Nessus",
            "b) Photoshop",
            "c) Excel",
            "d) Word"
        ],
        answer: [0]
    },
    {
        question: "¿Qué función principal realiza la herramienta Metasploit en la auditoría de sistemas de información?",
        options: [
            "a) Edición de imágenes",
            "b) Pruebas de penetración",
            "c) Creación de documentos",
            "d) Gestión de proyectos"
        ],
        answer: [1]
    },
    {
        question: "¿Cuál es el propósito de usar herramientas de auditoría de sistemas de información como Splunk?",
        options: [
            "a) Analizar datos y generar informes de seguridad",
            "b) Diseñar logotipos",
            "c) Incrementar las ventas",
            "d) Realizar campañas de marketing"
        ],
        answer: [0]
    },
    {
        question: "¿Qué es un plan de continuidad del servicio de TI?",
        options: [
            "a) Un documento que detalla las estrategias para mantener los servicios de TI operativos durante y después de una interrupción",
            "b) Un plan de marketing",
            "c) Un informe financiero",
            "d) Una estrategia de ventas"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál de los siguientes es un componente del plan de continuidad del servicio de TI?",
        options: [
            "a) Análisis de impacto en el negocio (BIA)",
            "b) Plan de ventas",
            "c) Estrategias de marketing",
            "d) Desarrollo de productos"
        ],
        answer: [0]
    },
    {
        question: "¿Qué es una prueba de continuidad del negocio?",
        options: [
            "a) Un ejercicio para evaluar la efectividad del plan de continuidad",
            "b) Una estrategia de ventas",
            "c) Un análisis de mercado",
            "d) Una campaña de marketing"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál es la primera fase de la metodología de auditoría informática?",
        options: [
            "a) Planificación",
            "b) Recolección de información",
            "c) Ejecución de pruebas de auditoría",
            "d) Elaboración del informe de auditoría"
        ],
        answer: [0]
    },
    {
        question: "¿Qué se realiza durante la fase de recolección de información en una auditoría informática?",
        options: [
            "a) Revisión de documentación y entrevistas con el personal",
            "b) Desarrollo de productos",
            "c) Campañas de marketing",
            "d) Estrategias de ventas"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál es el objetivo principal de la fase de ejecución de pruebas de auditoría?",
        options: [
            "a) Evaluar la efectividad de los controles internos",
            "b) Incrementar las ventas",
            "c) Diseñar logotipos",
            "d) Realizar encuestas"
        ],
        answer: [0]
    },
    {
        question: "¿Qué son las estrategias de contingencia en el ciclo de vida de desarrollo de un sistema TI?",
        options: [
            "a) Planes para mitigar el impacto de eventos inesperados durante el desarrollo de un sistema",
            "b) Estrategias de ventas",
            "c) Análisis de mercado",
            "d) Campañas de marketing"
        ],
        answer: [0]
    },
    {
        question: "¿En qué fase del ciclo de vida de desarrollo de un sistema TI se implementan las estrategias de contingencia?",
        options: [
            "a) Análisis de requisitos",
            "b) Publicidad",
            "c) Marketing",
            "d) Finanzas"
        ],
        answer: [0]
    },
    {
        question: "¿Cuál es el propósito de las estrategias de contingencia en el desarrollo de un sistema TI?",
        options: [
            "a) Asegurar la continuidad del desarrollo en caso de interrupciones",
            "b) Incrementar las ventas",
            "c) Mejorar el diseño gráfico",
            "d) Realizar encuestas"
        ],
        answer: [0]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit");
    const reloadButton = document.createElement("button");
    const resultContainer = document.getElementById("result");

    reloadButton.innerHTML = "Recargar";
    reloadButton.setAttribute("id", "reload");
    reloadButton.style.display = "none";
    reloadButton.addEventListener("click", () => location.reload());

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function questionsGenerate() {
        var questionsG = [];
        var generatedNumbers = new Set();

        while (questionsG.length < 16) {
            var rn = getRandomInt(questions.length);
            if (!generatedNumbers.has(rn)) {
                generatedNumbers.add(rn);
                questionsG.push(questions[rn]);
            }
        }

        return questionsG;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    /* function shuffleOptions(options) {
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }
        return options;
    } */
    function buildQuiz() {
        const output = [];
        const shuffledQuestions = questionsGenerate();
        console.log(JSON.stringify(shuffledQuestions))

        shuffledQuestions.forEach((currentQuestion, questionNumber) => {
            const options = [];

            if (currentQuestion.options.length > 0) {
                //const shuffledOptions = shuffleOptions([...currentQuestion.options]);
                currentQuestion.options.forEach((option, i) => {
                    options.push(
                        `<label>
                            <input type="${currentQuestion.answer.length > 1 ? 'checkbox' : 'radio'}" name="question${questionNumber}" value="${currentQuestion.options.indexOf(option)}">
                            ${option}
                        </label>`
                    );
                });
            } else {
                options.push(
                    `<label>
                        <input type="text" name="question${questionNumber}" placeholder="Tu respuesta">
                    </label>`
                );
            }

            output.push(
                `<div class=question>
                    <h3>${questionNumber + 1}. ${currentQuestion.question}</h3>
                    <div class=options>${options.join('')}</div>
                </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }


    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.options');
        let numCorrect = 0;

        const shuffledQuestions = questionsGenerate();

        shuffledQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const userAnswerElement = answerContainer.querySelector(`input[name=question${questionNumber}]`);

            if (currentQuestion.options.length > 0 || typeof (currentQuestion.answer[0]) === "number") {
                const selector = `input[name=question${questionNumber}]`;
                const userAnswers = Array.from(answerContainer.querySelectorAll(selector)).filter(input => input.checked).map(input => parseInt(input.value));

                const correctAnswers = currentQuestion.answer;
                const isCorrect = userAnswers.length === correctAnswers.length && userAnswers.every(val => correctAnswers.includes(val));

                if (isCorrect) {
                    numCorrect++;
                    answerContainer.style.color = 'green';
                } else {
                    answerContainer.style.color = 'red';
                    try {
                        correctAnswers.forEach(correctAnswer => {
                            answerContainer.children[correctAnswer].style.color = 'green';
                        });
                    } catch (error) {
                        console.log(questionNumber, "error")
                    }

                }
            } else if (userAnswerElement) {
                const userAnswer = userAnswerElement.value.toLowerCase();
                const correctAnswers = Array.isArray(currentQuestion.answer) ? currentQuestion.answer.map(a => a.toLowerCase()) : [];

                const isCorrect = correctAnswers.every(ans => userAnswer.includes(ans));

                if (isCorrect) {
                    numCorrect++;
                    userAnswerElement.style.color = 'green';
                    answerContainer.innerHTML += `<span style="color: green;"> ✓ ${correctAnswers.join(', ')}</span>`;
                } else {
                    userAnswerElement.style.color = 'red';
                    answerContainer.innerHTML += `<span style="color: red;"> X ${correctAnswers.join(', ')}</span>`;
                }
            }
        });

        resultContainer.innerHTML = `Has acertado ${numCorrect} de ${questions.length} preguntas.`;
        submitButton.style.display = "none";
        reloadButton.style.display = "block";
    }



    buildQuiz();

    submitButton.addEventListener('click', showResults);
    document.body.appendChild(reloadButton);
});