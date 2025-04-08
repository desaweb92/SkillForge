import React, { useState } from "react";
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LogoH from "../assets/images/Logo_header.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setOpenMenu(null);
      setOpenSubMenu(null);
    }, 100); // Retraso de 100 ms antes de cerrar el menú
  };

  const handleSubMenuMouseEnter = (subMenu) => {
    setOpenSubMenu(subMenu);
  };

  const handleSubMenuMouseLeave = () => {
    setTimeout(() => {
      setOpenSubMenu(null);
    }, 100); // Retraso de 100 ms antes de cerrar el submenú
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mt-2 mx-2">
      <div className="bg-black opacity-90 rounded-full absolute inset-0"></div>
      <div className="container mx-auto flex justify-between items-center py-2 px-4 relative z-10">
        <div className="flex items-center space-x-4 ml-2">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl md:hidden"
          >
            <FaBars />
          </button>
          <img className="w-10 h-10" src={LogoH} alt="Logo" />
        </div>
        <ul
          className={`fixed inset-0 flex flex-col justify-center items-center space-y-4 bg-black md:static md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <li className="relative group">
            <button
              onClick={() => handleNavigation("/")}
              className="text-white hover:text-[#A22BFF] px-4 py-2 rounded-md"
            >
              Inicio
            </button>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("servicios")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-white hover:text-[#A22BFF] px-4 py-2 rounded-md flex items-center"
            >
              Nuestros Servicios
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openMenu === "servicios" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openMenu === "servicios" && (
              <ul
                className="flex flex-col space-y-2 mt-2 md:absolute bg-[#000000] md:shadow-lg md:rounded-md md:p-4 md:space-y-1 transition-opacity duration-300 opacity-100"
                onMouseEnter={() => handleMouseEnter("servicios")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <button
                    onClick={() => handleNavigation("/courses")}
                    className="text-white hover:text-[#A22BFF] hover:bg-[#161515] px-4 py-2 rounded-md"
                  >
                    Desarrollo web (landings/páginas)
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/courses")}
                    className="text-white hover:text-[#A22BFF] hover:bg-[#161515] px-4 py-2 rounded-md"
                  >
                    Contenidos personalizados
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/courses")}
                    className="text-white hover:text-[#A22BFF] hover:bg-[#161515] px-4 py-2 rounded-md"
                  >
                    Evaluaciones y certificaciones
                  </button>
                </li>
                <li
                  onMouseEnter={() => handleSubMenuMouseEnter("serviciosadicionales")}
                  onMouseLeave={handleSubMenuMouseLeave}
                >
                  <button
                    className="text-white hover:text-white px-4 py-2 rounded-md flex items-center"
                  >
                    Servicios adicionales
                    <FaChevronDown
                      className={`ml-1 transition-transform duration-300 ${
                        openSubMenu === "serviciosadicionales" ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {openSubMenu === "serviciosadicionales" && (
                    <ul
                      className="text-white flex flex-col space-y-2 mt-2 md:absolute md:bg-[#000000] md:shadow-lg md:rounded-md md:p-4 md:space-y-1 transition-opacity duration-300 opacity-100"
                      onMouseEnter={() => handleSubMenuMouseEnter("serviciosadicionales")}
                      onMouseLeave={handleSubMenuMouseLeave}
                    >
                      <li className="px-4 py-2 rounded-md hover:bg-[#161515] hover:text-[#A22BFF]">
                        Diseño instruccional de cursos virtuales
                      </li>
                      <li className="px-4 py-2 rounded-md hover:bg-[#161515] hover:text-[#A22BFF]">
                        Automatización de procesos educativos
                      </li>
                      <li className="px-4 py-2 rounded-md hover:bg-[#161515] hover:text-[#A22BFF]">
                        Mantenimiento y soporte web mensual
                      </li>
                      <li className="px-4 py-2 rounded-md hover:bg-[#161515] hover:text-[#A22BFF]">
                        Diseño de marca y contenido visual
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => handleMouseEnter("recursos")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="text-white hover:text-[#A22BFF] px-4 py-2 rounded-md flex items-center"
            >
              Recursos
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${
                  openMenu === "recursos" ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openMenu === "recursos" && (
              <ul
                className="text-white flex flex-col space-y-2 mt-2 md:absolute md:bg-[#000000] md:shadow-lg md:rounded-md md:p-4 md:space-y-1 transition-opacity duration-300 opacity-100"
                onMouseEnter={() => handleMouseEnter("recursos")}
                onMouseLeave={handleMouseLeave}
              >
                <li>
                  <button
                    onClick={() => handleNavigation("/blog")}
                    className="text-white hover:text-[#A22BFF] hover:bg-[#161515] px-4 py-2 rounded-md"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/faq")}
                    className="text-white hover:text-[#A22BFF] hover:bg-[#161515] px-4 py-2 rounded-md"
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
              className="text-white hover:text-[#A22BFF] px-4 py-2 rounded-md"
            >
              Sobre nosotros
            </button>
          </li>
          <li className="relative group">
            <button
              onClick={() => handleNavigation("/contact")}
              className="text-white hover:text-[#A22BFF] px-4 py-2 rounded-md"
            >
              Contacto
            </button>
          </li>
        </ul>

        <div className="relative md:max-w-md w-[50%] pr-3 md:pr-0">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearch}
            className="px-4 py-2 rounded-full pl-10 w-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#A22BFF] bg-[#000000] text-white placeholder:text-white"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
