import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogoP from "../assets/images/Logo_header_dos.png";
import { FaGraduationCap, FaChartLine, FaChild } from "react-icons/fa";

// Configuración de plugins
gsap.registerPlugin(ScrollTrigger);

// Paleta de colores futurista
const colors = {
  primary: "#6C63FF",
  secondary: "#00BFB2",
  darkBg: "#0F0F1B",
  cardBg: "#1A1A2E",
  lightText: "#E6F7FF",
  accent: "#FF4D7D",
  highlight: "#FFD166"
};

function About() {
  const containerRef = useRef();
  const statsRef = useRef([]);
  const progressBarsRef = useRef([]);

  // Efectos de partículas (simuladas con CSS)
  useEffect(() => {
    const particles = [];
    const colors = ['#6C63FF', '#00BFB2', '#FF4D7D', '#FFD166'];

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full';
      particle.style.width = `${Math.random() * 8 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = Math.random() * 0.6 + 0.2;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.zIndex = '0';

      gsap.to(particle, {
        x: `${Math.random() * 100 - 50}px`,
        y: `${Math.random() * 100 - 50}px`,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      document.querySelector('.particles-container').appendChild(particle);
      particles.push(particle);
    }
    return () => particles.forEach(p => p.remove());
  }, []);

  // Animaciones GSAP
  useEffect(() => {
    // Animación del logo
    gsap.from(".about-logo", {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      delay: 0.4
    });

    // Animación de las tarjetas de estadísticas
    statsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: i * 0.15
      });
    });

    // Animación de las barras de progreso
    progressBarsRef.current.forEach((bar, i) => {
      gsap.from(bar, {
        scrollTrigger: {
          trigger: bar,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        strokeDashoffset: 440,
        duration: 2,
        ease: "elastic.out(1, 0.5)",
        delay: i * 0.2
      });
    });

    // Efecto parallax para el fondo
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });
  }, []);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.02,
      boxShadow: `0 20px 25px -5px ${colors.primary}`,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    tap: { scale: 0.98 }
  };

  const statCards = [
    {
      title: "Educación",
      percentage: 75,
      description: "Los estudiantes retienen hasta el 75% cuando practican haciendo.",
      icon: <FaGraduationCap className="text-3xl" style={{ color: colors.highlight }} />,
      color: colors.primary
    },
    {
      title: "Capacitación Corporativa",
      percentage: 94,
      description: "94% de empleados permanecerían más con desarrollo profesional.",
      icon: <FaChartLine className="text-3xl" style={{ color: colors.highlight }} />,
      color: colors.secondary
    },
    {
      title: "Educación Temprana",
      percentage: 30,
      description: "Mejora del 30% en habilidades cognitivas con apps interactivas.",
      icon: <FaChild className="text-3xl" style={{ color: colors.highlight }} />,
      color: colors.accent
    }
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen overflow-hidden relative"
      style={{ backgroundColor: colors.darkBg }}
    >
      {/* Fondo de partículas */}
      <div className="particles-container fixed inset-0 w-full h-full pointer-events-none" />

      {/* Efecto de gradiente parallax */}
      <div
        className="parallax-bg absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${colors.primary}, transparent 70%)`
        }}
      />

      <Header />

      <main className="relative z-10 px-6 py-16 md:px-12 lg:px-24 space-y-20">
        {/* Sección Hero */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center space-y-10"
        >
          <motion.div variants={itemVariants}>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`
              }}
            >
              Reinventando la Educación
            </motion.h1>

            <motion.div
              className="w-40 h-40 md:w-52 md:h-52 mx-auto about-logo"
              whileHover={{ rotate: 5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={LogoP}
                alt="SkillForge Logo"
                className="w-full h-full object-contain rounded-full border-4"
                style={{ borderColor: colors.primary }}
              />
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-xl leading-relaxed"
            style={{ color: colors.lightText }}
          >
            En <span className="font-bold" style={{ color: colors.highlight }}>SkillForge</span>, fusionamos tecnología y pedagogía para crear experiencias de aprendizaje que transforman organizaciones e instituciones educativas.
          </motion.p>
        </motion.section>

        {/* Sección de Estadísticas con Efecto 3D */}
        <section className="space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center"
            style={{ color: colors.lightText }}
          >
            Impacto <span style={{ color: colors.highlight }}>Comprobado</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statCards.map((stat, index) => (
              <motion.div
                key={index}
                ref={el => statsRef.current[index] = el}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                whileHover={cardHover.hover}
                whileTap={cardHover.tap}
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{
                  backgroundColor: colors.cardBg,
                  border: `2px solid ${stat.color}`
                }}
              >
                {/* Efecto de acento */}
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: stat.color }}
                />

                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center"
                       style={{ backgroundColor: `${stat.color}20` }}>
                    {stat.icon}
                  </div>

                  <h3 className="text-2xl font-bold" style={{ color: colors.lightText }}>
                    {stat.title}
                  </h3>

                  <div className="w-40 h-40 relative">
                    <div
                      ref={el => progressBarsRef.current[index] = el}
                      className="absolute inset-0"
                    >
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <path
                          d="M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90"
                          fill="none"
                          strokeWidth="8"
                          strokeLinecap="round"
                          stroke={stat.color}
                          strokeDasharray="283"
                          strokeDashoffset="283"
                          style={{
                            strokeDashoffset: `${283 - (283 * stat.percentage / 100)}`
                          }}
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold" style={{ color: colors.lightText }}>
                        {stat.percentage}%
                      </span>
                    </div>
                  </div>

                  <p className="text-lg" style={{ color: colors.lightText }}>
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sección de Enfoque con Efecto de Cristal */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 rounded-3xl"
          style={{
            backgroundColor: colors.cardBg,
            border: `2px solid ${colors.primary}`,
            boxShadow: `0 8px 32px ${colors.primary}`
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: colors.lightText }}
          >
            Nuestra <span style={{ color: colors.highlight }}>Metodología</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.secondary}`
              }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: colors.highlight }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: `${colors.secondary}20` }}>
                  <FaGraduationCap style={{ color: colors.secondary }} />
                </span>
                Aprendizaje Adaptativo
              </h3>
              <p className="text-lg" style={{ color: colors.lightText }}>
                Plataformas que se ajustan al ritmo de cada estudiante, utilizando IA para identificar fortalezas y áreas de mejora en tiempo real.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl relative overflow-hidden"
              style={{
                backgroundColor: colors.cardBg,
                border: `2px solid ${colors.accent}`
              }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center" style={{ color: colors.highlight }}>
                <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: `${colors.accent}20` }}>
                  <FaChartLine style={{ color: colors.accent }} />
                </span>
                Tecnología Inmersiva
              </h3>
              <p className="text-lg" style={{ color: colors.lightText }}>
                Realidad Virtual y Aumentada para simulaciones prácticas que mejoran la retención del conocimiento hasta en un 80%.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Llamado a la acción con efecto neón */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: colors.lightText }}
          >
            ¿Listo para transformar tu organización?
          </motion.h3>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 15px ${colors.primary}`
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-full text-lg font-bold relative overflow-hidden"
            style={{
              backgroundColor: colors.primary,
              color: 'white'
            }}
          >
            <span className="relative z-10">Contáctanos Ahora</span>
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20"
              style={{ transform: 'translateX(-100%)' }}
            />
          </motion.button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default About;
