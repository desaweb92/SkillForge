import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPaperPlane, 
  faPhone, 
  faEnvelope,
  faMapMarkerAlt,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Paleta de colores futurista
const colors = {
  primary: "#6C63FF",       // Púrpura vibrante
  secondary: "#00BFA6",     // Verde turquesa
  darkBg: "#1A1A2E",        // Fondo oscuro
  cardBg: "#16213E",        // Fondo tarjetas
  lightText: "#E6F7FF",     // Texto claro
  accent: "#FF6584"         // Rosa neón
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [activeTab, setActiveTab] = useState("form");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simular envío
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const tabVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
  };

  return (
    <div className="min-h-screen pt-6" style={{ backgroundColor: colors.darkBg }}>
      <Header />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        {/* Título con efecto especial */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16 relative"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: colors.lightText }}>
            Conecta con Nosotros
          </h1>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full" 
               style={{ background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary})` }} />
        </motion.div>

        {/* Selector de pestañas */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex rounded-full p-1" style={{ backgroundColor: colors.cardBg }}>
            <button
              onClick={() => setActiveTab("form")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "form" ? "text-white font-bold" : "text-gray-400"}`}
              style={activeTab === "form" ? { backgroundColor: colors.primary } : {}}
            >
              Envíanos un Mensaje
            </button>
            <button
              onClick={() => setActiveTab("info")}
              className={`px-6 py-2 rounded-full transition-all ${activeTab === "info" ? "text-white font-bold" : "text-gray-400"}`}
              style={activeTab === "info" ? { backgroundColor: colors.primary } : {}}
            >
              Nuestra Información
            </button>
          </div>
        </motion.div>

        {/* Contenido interactivo */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === "form" ? (
              <motion.div
                key="form"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: `1px solid ${colors.primary}30` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Ilustración animada */}
                  <div className="hidden lg:flex items-center justify-center p-8" style={{ backgroundColor: colors.cardBg }}>
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="300" height="300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" 
                              stroke={colors.primary} strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Formulario */}
                  <div className="p-8 lg:p-12">
                    {isSubmitted ? (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-8"
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0]
                          }}
                          transition={{ duration: 0.8 }}
                          className="inline-block mb-6"
                        >
                          <FontAwesomeIcon 
                            icon={faPaperPlane} 
                            className="text-6xl" 
                            style={{ color: colors.secondary }} 
                          />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2" style={{ color: colors.lightText }}>
                          ¡Mensaje Enviado!
                        </h3>
                        <p style={{ color: colors.lightText }}>
                          Nos pondremos en contacto contigo pronto.
                        </p>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="mt-6 px-6 py-2 rounded-full font-medium transition-all hover:scale-105"
                          style={{ 
                            backgroundColor: colors.primary,
                            color: 'white'
                          }}
                        >
                          Enviar otro mensaje
                        </button>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-3xl font-bold mb-6" style={{ color: colors.lightText }}>
                          Háblanos de tu proyecto
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                          <motion.div variants={itemVariants}>
                            <input
                              type="text"
                              name="name"
                              placeholder="Nombre completo"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                              style={{ 
                                color: colors.lightText,
                                focusRingColor: colors.primary
                              }}
                              required
                            />
                          </motion.div>
                          
                          <motion.div variants={itemVariants}>
                            <input
                              type="email"
                              name="email"
                              placeholder="Correo electrónico"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                              style={{ color: colors.lightText }}
                              required
                            />
                          </motion.div>
                          
                          <motion.div variants={itemVariants}>
                            <input
                              type="text"
                              name="subject"
                              placeholder="Asunto"
                              value={formData.subject}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                              style={{ color: colors.lightText }}
                              required
                            />
                          </motion.div>
                          
                          <motion.div variants={itemVariants}>
                            <textarea
                              name="message"
                              placeholder="Tu mensaje..."
                              value={formData.message}
                              onChange={handleChange}
                              rows="5"
                              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-white border-opacity-20 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all"
                              style={{ color: colors.lightText }}
                              required
                            ></textarea>
                          </motion.div>
                          
                          <motion.div variants={itemVariants}>
                            <motion.button
                              type="submit"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.98 }}
                              className="w-full px-6 py-3 rounded-full font-bold flex items-center justify-center space-x-2 transition-all"
                              style={{ 
                                backgroundColor: colors.primary,
                                color: 'white'
                              }}
                            >
                              <span>Enviar Mensaje</span>
                              <FontAwesomeIcon icon={faPaperPlane} />
                            </motion.button>
                          </motion.div>
                        </form>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="info"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Tarjeta de información */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl shadow-2xl"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.primary}30`
                  }}
                >
                  <h2 className="text-2xl font-bold mb-6" style={{ color: colors.lightText }}>
                    Información de Contacto
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <FontAwesomeIcon 
                          icon={faPhone} 
                          className="text-xl" 
                          style={{ color: colors.secondary }} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: colors.lightText }}>Teléfono</h3>
                        <p style={{ color: colors.lightText }}>+91-40-30-133-133</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <FontAwesomeIcon 
                          icon={faEnvelope} 
                          className="text-xl" 
                          style={{ color: colors.secondary }} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: colors.lightText }}>Email</h3>
                        <p style={{ color: colors.lightText }}>support@wavni.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <FontAwesomeIcon 
                          icon={faMapMarkerAlt} 
                          className="text-xl" 
                          style={{ color: colors.secondary }} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: colors.lightText }}>Ubicación</h3>
                        <p style={{ color: colors.lightText }}>Av. Innovación 123, Ciudad Tecnológica</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <FontAwesomeIcon 
                          icon={faClock} 
                          className="text-xl" 
                          style={{ color: colors.secondary }} 
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold" style={{ color: colors.lightText }}>Horario</h3>
                        <p style={{ color: colors.lightText }}>Lunes a Viernes: 9am - 6pm</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Tarjeta de redes sociales */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl shadow-2xl flex flex-col justify-between"
                  style={{ 
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.primary}30`
                  }}
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-6" style={{ color: colors.lightText }}>
                      Síguenos en Redes
                    </h2>
                    <p className="mb-8" style={{ color: colors.lightText }}>
                      Conéctate con nosotros para estar al día con nuestras últimas noticias y actualizaciones.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { name: 'facebook', color: '#1877F2' },
                      { name: 'linkedin', color: '#0A66C2' },
                      { name: 'instagram', color: '#E4405F' },
                      { name: 'twitter', color: '#1DA1F2' },
                      { name: 'tiktok', color: '#000000' },
                      { name: 'youtube', color: '#FF0000' }
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={`https://www.${social.name}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center justify-center p-4 rounded-xl transition-all"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <img 
                          src={`/src/assets/images/${social.name}.png`} 
                          alt={social.name} 
                          className="w-8 h-8"
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default Contact;