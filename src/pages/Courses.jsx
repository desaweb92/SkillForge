import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowRight, FiCheck, FiLayers, FiSliders, FiTool, FiMonitor } from "react-icons/fi";
import { FaBrain, FaLightbulb, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Courses = () => {
  const sectionRefs = useRef([]);
  const controls = useAnimation();

  // Paleta de colores futurista
  const colors = {
    primary: "#6C63FF",
    secondary: "#00BFB2",
    accent: "#FF4D7D",
    highlight: "#FFD166",
    darkBg: "#0F0F1B",
    cardBg: "#1A1A2E",
    lightText: "#E6F7FF"
  };

  useEffect(() => {
    // Animaciones GSAP para las tarjetas
    gsap.utils.toArray(".course-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        delay: i * 0.1
      });
    });

    // Animación del título
    gsap.from(".title-animation", {
      y: 20,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.2
    });

    // Animación del proceso
    gsap.utils.toArray(".process-step").forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        x: i % 2 === 0 ? -20 : 20,
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: i * 0.1
      });
    });
  }, []);

  // Variantes de animación para Framer Motion
  const containerVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -5,
      scale: 1.02,
      boxShadow: `0 10px 15px -3px ${colors.primary}40`,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const courses = [
    {
      title: "Básicos",
      description: "Plantillas predefinidas listas para usar, ideales para implementación rápida y eficiente.",
      icon: <FiLayers className="text-4xl" />,
      color: colors.primary,
      features: [
        "Diseños profesionales",
        "Contenido editable",
        "Rápida implementación",
        "Soporte básico"
      ]
    },
    {
      title: "Mixtos",
      description: "Combina plantillas básicas con personalización en áreas clave según tus necesidades.",
      icon: <FiSliders className="text-4xl" />,
      color: colors.secondary,
      features: [
        "Estructura predefinida",
        "Secciones personalizables",
        "Balance costo-beneficio",
        "Soporte estándar"
      ]
    },
    {
      title: "Personalizados",
      description: "Soluciones completamente adaptadas a tus necesidades y objetivos específicos.",
      icon: <FiTool className="text-4xl" />,
      color: colors.accent,
      features: [
        "Diseño desde cero",
        "Contenido exclusivo",
        "Funcionalidades avanzadas",
        "Soporte prioritario"
      ]
    }
  ];

  const processSteps = [
    {
      title: "Consulta",
      description: "Analizamos tus necesidades y objetivos educativos.",
      icon: <FaBrain className="text-3xl" />
    },
    {
      title: "Estrategia",
      description: "Diseñamos una solución personalizada para tu organización.",
      icon: <FaLightbulb className="text-3xl" />
    },
    {
      title: "Desarrollo",
      description: "Creamos los contenidos con los más altos estándares.",
      icon: <FiTool className="text-3xl" />
    },
    {
      title: "Implementación",
      description: "Desplegamos la solución en tu plataforma preferida.",
      icon: <FaRocket className="text-3xl" />
    },
    {
      title: "Seguimiento",
      description: "Monitoreamos y optimizamos continuamente.",
      icon: <FiMonitor className="text-3xl" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />
      <main className="px-6 py-12 md:px-12 lg:px-24 space-y-28">
        {/* Hero Section */}
        <section className="text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Soluciones Educativas
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
            >
              Transforma tu formación con nuestros <span className="text-purple-600">cursos innovadores</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Desde plantillas listas para usar hasta soluciones completamente personalizadas, tenemos la opción perfecta para tus necesidades educativas.
            </motion.p>
          </motion.div>
        </section>

        {/* Cursos Section */}
        <section className="space-y-16">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center title-animation"
          >
            Nuestros <span className="text-purple-600">Tipos de Cursos</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className="course-card p-8 rounded-2xl relative overflow-hidden"
                whileHover="hover"
                whileTap="tap"
                variants={cardHover}
                style={{
                  backgroundColor: 'white',
                  border: `1px solid ${course.color}20`
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: course.color }} />

                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                       style={{ backgroundColor: `${course.color}10`, color: course.color }}>
                    {course.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>

                  <p className="text-gray-600">{course.description}</p>

                  <ul className="space-y-2 text-left w-full">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <FiCheck className="text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium flex items-center gap-2 transition-all duration-300">
                    Ver detalles <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Proceso Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="px-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Nuestro <span className="text-purple-600">Proceso</span>
            </motion.h2>

            <div className="relative">
              {/* Línea de tiempo */}
              <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-purple-200 transform -translate-x-1/2"></div>

              <div className="space-y-12 md:space-y-0">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`process-step flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 mb-12`}
                    variants={itemVariants}
                  >
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 mx-auto md:mx-0"
                           style={{ color: colors.primary }}>
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-center md:text-left text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-center md:text-left">{step.description}</p>
                    </div>

                    <div className="hidden md:block w-10 h-10 rounded-full bg-purple-600 flex-shrink-0 relative z-10"></div>

                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-md">
                        <div className="text-sm text-purple-600 font-medium mb-2">Paso {index + 1}</div>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-white text-center">
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu formación corporativa?</h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-10">Contáctanos hoy mismo y descubre cómo podemos ayudarte a crear la solución perfecta para tus necesidades.</p>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#fff",
                color: colors.primary
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-purple-800 text-white rounded-full text-lg font-bold shadow-xl flex items-center gap-3 mx-auto"
            >
              Hablar con un experto <FiArrowRight />
            </motion.button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
