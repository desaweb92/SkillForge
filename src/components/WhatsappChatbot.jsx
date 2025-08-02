import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { gsap } from "gsap";

const WhatsappChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const number = "3001323402";
  const [message, setMessage] = useState("Hola, ¿en qué podemos ayudarte hoy? - Equipo de SkillForge");

  // Animación de burbuja flotante
  useEffect(() => {
    if (!isOpen) {
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(".whatsapp-bubble", {
        y: -5,
        duration: 1.5,
        ease: "sine.inOut"
      });
      return () => tl.kill();
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (isSent) setIsSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    
    try {
      const response = await fetch("https://app-skillforge-whatsapp.herokuapp.com/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number, message }),
      });
      
      if (response.ok) {
        setIsSent(true);
        setTimeout(() => {
          setIsOpen(false);
          setIsSent(false);
          setMessage("Hola, ¿en qué podemos ayudarte hoy? - Equipo de SkillForge");
        }, 1500);
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión");
    } finally {
      setIsSending(false);
    }
  };

  // Variantes de animación
  const chatWindowVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const successVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500
      }
    }
  };

  return (
    <>
      {/* Botón flotante de WhatsApp con animación */}
      <motion.button
        onClick={toggleChat}
        className={`whatsapp-bubble fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl ${isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-[#25D366] hover:bg-[#128C7E]'} text-white transition-colors duration-300`}
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat de WhatsApp"}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={24} />}
      </motion.button>

      {/* Ventana de chat con animaciones */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100"
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header del chat */}
            <div className="bg-[#075e54] p-4 flex items-center">
              <div className="bg-white p-2 rounded-full mr-3">
                <FaWhatsapp size={20} className="text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-white font-bold">SkillForge Support</h4>
                <p className="text-xs text-white/80">Normalmente responde en minutos</p>
              </div>
            </div>

            {/* Contenido del chat */}
            <div className="p-4">
              {isSent ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-8"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <FaWhatsapp size={24} className="text-[#25D366]" />
                  </div>
                  <h5 className="font-bold text-lg text-gray-800">¡Mensaje enviado!</h5>
                  <p className="text-sm text-gray-500 text-center mt-1">
                    Nos pondremos en contacto contigo pronto por WhatsApp
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-700">
                      {message || "Escribe tu mensaje y te responderemos por WhatsApp"}
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <textarea
                      placeholder="Escribe tu mensaje aquí..."
                      className="border border-gray-300 rounded-lg px-4 py-3 text-sm h-24 resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent transition"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                    
                    <motion.button
                      type="submit"
                      className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg py-3 font-medium transition-colors disabled:opacity-70"
                      whileTap={{ scale: 0.98 }}
                      disabled={isSending}
                    >
                      {isSending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar por WhatsApp <FiSend />
                        </>
                      )}
                    </motion.button>
                  </form>
                  
                  <p className="text-xs text-gray-400 text-center mt-2">
                    Al enviar, serás redirigido a WhatsApp
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsappChatbot;