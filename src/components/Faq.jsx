import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Questions from "../assets/images/questions-FAQ.svg";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué tipo de páginas web desarrollan?",
      answer:
        "Desarrollamos páginas web personalizadas según las necesidades de cada cliente, bien sea estáticas o interactivas.",
    },
    {
      question: "¿Ofrecen servicios de mantenimiento web?",
      answer:
        "Sí, ofrecemos planes de mantenimiento para asegurar que tu sitio web esté siempre actualizado.",
    },
    {
      question: "¿Cuánto tiempo lleva desarrollar una página web?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto, pero generalmente toma entre 4 y 8 semanas.",
    },
    {
      question:
        "¿Pueden integrar un sistema de comercio electrónico en mi sitio web?",
      answer:
        "Sí, podemos integrar soluciones de comercio electrónico para tu sitio web.",
    },
    {
      question:
        "¿Ofrecen servicios de optimización para motores de búsqueda (SEO)?",
      answer:
        "Sí, ofrecemos servicios de SEO para mejorar la visibilidad de tu sitio web en los motores de búsqueda.",
    },
    {
      question: "¿Qué tipo de actividades interactivas pueden crear?",
      answer:
        "Desarrollamos una variedad de actividades interactivas, desde cuestionarios hasta simulaciones.",
    },
    {
      question: "¿Pueden desarrollar juegos educativos personalizados?",
      answer:
        "Sí, podemos crear juegos educativos adaptados a tus necesidades específicas.",
    },
    {
      question:
        "¿En qué plataformas pueden ejecutarse los juegos interactivos?",
      answer:
        "Nuestros juegos interactivos pueden ejecutarse en múltiples plataformas, incluyendo web y móviles.",
    },
    {
      question: "¿Ofrecen servicios de gamificación para empresas?",
      answer:
        "Sí, ofrecemos soluciones de gamificación para mejorar el compromiso y la participación en tu empresa.",
    },
    {
      question: "¿Qué temas cubren sus cursos de actualización?",
      answer:
        "Nuestros cursos cubren una amplia gama de temas, desde tecnología hasta habilidades blandas.",
    },
    {
      question: "¿Ofrecen certificaciones al finalizar los cursos?",
      answer:
        "Sí, proporcionamos certificados de finalización para nuestros cursos.",
    },
    {
      question: "¿Cómo se imparten los cursos: en línea, presenciales o ambos?",
      answer:
        "Ofrecemos cursos tanto en línea como presenciales, según las preferencias del cliente.",
    },
    {
      question: "¿Qué medidas de seguridad incluyen en sus cursos?",
      answer:
        "Nuestros cursos incluyen módulos sobre ciberseguridad y protección de datos.",
    },
    {
      question:
        "¿Pueden personalizar los cursos según las necesidades de mi empresa?",
      answer:
        "Sí, podemos personalizar los cursos para adaptarlos a las necesidades específicas de tu empresa.",
    },
    {
      question: "¿Cuál es su proceso de trabajo para un proyecto nuevo?",
      answer:
        "Nuestro proceso incluye consultas iniciales, planificación, desarrollo, pruebas y lanzamiento.",
    },
    {
      question: "¿Ofrecen soporte técnico continuo?",
      answer:
        "Sí, ofrecemos soporte técnico continuo para todos nuestros proyectos.",
    },
    {
      question: "¿Cuáles son sus tarifas y planes de pago?",
      answer:
        "Nuestras tarifas varían según el proyecto. Ofrecemos planes de pago flexibles.",
    },
    {
      question:
        "¿Pueden mostrar ejemplos de trabajos anteriores o un portafolio?",
      answer:
        "Sí, tenemos un portafolio disponible con ejemplos de nuestros trabajos anteriores.",
    },
    {
      question:
        "¿Cómo manejan la confidencialidad y seguridad de la información de los clientes?",
      answer:
        "Tomamos medidas estrictas para garantizar la confidencialidad y seguridad de la información de nuestros clientes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-black">
      <Header />
      <div className="w-full bg-gray-100 min-h-screen flex flex-col items-center">
        <div className="w-full max-w-[80%] p-6 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2 bg-white p-6 rounded shadow">
            <h1 className="text-3xl font-bold text-center text-red-900 mb-6">
              Preguntas Frecuentes
            </h1>

            {faqs.map((faq, index) => (
              <div key={index} className="pb-4 mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                >
                  <div className="w-full grid grid-cols-2 items-center justify-center shadow-md p-2">
                    <span className="w-full text-[16px] font-medium text-black ">
                      {faq.question}
                    </span>
                    <span className="ml-[80%] w-8 h-8 flex justify-center text-center items-center text-[20px] font-bold text-[#CD7F32] bg-[#820000] p-1 rounded-full">
                      {openIndex === index ? "-" : "+"}
                    </span>
                  </div>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-black p-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <div className="w-full h-full md:w-1/2 bg-white p-6 rounded shadow flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center">
            <img
              src={Questions}
              alt="FAQ Illustration"
              className="w-[50%]"
            />
              <h2 className="text-[30px] font-bold text-[#820000] mb-2">
                ¿Tienes alguna pregunta?
              </h2>
              <p className="text-black mb-4 text-justify">
                Puedes hacernos cualquier pregunta que tengas sobre nuestros
                servicios.
              </p>
             
              <form className="mt-4">
                
                <div>
                <textarea
                  className="w-full p-2 border-b-2 rounded mb-4"
                  placeholder="Escribe tu pregunta aquí..."
                ></textarea>
                <button className="w-[30%] bg-[#820000] text-white text-center px-4 py-2 mx-2 rounded-full hover:bg-[#BC0000] border-b-4 border-l-2 font-bold border-[#CD7F32] leading-5 active:bg-white active:text-[#820000] active:border-t-4 active:border-b-0 active:border-l-0">
                  Enviar
                </button>
                </div>
              
              </form>
            </div>
           
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Faq;

// truncate: Usar para truncar texto largo
