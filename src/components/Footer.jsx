import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del correo electrónico
    console.log("Email submitted:", email);
    setEmail(""); // Limpiar el campo después de enviar
  };

  return (
    <footer className="bg-[#820000] text-[#333333] py-4">
      <div className="container mx-auto px-4 space-y-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-[25px] text-center font-bold text-[#CD7F32]">
              Sobre Nosotros
            </h3>
            <p className="text-white text-justify text-[14px]">
              En SkillForge, estamos comprometidos con empoderar a las
              organizaciones mediante la entrega de programas de formación
              innovadores y personalizados.
            </p>
           
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-[25px] text-center  font-bold text-[#CD7F32]">Explora más</h3>
            <ul className="space-y-2 flex flex-col items-center justify-center text-[14px]">
              <li>
                <a href="/contacto" className="text-white hover:underline">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="/cursos" className="text-white hover:underline">
                  Nuestros Cursos
                </a>
              </li>
              <li>
                <a href="/demo" className="text-white hover:underline">
                  Solicita una Demostración
                </a>
              </li>
            </ul>
            <span className="font-semibold flex items-center justify-center my-3">
                <img className="mx-2 w-[25px]" src="/src/assets/images/facebook.png" alt="" />
                <img className="mx-2 w-[25px]" src="/src/assets/images/linkedin.png" alt="" />
                <img className="mx-2 w-[25px]" src="/src/assets/images/tiktok.png" alt="" />
              </span>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-[25px] text-center font-bold text-[#CD7F32]">
              Mantente Informado
            </h3>
            <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico"
                className="w-full px-4 py-2 border placeholder:text-center border-[#CD7F32] rounded-full focus:outline-none text-[14px]"
                required
              />
              <button
                type="submit"
                className="w-[50%]  px-4 py-2 text-[14px] bg-[#BC0000] text-white rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0"
              >
                Solicita mas información
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center border-t border-[#F5F5F5] pt-2">
          <div className="text-[12px] text-white">
            © {new Date().getFullYear()} SkillForge. Todos los derechos
            reservados.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-[#FF4500]">
              <span className="sr-only">Facebook</span>
              {/* Icono de Facebook */}
            </a>
            <a href="#" className="text-white hover:text-[#FF4500]">
              <span className="sr-only">Twitter</span>
              {/* Icono de Twitter */}
            </a>
            <a href="#" className="text-white hover:text-[#FF4500]">
              <span className="sr-only">LinkedIn</span>
              {/* Icono de LinkedIn */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
