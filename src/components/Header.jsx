import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    // Cerrar el submenú si se abre otro menú principal
    if (openMenu !== menu) {
      setOpenSubMenu(null);
    }
  };

  const toggleSubMenu = (subMenu) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Aquí puedes agregar lógica para manejar la búsqueda
  };

  return (
    <nav className="bg-[#820000] text-white p-2 shadow-lg flex justify-center items-center py-4 font-semibold ">
      <div className="flex items-center justify-center mb-2">
        <h1 className="text-[16px] font-bold bg-white text-[#820000] px-4 py-1 rounded-full">
          SkillForge
        </h1>
      </div>

      <ul className="w-full flex justify-center items-center space-x-2">
        <li className="relative group">
          <button
            onClick={() => handleNavigation("/")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0"
          >
            Inicio
          </button>
        </li>
        <li className="relative group">
          <button
            onClick={() => toggleMenu("cursos")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0"
          >
            Nuestros Cursos
          </button>
          {openMenu === "cursos" && (
            <ul className="absolute text-[16px] bg-[#820000] text-center text-white mt-2 p-2 space-y-1 rounded-full shadow-lg border-t-4 border-[#6B0000] flex justify-center items-center">
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full text-left">
                Básico
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full text-left">
                Mixto
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full text-left">
                Personalizado
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full text-left">
                Teórico
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full text-left">
                Práctico
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full text-left">
                Interactivo
              </li>
              <li className="relative group w-full mx-2">
                <button
                  onClick={() => toggleSubMenu("servicios")}
                  className="text-center w-full px-4 py-2 mx-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-2 active:border-b-0 active:border-l-0"
                >
                  Servicios adicionales
                </button>
                {openSubMenu === "servicios" && (
                  <ul className="absolute text-[16px] bg-[#820000] text-center text-white mt-2 p-2 space-y-1 rounded-xl shadow-lg border-t-4 border-[#6B0000] flex flex-col justify-center items-center ">
                    <li className="p-2 rounded-full text-center hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full">
                      Consultoria especializada
                    </li>
                    <li className="p-2 rounded-full text-center hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full">
                      Desarrollo de contenidos personalizados
                    </li>
                    <li className="p-2 rounded-full text-center hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full">
                      Evaluaciones y certificaciones
                    </li>
                    <li className="p-2 rounded-full text-center hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] mx-2 leading-5 w-full">
                      Juegos y actividades interactivas
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li className="relative group">
          <button
            onClick={() => toggleMenu("recursos")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0"
          >
            Recursos
          </button>
          {openMenu === "recursos" && (
            <ul className="absolute text-[16px] bg-[#820000] text-center text-white mt-2 p-2 space-y-1 rounded-full shadow-lg border-t-4 border-[#6B0000] flex justify-center items-center">
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2  border-[#CD7F32] mx-2 leading-5">
              <button
              onClick={() => handleNavigation("/blog")}
            >
              Blog
            </button>
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2  border-[#CD7F32] mx-2 leading-5">
              <button
              onClick={() => handleNavigation("/faq")}
            >
                FAQ
                </button>
              </li>
         
            </ul>
          )}
        </li>
        <li className="relative group">
            <button
              onClick={() => handleNavigation("/about")}
              className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0"
            >
              Sobre nosotros
            </button>
          </li>
          <li className="relative group">
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0"
            >
              Contacto
            </button>
          </li>
      </ul>
      <div className="w-[200px] flex justify-center mb-2 relative">
        <div className="relative w-full max-w-md">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 rounded-full pl-10 w-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
