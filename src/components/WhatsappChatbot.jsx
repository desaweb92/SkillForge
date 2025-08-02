import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const number = "3001323402"; // Número prellenado
  const [message, setMessage] = useState("Hola, ¿en qué podemos ayudarte hoy? - Equipo de SkillForge"); // Mensaje predeterminado

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://app-skillforge-whatsapp.herokuapp.com/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ number, message }),
      });
      if (response.ok) {
        alert("Mensaje enviado!");
        setMessage("Hola, ¿en qué podemos ayudarte hoy? - Equipo de SkillForge"); // Restablecer el mensaje predeterminado
        setIsOpen(false);
      } else {
        alert("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* Botón flotante de WhatsApp */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300 ease-in-out"
        aria-label="WhatsApp"
      >
        <FaWhatsapp size={28} />
      </button>

      {/* Ventana flotante del chatbot */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-72 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-fade-in-down">
          <h4 className="text-lg font-bold mb-2 text-[#075e54]">¿En qué te ayudamos?</h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <textarea
              placeholder="Escribe tu mensaje..."
              className="border border-gray-300 rounded-md px-3 py-2 text-sm h-20 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-500 text-white rounded-md py-2 font-semibold hover:bg-green-600 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default WhatsappChatbot;
