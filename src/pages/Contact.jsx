import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCircleRight, faMobileScreenButton, faSquareEnvelope  } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    contactNumber: '',
    email: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#FFFACD] text-[#333333] min-h-screen ">
      <Header />
    <div className="w-full flex flex-col items-center justify-center ">
      
      <div className="w-full max-w-[800px] p-6 bg-white rounded-lg shadow-lg my-4 flex flex-col items-center justify-between">
        <div className="w-full md:w-[70%] p-4 border-r md:border-r-0">
          <h1 className="text-[25px] text-center font-bold text-[#820000] mb-6">Contáctanos</h1>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-black font-bold">Nombre:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD7F32]"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-black font-bold">Empresa o persona natural:</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD7F32]"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="empresa">Empresa</option>
                  <option value="persona">Persona Natural</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-black font-bold">Número de contacto:</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD7F32]"
                required
              />
            </div>
            <div>
              <label className="block text-black font-bold">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD7F32]"
                required
              />
            </div>
            <div>
              <label className="block text-black font-bold">Comentarios:</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#CD7F32]"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="relative w-full md:w-[30%] px-4 py-2 mt-4 text-white bg-[#BC0000] rounded-full hover:bg-[#820000] focus:outline-none focus:ring-2 focus:ring-[#CD7F32] flex items-center justify-center"
            >
              Enviar 
              <span className="absolute right-4 transition-transform duration-300"><FontAwesomeIcon icon={faCircleRight} /></span>
            </button>
          </form>
        </div>
        <div className="w-full md:w-[50%] p-4 bg-[#F5F5F5] rounded-lg hidden my-2 md:flex flex-col items-center justify-center">
          <h2 className="text-[16px] font-bold text-[#8B0000] mb-4">Información de Contacto</h2>
          <p className="text-black mt-2">
            <span className="font-semibold"><span className="mx-2"><FontAwesomeIcon icon={faMobileScreenButton} /></span>Teléfono:</span> +91-40-30-133-133
          </p>
          <p className="text-black mt-2">
            <span className="font-semibold"><span className="mx-2"><FontAwesomeIcon icon={faSquareEnvelope } /></span> Email:</span> support@wavni.com
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.facebook.com" className="text-[#8B0000] hover:text-[#FF4500]">
              <span className="sr-only">Facebook</span>
              {/* Icono de Facebook */}
            </a>
            <a href="https://www.twitter.com" className="text-[#8B0000] hover:text-[#FF4500]">
              <span className="sr-only">Twitter</span>
              {/* Icono de Twitter */}
            </a>
            <a href="https://www.linkedin.com" className="text-[#8B0000] hover:text-[#FF4500]">
              <span className="sr-only">LinkedIn</span>
              {/* Icono de LinkedIn */}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default Contact;
