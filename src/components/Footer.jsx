import React, { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaEnvelope } from "react-icons/fa";
import WhatsappChatbot from "./WhatsappChatbot";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular envío exitoso
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1 - Sobre Nosotros */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Sobre Nosotros</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              En SkillForge, estamos comprometidos con empoderar a las organizaciones 
              mediante la entrega de programas de formación innovadores y personalizados.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Explora más</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/contacto" 
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                  Contáctanos
                </a>
              </li>
           
              <li>
                <a 
                  href="/demo" 
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                  Solicita una Demostración
                </a>
              </li>
              <li>
                <a 
                  href="/blog" 
                  className="text-gray-600 hover:text-gray-800 transition-colors text-sm flex items-center"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                  Blog Educativo
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Mantente Informado</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu correo electrónico"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-full transition-colors text-sm font-medium"
              >
                Suscríbete
              </button>
            </form>
            {isSubscribed && (
              <div className="text-sm text-green-600 text-center">
                ¡Gracias por suscribirte! Pronto recibirás nuestras novedades.
              </div>
            )}
            <p className="text-gray-500 text-xs text-center">
              Nunca compartiremos tu información. Respetamos tu privacidad.
            </p>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs text-gray-500 mb-2 md:mb-0">
              © {new Date().getFullYear()} SkillForge. Todos los derechos reservados.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-gray-700 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      <WhatsappChatbot />
    </footer>
  );
}

export default Footer;