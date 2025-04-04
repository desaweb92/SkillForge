export const data = [
  // ========== DIAPOSITIVAS INFORMATIVAS (6) ==========
  {
    tipo: "info",
    titulo: "Introducción al Trabajo en Alturas",
    contenido: "El trabajo en alturas es toda labor que se realiza a más de 1.8 metros sobre el nivel del piso y que representa riesgo de caída que pueda causar lesiones al trabajador.\n\nSegún la OIT, las caídas de altura representan el 15% de los accidentes laborales mortales.",
    imagen: "/assets/trabajo-alturas/introduccion.jpg"
  },
  {
    tipo: "info",
    titulo: "Normativa Colombiana",
    contenido: "En Colombia, el trabajo en alturas está regulado principalmente por:\n\n- Resolución 1409 de 2012 (Reglamento Técnico de Trabajo Seguro en Alturas)\n- Decreto 1072 de 2015 (Decreto Único Reglamentario del Sector Trabajo)\n- Resolución 0312 de 2019 (Estándares Mínimos del SG-SST)",
    imagen: "/assets/trabajo-alturas/normativa.jpg"
  },
  {
    tipo: "info",
    titulo: "Equipos de Protección Personal (EPP)",
    contenido: "Los EPP básicos para trabajo en alturas incluyen:\n\n• Arnés de cuerpo completo\n• Casco de seguridad\n• Calzado antideslizante\n• Guantes de protección\n• Línea de vida y conectores\n• Dispositivos de anclaje",
    imagen: "/assets/trabajo-alturas/epp.jpg"
  },
  {
    tipo: "info",
    titulo: "Riesgos Principales",
    contenido: "Los principales riesgos en trabajo en alturas son:\n\n1. Caídas a diferente nivel\n2. Caída de objetos\n3. Colapsos estructurales\n4. Condiciones meteorológicas adversas\n5. Contactos eléctricos\n6. Movimientos inesperados de equipos",
    imagen: "/assets/trabajo-alturas/riesgos.jpg"
  },
  {
    tipo: "info",
    titulo: "Procedimientos Seguros",
    contenido: "Todo trabajo en alturas debe incluir:\n\n✓ Análisis de riesgos previo\n✓ Inspección de equipos\n✓ Delimitación del área\n✓ Señalización adecuada\n✓ Plan de rescate y emergencia\n✓ Supervisión constante",
    imagen: "/assets/trabajo-alturas/procedimientos.jpg"
  },
  {
    tipo: "info",
    titulo: "Capacitación y Certificación",
    contenido: "Según la normativa:\n\n• Los trabajadores deben recibir capacitación inicial de 40 horas\n• Se requieren recertificaciones anuales de 8 horas\n• Los capacitadores deben estar autorizados\n• La certificación incluye evaluación teórica y práctica",
    imagen: "/assets/trabajo-alturas/certificacion.jpg"
  },

  // ========== ACTIVIDADES INTERACTIVAS (4) ==========
  {
    tipo: "actividad",
    tipoActividad: "completar-frases",
    titulo: "Complete las Frases",
    instrucciones: "Seleccione las palabras correctas para completar las oraciones sobre trabajo en alturas.",
    datos: {
      frases: [
        {
          texto: "En Colombia, la altura mínima considerada como trabajo en alturas es de _ metros.",
          respuesta: "1.8",
          opciones: ["1.2", "1.5", "1.8", "2.0"]
        },
        {
          texto: "La resolución que regula el trabajo en alturas es la _ de 2012.",
          respuesta: "1409",
          opciones: ["1409", "1234", "1609", "0312"]
        },
        {
          texto: "La frecuencia mínima para recertificación es cada _ año(s).",
          respuesta: "1",
          opciones: ["1", "2", "3", "5"]
        }
      ]
    }
  },
  {
    tipo: "actividad",
    tipoActividad: "arrastrar-soltar",
    titulo: "Equipo de Protección",
    instrucciones: "Arrastre cada elemento de protección al tipo correspondiente.",
    datos: {
      items: ["Arnés", "Casco", "Guantes", "Botas", "Línea de vida", "Gafas", "Mosquetón", "Absorbedor de energía"],
      targets: [
        "Protección contra caídas",
        "Protección cabeza",
        "Protección manos",
        "Protección pies",
        "Sistemas de anclaje",
        "Protección ocular",
        "Conectores",
        "Dispositivos de amortiguación"
      ]
    }
  },
  {
    tipo: "actividad",
    tipoActividad: "sopa-letras",
    titulo: "Sopa de Letras",
    instrucciones: "Encuentre las palabras relacionadas con trabajo seguro en alturas.",
    datos: {
      palabras: ["ARNES", "CASCO", "ALTURAS", "RIESGO", "ANCLAJE", "RESCATE", "NORMATIVA", "PROTECCION"],
      grid: [
        ["A", "R", "N", "E", "S", "C", "A", "S", "C", "O"],
        ["L", "T", "A", "M", "P", "R", "O", "T", "E", "C"],
        ["T", "R", "I", "E", "S", "G", "O", "N", "O", "I"],
        ["U", "N", "O", "R", "M", "A", "T", "I", "V", "O"],
        ["R", "E", "S", "C", "A", "T", "E", "J", "A", "N"],
        ["A", "L", "T", "U", "R", "A", "S", "K", "L", "A"],
        ["S", "A", "N", "C", "L", "A", "J", "E", "M", "B"]
      ]
    }
  },
  {
    tipo: "actividad",
    tipoActividad: "seleccion-multiple",
    titulo: "Evaluación Final",
    instrucciones: "Seleccione la respuesta correcta para cada pregunta.",
    datos: {
      preguntas: [
        {
          texto: "¿Cuál es el primer paso antes de realizar trabajo en alturas?",
          opciones: [
            "Iniciar inmediatamente el trabajo",
            "Realizar análisis de riesgos",
            "Firmar el permiso de trabajo",
            "Usar el equipo de protección"
          ],
          respuesta: 1
        },
        {
          texto: "¿Qué elemento NO es parte del EPP para trabajo en alturas?",
          opciones: [
            "Arnés de seguridad",
            "Casco protector",
            "Gafas de sol",
            "Calzado antideslizante"
          ],
          respuesta: 2
        },
        {
          texto: "La capacitación inicial debe ser de:",
          opciones: [
            "8 horas",
            "20 horas",
            "40 horas",
            "60 horas"
          ],
          respuesta: 2
        }
      ]
    }
  }
];