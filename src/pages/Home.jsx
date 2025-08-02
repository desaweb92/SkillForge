import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/Header";
import Footer from "../components/Footer";
import seguridad from "../assets/images/Seguridad.jpg";
import trabajo from "../assets/images/Trabajo.jpg";
import {
  FiArrowRight,
  FiCheckCircle,
  FiGlobe,
  FiTrendingUp,
  FiShield,
  FiUsers,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRefs = useRef([]);
  const heroRef = useRef(null);
  const [activeService, setActiveService] = useState(0);

  // Servicios interactivos
  const services = [
    {
      title: "Realidad Virtual",
      description:
        "Entrenamientos inmersivos con tecnología VR para máxima retención",
      icon: <FiGlobe className="text-3xl" />,
    },
    {
      title: "Gamificación",
      description: "Aprendizaje basado en juegos para mayor engagement",
      icon: <FiTrendingUp className="text-3xl" />,
    },
    {
      title: "Seguridad Interactiva",
      description: "Simulaciones realistas de situaciones de riesgo",
      icon: <FiShield className="text-3xl" />,
    },
    {
      title: "Equipos Remotos",
      description: "Soluciones para formación de equipos distribuidos",
      icon: <FiUsers className="text-3xl" />,
    },
  ];

  useEffect(() => {
    // Animación de partículas
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full bg-purple-500/20";
      particle.style.width = `${Math.random() * 10 + 5}px`;
      particle.style.height = particle.style.width;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;

      gsap.to(particle, {
        x: `${Math.random() * 100 - 50}px`,
        y: `${Math.random() * 100 - 50}px`,
        duration: Math.random() * 15 + 10,
        repeat: -1,
        yoyo: true,
      });

      document.querySelector(".particles-container").appendChild(particle);
      particles.push(particle);
    }

    // Animación hero
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3,
    });

    // Efecto parallax 3D
    gsap.to(".parallax-img", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      y: 50,
      rotateY: 5,
      scale: 1.03,
      ease: "none",
    });

    // Rotación automática de servicios
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => {
      particles.forEach((p) => p.remove());
      clearInterval(interval);
    };
  }, []);

  // Variantes de animación
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.8, 0.4, 1],
      },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.03,
      boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gradient-to-b  from-gray-50 to-white text-gray-900 min-h-screen font-sans overflow-x-hidden">
      {/* Fondo de partículas */}
      <div className="particles-container fixed inset-0 w-full h-full pointer-events-none" />

      <Header />

      <main className="px-6 py-12 mt-10 md:px-12 lg:px-24 space-y-28">
        {/* Hero Section - Diseño futurista */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh] w-full">
          {/* Columna izquierda - Contenido principal */}
          <div className="space-y-8 relative z-20">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                Innovación en formación
              </span>
            </div>
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl  font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Revolucionamos la
              </span>{" "}
              <span className="text-purple-600">formación corporativa</span>
            </h1>
            {/* Descripción */}
            <p className="text-xl text-gray-600 max-w-lg text-justify">
              Con tecnología de vanguardia y metodologías innovadoras,
              transformamos la manera en que las empresas capacitan a sus
              equipos.
            </p>
            {/* Botones */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-medium shadow-lg flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                Explorar soluciones <FiArrowRight />
              </button>

              <button className="px-8 py-4 bg-white hover:border-purple-600 text-purple-600 border border-gray-200 rounded-full text-lg font-medium shadow-sm flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
                Ver demostración
              </button>
            </div>
          </div>
          {/* Columna derecha - Imagen */}
          <div className="relative w-full h-full">
            <div className="absolute -inset-8 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl rotate-2 scale-95 opacity-20"></div>
            <img
              src={seguridad}
              alt="Formación innovadora"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />

            {/* Elemento flotante (sin animación de opacidad) */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                <FiCheckCircle className="text-3xl text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900">+85% retención</h3>
              <p className="text-sm text-gray-500">con nuestros métodos</p>
            </div>
          </div>
        </section>

        {/* Servicios interactivos */}
        <section className="relative">
          <div className="absolute -left-20 top-1/2 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-center mb-16"
            >
              Nuestras <span className="text-purple-600">Soluciones</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={cardHover.hover}
                  onClick={() => setActiveService(index)}
                  className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? "bg-white shadow-xl border border-purple-100"
                      : "bg-gray-50 border border-gray-100"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                      activeService === index
                        ? "bg-purple-100 text-purple-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      activeService === index
                        ? "text-purple-600"
                        : "text-gray-800"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Panel de servicio activo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={activeService}
              className="mt-16 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-12 flex flex-col lg:flex-row gap-12 items-center"
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {services[activeService].title}
                </h3>
                <p className="text-xl text-gray-600 mb-8">
                  {services[activeService].description}
                </p>
                <ul className="space-y-4">
                  {[
                    "Tecnología de última generación",
                    "Contenido personalizable",
                    "Seguimiento de progreso",
                    "Certificaciones digitales",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <img
                  src={trabajo}
                  alt={services[activeService].title}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Estadísticas impactantes */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl text-white">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="px-8 text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold mb-16"
            >
              Nuestro Impacto en Cifras
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "95%", label: "Satisfacción clientes" },
                { value: "3x", label: "Retención mejorada" },
                { value: "120+", label: "Empresas confían" },
                { value: "4.9/5", label: "Valoración promedio" },
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants} className="p-6">
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA futurista */}
        <section className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-95"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative z-10 py-20 px-8 text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-white mb-6"
            >
              ¿Listo para transformar la formación en tu empresa?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-purple-100 max-w-2xl mx-auto mb-10"
            >
              Agenda una demostración personalizada y descubre cómo podemos
              ayudarte a alcanzar tus objetivos de capacitación.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#7C3AED",
                }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-purple-800 text-white rounded-full text-lg font-bold shadow-xl flex items-center gap-3 mx-auto"
              >
                Contactar a un experto <FiArrowRight />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
