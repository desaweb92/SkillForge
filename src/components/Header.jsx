import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Cerrar el menú móvil al navegar
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
    if (openMenu !== menu) {
      setOpenSubMenu(null);
    }
  };

  const toggleSubMenu = (subMenu) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="z-20 bg-[#820000] text-white p-2 shadow-lg flex justify-between items-center py-4 font-semibold relative">
      <div className="flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-white text-2xl md:hidden"
        >
          <FaBars />
        </button>
        <div className="flex flex-col items-center justify-center mb-2">
          <img className="w-[30%]" src="/src/assets/images/Logo_header.png" alt="" />
          <h1 className="text-[16px] font-bold text-white px-4 py-1 rounded-full">
            SkillForge
          </h1>
        </div>
      </div>

      <ul className={` fixed inset-0 flex flex-col justify-center items-center space-y-4 bg-[#820000] md:static md:flex-row md:space-y-0 md:space-x-2 md:bg-transparent transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <li className="relative group w-[90%] md:w-auto">
          <button
            onClick={() => handleNavigation("/")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0 w-full"
          >
            Inicio
          </button>
        </li>
        <li className="relative group w-[90%] md:w-auto">
          <button
            onClick={() => toggleMenu("servicios")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0 w-full"
          >
            Nuestros Servicios
          </button>
          {openMenu === "servicios" && (
            <ul className="flex flex-col justify-center items-center space-y-2 mt-2 md:absolute md:bg-[#820000] md:text-center md:text-white md:mt-2 md:p-2 md:space-y-1 md:rounded-full md:shadow-lg md:border-t-4 md:border-[#6B0000] md:flex-row">
              <li className="relative group w-full">
                <button
                  onClick={() => handleNavigation("/courses")}
                  className="text-center w-full px-4 py-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-2 active:border-b-0 active:border-l-0"
                >
                  Cursos
                </button>
              </li>
             
              <li className="p-2 rounded-full text-center bg-[#820000] md:hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full mx-2">
                Juegos y actividades interactivas
              </li>
              <li className="relative group w-full">
                <button
                  onClick={() => toggleSubMenu("serviciosadicionales")}
                  className="text-center w-full px-4 py-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-2 active:border-b-0 active:border-l-0"
                >
                  Servicios adicionales
                </button>
                {openSubMenu === "serviciosadicionales" && (
                  <ul className="flex flex-col justify-center items-center space-y-2 mt-2 md:absolute md:bg-[#820000] md:text-center md:text-white md:mt-2 md:p-2 md:space-y-1 md:rounded-full md:shadow-lg md:border-t-4 md:border-[#6B0000] md:flex-row">
                    <li className="p-2 rounded-full text-center md:hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full md:mx-2">
                      Consultoria especializada
                    </li>
                    <li className="p-2 rounded-full text-center md:hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full md:mx-2">
                      Desarrollo de contenidos personalizados
                    </li>
                    <li className="p-2 rounded-full text-center md:hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full md:mx-2">
                      Evaluaciones y certificaciones
                    </li>
                    <li className="p-2 rounded-full text-center md:hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full md:mx-2">
                      Juegos y actividades interactivas
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li className="relative group w-[90%] md:w-auto">
          <button
            onClick={() => toggleMenu("recursos")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0 w-full"
          >
            Recursos
          </button>
          {openMenu === "recursos" && (
            <ul className="flex flex-col justify-center items-center space-y-2 mt-2 md:absolute md:bg-[#820000] md:text-center md:text-white md:mt-2 md:p-2 md:space-y-1 md:rounded-full md:shadow-lg md:border-t-4 md:border-[#6B0000] md:flex-row">
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full md:mx-2 text-center">
                <button onClick={() => handleNavigation("/blog")}>Blog</button>
              </li>
              <li className="p-2 rounded-full hover:bg-[#BC0000] border-b-2 border-l-2 border-[#CD7F32] w-full md:mx-2 text-center">
                <button onClick={() => handleNavigation("/faq")}>FAQ</button>
              </li>
            </ul>
          )}
        </li>
        <li className="relative group w-[90%] md:w-auto">
          <button
            onClick={() => handleNavigation("/about")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0 w-full"
          >
            Sobre nosotros
          </button>
        </li>
        <li className="relative group w-[90%] md:w-auto">
          <button
            onClick={() => handleNavigation("/contact")}
            className="text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-2 border-[#CD7F32] active:bg-[#820000] active:border-t-2 active:border-b-0 w-full"
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
