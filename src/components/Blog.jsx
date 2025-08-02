import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Header";
import Footer from "./Footer";
import { FiArrowRight, FiChevronDown, FiPieChart, FiBookOpen, FiCode, FiShield, FiHeart, FiUser } from "react-icons/fi";
import { FaBrain, FaChalkboardTeacher, FaChild, FaFirstAid } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);
  const titleRef = useRef(null);

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
    // Animación del título con GSAP
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.3
    });

    // Animaciones de artículos al hacer scroll
    gsap.utils.toArray(".blog-article").forEach((article, i) => {
      gsap.from(article, {
        scrollTrigger: {
          trigger: article,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.2)",
        delay: i * 0.15
      });
    });

    // Efecto parallax para el fondo
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });
  }, []);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const blogPosts = [
    {
      title: "La personalización en el aprendizaje corporativo",
      summary: "Soluciones de aprendizaje altamente personalizadas que se adaptan a los objetivos específicos de tu empresa.",
      icon: <FaChalkboardTeacher className="text-3xl" />,
      color: colors.primary,
      content: [
        {
          subtitle: "Personalización basada en datos",
          points: [
            "Evaluaciones iniciales para identificar brechas de habilidades",
            "Rutas de aprendizaje individualizadas para cada empleado"
          ]
        },
        {
          subtitle: "Tecnología de vanguardia",
          points: [
            "Plataforma de aprendizaje adaptativa con algoritmos avanzados",
            "Análisis y reportes detallados del progreso"
          ]
        },
        {
          subtitle: "Impacto en el rendimiento",
          points: [
            "Alineación con objetivos estratégicos de la empresa",
            "Mayor retención y satisfacción del empleado"
          ]
        }
      ]
    },
    {
      title: "Ventajas de los cursos virtuales",
      summary: "Descubre cómo el aprendizaje en línea está transformando la educación corporativa.",
      icon: <FiBookOpen className="text-3xl" />,
      color: colors.secondary,
      content: [
        {
          subtitle: "Flexibilidad y accesibilidad",
          points: [
            "Aprendizaje a tu propio ritmo desde cualquier lugar",
            "Acceso 24/7 a los materiales del curso"
          ]
        },
        {
          subtitle: "Interactividad mejorada",
          points: [
            "Herramientas colaborativas como foros y chats",
            "Simulaciones y juegos educativos"
          ]
        },
        {
          subtitle: "Actualización continua",
          points: [
            "Contenidos siempre actualizados",
            "Adaptación a las últimas tendencias"
          ]
        }
      ]
    },
    {
      title: "Tecnología en la educación",
      summary: "Cómo las innovaciones tecnológicas están revolucionando la formación corporativa.",
      icon: <FiCode className="text-3xl" />,
      color: colors.accent,
      content: [
        {
          subtitle: "Inteligencia Artificial",
          points: [
            "Tutores virtuales personalizados",
            "Sistemas de recomendación de contenido"
          ]
        },
        {
          subtitle: "Realidad Virtual y Aumentada",
          points: [
            "Experiencias de aprendizaje inmersivas",
            "Simulaciones de entornos reales"
          ]
        }
      ]
    },
    {
      title: "Tecnología infantil educativa",
      summary: "Herramientas digitales para potenciar el aprendizaje en los más pequeños.",
      icon: <FaChild className="text-3xl" />,
      color: colors.highlight,
      content: [
        {
          subtitle: "Aplicaciones educativas",
          points: [
            "Actividades interactivas y personalizadas",
            "Desarrollo de habilidades cognitivas"
          ]
        },
        {
          subtitle: "Seguridad en línea",
          points: [
            "Protección de datos personales",
            "Control parental y contenido apropiado"
          ]
        }
      ]
    },
    {
      title: "Seguridad en el trabajo",
      summary: "Estrategias para crear entornos laborales más seguros y productivos.",
      icon: <FiShield className="text-3xl" />,
      color: colors.primary,
      content: [
        {
          subtitle: "Prevención de riesgos",
          points: [
            "Identificación proactiva de peligros",
            "Protocolos de actuación"
          ]
        },
        {
          subtitle: "Cultura de seguridad",
          points: [
            "Empoderamiento de los empleados",
            "Comunicación abierta sobre riesgos"
          ]
        }
      ]
    },
    {
      title: "Primeros auxilios en la empresa",
      summary: "Por qué toda organización debe capacitar a su personal en primeros auxilios.",
      icon: <FaFirstAid className="text-3xl" />,
      color: colors.secondary,
      content: [
        {
          subtitle: "Respuesta rápida",
          points: [
            "Técnicas básicas que salvan vidas",
            "Manejo de situaciones de emergencia"
          ]
        },
        {
          subtitle: "Capacitación obligatoria",
          points: [
            "Personal certificado en primeros auxilios",
            "Simulacros periódicos"
          ]
        }
      ]
    }
  ];

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.4, 1]
      }
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(108, 99, 255, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {/* Fondo decorativo */}
      <div className="parallax-bg fixed inset-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #6C63FF, transparent 70%)" }} />
      
      <Header />
      
      <main className="px-6 py-12 md:px-12 lg:px-24 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto">
         <h1 className="text-4xl md:text-6xl  font-bold leading-tight my-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Explora nuestro
              </span>{" "}
              <span className="text-purple-600">blog educativo</span>
            </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-600"
          >
            Descubre artículos, tendencias y consejos sobre formación corporativa, tecnología educativa y desarrollo profesional.
          </motion.p>
        </section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="blog-article bg-white rounded-xl shadow-md overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover="hover"
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4`} style={{ backgroundColor: `${post.color}20`, color: post.color }}>
                  {post.icon}
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                
                <motion.button
                  onClick={() => handleAccordionClick(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium`}
                  style={{ color: post.color, backgroundColor: `${post.color}10` }}
                  whileHover={{ backgroundColor: `${post.color}20` }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeIndex === index ? "Mostrar menos" : "Leer más"}
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown />
                  </motion.span>
                </motion.button>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={contentVariants}
                  >
                    <div className="px-6 pb-6 pt-0 space-y-4">
                      {post.content.map((section, i) => (
                        <div key={i} className="space-y-2">
                          <h3 className="font-semibold text-lg" style={{ color: post.color }}>{section.subtitle}</h3>
                          <ul className="space-y-2 pl-5">
                            {section.points.map((point, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <span className="mt-1 flex-shrink-0" style={{ color: post.color }}>
                                  <FiCheck />
                                </span>
                                <span className="text-gray-700">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl text-white text-center"
        >
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres más contenido como este?</h2>
            <p className="text-xl text-purple-100 mb-8">Suscríbete a nuestro newsletter para recibir los últimos artículos y actualizaciones directamente en tu correo.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: colors.primary }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-purple-800 text-white rounded-full font-bold flex items-center gap-2 justify-center"
              >
                Suscribirse <FiArrowRight />
              </motion.button>
            </div>
          </div>
        </motion.section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;