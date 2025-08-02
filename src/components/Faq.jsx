import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";
import { FiChevronDown, FiSend, FiMessageSquare } from "react-icons/fi";
import Questions from "../assets/images/questions-FAQ.svg";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({ question: "" });
  const sectionRef = useRef(null);
  const faqRefs = useRef([]);

  // Paleta de colores moderna
  const colors = {
    primary: "#6C63FF",
    secondary: "#00BFB2",
    accent: "#FF4D7D",
    highlight: "#FFD166",
    darkBg: "#0F0F1B",
    lightText: "#E6F7FF",
    cardBg: "#FFFFFF"
  };

  useEffect(() => {
    // Animación de entrada para la sección
    gsap.from(sectionRef.current, {
      y: 50,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    // Animaciones para cada item FAQ
    gsap.utils.toArray(".faq-item").forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 30,
        duration: 0.6,
        ease: "back.out(1.2)",
        delay: i * 0.1
      });
    });

    // Efecto parallax para la ilustración
    gsap.to(".parallax-img", {
      scrollTrigger: {
        trigger: ".illustration-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 30,
      ease: "none"
    });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar la pregunta
    console.log("Pregunta enviada:", formData.question);
    setFormData({ question: "" });
  };

  const faqs = [
    {
      question: "¿Qué tipo de páginas web desarrollan?",
      answer: "Desarrollamos páginas web personalizadas según las necesidades de cada cliente, bien sea estáticas o interactivas.",
      category: "Desarrollo Web"
    },
    {
      question: "¿Ofrecen servicios de mantenimiento web?",
      answer: "Sí, ofrecemos planes de mantenimiento para asegurar que tu sitio web esté siempre actualizado.",
      category: "Desarrollo Web"
    },
    {
      question: "¿Cuánto tiempo lleva desarrollar una página web?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto, pero generalmente toma entre 4 y 8 semanas.",
      category: "Desarrollo Web"
    },
    {
      question: "¿Pueden integrar un sistema de comercio electrónico en mi sitio web?",
      answer: "Sí, podemos integrar soluciones de comercio electrónico para tu sitio web.",
      category: "Desarrollo Web"
    },
    {
      question: "¿Ofrecen servicios de optimización para motores de búsqueda (SEO)?",
      answer: "Sí, ofrecemos servicios de SEO para mejorar la visibilidad de tu sitio web en los motores de búsqueda.",
      category: "Marketing Digital"
    },
    {
      question: "¿Qué tipo de actividades interactivas pueden crear?",
      answer: "Desarrollamos una variedad de actividades interactivas, desde cuestionarios hasta simulaciones.",
      category: "Contenido Interactivo"
    },
    {
      question: "¿Pueden desarrollar juegos educativos personalizados?",
      answer: "Sí, podemos crear juegos educativos adaptados a tus necesidades específicas.",
      category: "Contenido Interactivo"
    },
    {
      question: "¿En qué plataformas pueden ejecutarse los juegos interactivos?",
      answer: "Nuestros juegos interactivos pueden ejecutarse en múltiples plataformas, incluyendo web y móviles.",
      category: "Contenido Interactivo"
    },
    {
      question: "¿Ofrecen servicios de gamificación para empresas?",
      answer: "Sí, ofrecemos soluciones de gamificación para mejorar el compromiso y la participación en tu empresa.",
      category: "Contenido Interactivo"
    },
    {
      question: "¿Qué temas cubren sus cursos de actualización?",
      answer: "Nuestros cursos cubren una amplia gama de temas, desde tecnología hasta habilidades blandas.",
      category: "Cursos"
    },
    {
      question: "¿Ofrecen certificaciones al finalizar los cursos?",
      answer: "Sí, proporcionamos certificados de finalización para nuestros cursos.",
      category: "Cursos"
    },
    {
      question: "¿Cómo se imparten los cursos: en línea, presenciales o ambos?",
      answer: "Ofrecemos cursos tanto en línea como presenciales, según las preferencias del cliente.",
      category: "Cursos"
    },
    {
      question: "¿Qué medidas de seguridad incluyen en sus cursos?",
      answer: "Nuestros cursos incluyen módulos sobre ciberseguridad y protección de datos.",
      category: "Cursos"
    },
    {
      question: "¿Pueden personalizar los cursos según las necesidades de mi empresa?",
      answer: "Sí, podemos personalizar los cursos para adaptarlos a las necesidades específicas de tu empresa.",
      category: "Cursos"
    },
    {
      question: "¿Cuál es su proceso de trabajo para un proyecto nuevo?",
      answer: "Nuestro proceso incluye consultas iniciales, planificación, desarrollo, pruebas y lanzamiento.",
      category: "General"
    },
    {
      question: "¿Ofrecen soporte técnico continuo?",
      answer: "Sí, ofrecemos soporte técnico continuo para todos nuestros proyectos.",
      category: "General"
    },
    {
      question: "¿Cuáles son sus tarifas y planes de pago?",
      answer: "Nuestras tarifas varían según el proyecto. Ofrecemos planes de pago flexibles.",
      category: "General"
    },
    {
      question: "¿Pueden mostrar ejemplos de trabajos anteriores o un portafolio?",
      answer: "Sí, tenemos un portafolio disponible con ejemplos de nuestros trabajos anteriores.",
      category: "General"
    },
    {
      question: "¿Cómo manejan la confidencialidad y seguridad de la información de los clientes?",
      answer: "Tomamos medidas estrictas para garantizar la confidencialidad y seguridad de la información de nuestros clientes.",
      category: "General"
    },
  ];

  // Agrupar FAQs por categoría
  const faqCategories = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  const faqItemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  const answerVariants = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />

      <main ref={sectionRef} className="px-6 py-12 md:px-12 lg:px-24">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{
            background: "linear-gradient(45deg, #6C63FF, #00BFB2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-gray-600">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
          </p>
        </motion.div>

        {/* FAQ Content */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* FAQ List */}
          <div className="w-full lg:w-2/3 space-y-6">
            {Object.entries(faqCategories).map(([category, items], catIndex) => (
              <div key={catIndex} className="space-y-4">
                <h2 className="text-2xl font-bold mb-2" style={{ color: colors.primary }}>
                  {category}
                </h2>

                {items.map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f.question === faq.question);
                  return (
                    <motion.div
                      key={index}
                      ref={el => faqRefs.current[globalIndex] = el}
                      className="faq-item bg-white rounded-xl shadow-sm p-6 cursor-pointer"
                      variants={faqItemVariants}
                      whileHover="hover"
                      onClick={() => toggleFAQ(globalIndex)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                        <motion.span
                          animate={{ rotate: openIndex === globalIndex ? 180 : 0 }}
                          style={{ color: colors.primary }}
                        >
                          <FiChevronDown />
                        </motion.span>
                      </div>

                      <AnimatePresence>
                        {openIndex === globalIndex && (
                          <motion.div
                            variants={answerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="overflow-hidden"
                          >
                            <p className="mt-4 text-gray-600">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Ask Question Form */}
          <div className="w-full lg:w-1/3">
            <motion.div
              className="sticky top-24 bg-white rounded-xl shadow-lg p-8 h-fit"
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="illustration-container flex justify-center mb-6">
                <img
                  src={Questions}
                  alt="FAQ Illustration"
                  className="parallax-img w-48 h-48 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold mb-4 text-center" style={{ color: colors.primary }}>
                ¿Tienes otra pregunta?
              </h2>

              <p className="text-gray-600 mb-6 text-center">
                Si no encontraste lo que buscabas, envíanos tu pregunta y te responderemos pronto.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <FiMessageSquare className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Escribe tu pregunta aquí..."
                    rows="4"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium"
                  style={{
                    backgroundColor: colors.primary,
                    color: 'white'
                  }}
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: colors.secondary
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar pregunta <FiSend />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
