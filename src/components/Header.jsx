import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import LogoH from "../assets/images/Logo_header.png";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const headerRef = useRef();
  const logoRef = useRef();
  const searchRef = useRef();

  // Función mejorada para alternar el menú móvil
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? "hidden" : "auto";
  };

  // Cerrar menú móvil al navegar
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    gsap.from(logoRef.current, {
      scale: 0,
      rotation: 180,
      duration: 0.8,
      delay: 0.3,
      ease: "back.out(1.7)"
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.addEventListener("focus", () => {
        gsap.to(searchRef.current, {
          width: "100%",
          duration: 0.3,
          ease: "power2.out"
        });
      });
      searchRef.current.addEventListener("blur", () => {
        if (window.innerWidth >= 768) {
          gsap.to(searchRef.current, {
            width: "200px",
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }
  }, []);

  const handleNavigation = (path) => {
    gsap.to(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        navigate(path);
        closeMobileMenu();
        gsap.to(headerRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.3
        });
      }
    });
  };

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSubMenuClick = (subMenu) => {
    setOpenSubMenu(openSubMenu === subMenu ? null : subMenu);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0 }
  };

  return (
    <motion.nav
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 z-index ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white text-2xl md:hidden focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <motion.div
              ref={logoRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation("/")}
              className="cursor-pointer"
            >
              <img className="w-12 h-12" src={LogoH} alt="Logo" />
            </motion.div>
          </div>

          <ul className="hidden md:flex items-center space-x-1">
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => handleNavigation("/")}
                className="text-white hover:text-purple-400 px-4 py-2 rounded-md transition-colors duration-300 font-medium"
              >
                Inicio
              </button>
            </motion.li>

            <motion.li
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleMenuClick("servicios")}
                className="text-white hover:text-purple-400 px-4 py-2 rounded-md flex items-center transition-colors duration-300 font-medium"
              >
                Nuestros Servicios
                <motion.div
                  animate={{
                    rotate: openMenu === "servicios" ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="ml-1" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openMenu === "servicios" && (
                  <motion.ul
                    className="servicios-menu absolute left-0 top-full mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                  >
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="border-b border-gray-700 last:border-b-0"
                    >
                      <button
                        onClick={() => handleNavigation("/courses")}
                        className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                      >
                        Desarrollo web (landings/páginas)
                      </button>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="border-b border-gray-700 last:border-b-0"
                    >
                      <button
                        onClick={() => handleNavigation("/courses")}
                        className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                      >
                        Contenidos personalizados
                      </button>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="border-b border-gray-700 last:border-b-0"
                    >
                      <button
                        onClick={() => handleNavigation("/courses")}
                        className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                      >
                        Evaluaciones y certificaciones
                      </button>
                    </motion.li>
                    <motion.li
                      className="relative border-b border-gray-700 last:border-b-0"
                      whileHover={{ x: 5 }}
                    >
                      <button
                        onClick={() => handleSubMenuClick("serviciosadicionales")}
                        className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left flex items-center justify-between transition-colors duration-300"
                      >
                        Servicios adicionales
                        <motion.div
                          animate={{
                            rotate: openSubMenu === "serviciosadicionales" ? 180 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown className="ml-1" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openSubMenu === "serviciosadicionales" && (
                          <motion.ul
                            className="serviciosadicionales-submenu absolute left-full top-0 ml-1 w-64 bg-gray-800 rounded-lg shadow-xl py-2 z-50"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                          >
                            <motion.li
                              whileHover={{ x: 5 }}
                              className="border-b border-gray-700 last:border-b-0"
                            >
                              <button
                                onClick={() => handleNavigation("/courses")}
                                className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                              >
                                Diseño instruccional de cursos virtuales
                              </button>
                            </motion.li>
                            <motion.li
                              whileHover={{ x: 5 }}
                              className="border-b border-gray-700 last:border-b-0"
                            >
                              <button
                                onClick={() => handleNavigation("/courses")}
                                className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                              >
                                Automatización de procesos educativos
                              </button>
                            </motion.li>
                            <motion.li
                              whileHover={{ x: 5 }}
                              className="border-b border-gray-700 last:border-b-0"
                            >
                              <button
                                onClick={() => handleNavigation("/courses")}
                                className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                              >
                                Mantenimiento y soporte web mensual
                              </button>
                            </motion.li>
                            <motion.li
                              whileHover={{ x: 5 }}
                              className="border-b border-gray-700 last:border-b-0"
                            >
                              <button
                                onClick={() => handleNavigation("/courses")}
                                className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                              >
                                Diseño de marca y contenido visual
                              </button>
                            </motion.li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => handleMenuClick("recursos")}
                className="text-white hover:text-purple-400 px-4 py-2 rounded-md flex items-center transition-colors duration-300 font-medium"
              >
                Recursos
                <motion.div
                  animate={{
                    rotate: openMenu === "recursos" ? 180 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="ml-1" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openMenu === "recursos" && (
                  <motion.ul
                    className="recursos-menu absolute left-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-xl py-2 z-50"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                  >
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="border-b border-gray-700 last:border-b-0"
                    >
                      <button
                        onClick={() => handleNavigation("/blog")}
                        className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                      >
                        Blog
                      </button>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="border-b border-gray-700 last:border-b-0"
                    >
                      <button
                        onClick={() => handleNavigation("/faq")}
                        className="text-white hover:text-purple-400 hover:bg-gray-700 px-4 py-3 w-full text-left transition-colors duration-300"
                      >
                        FAQ
                      </button>
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-white hover:text-purple-400 px-4 py-2 rounded-md transition-colors duration-300 font-medium"
              >
                Sobre nosotros
              </button>
            </motion.li>

            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => handleNavigation("/contact")}
                className="text-white hover:text-purple-400 px-4 py-2 rounded-md transition-colors duration-300 font-medium"
              >
                Contacto
              </button>
            </motion.li>
          </ul>

          <motion.div
            className="relative hidden md:block"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </div>
            <input
              ref={searchRef}
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearch}
              className="px-4 py-2 rounded-full pl-10 w-50 focus:w-64 transition-all duration-300 bg-gray-800 bg-opacity-70 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 pt-20 px-4 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="relative mb-8">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={handleSearch}
                className="px-4 py-3 rounded-full pl-10 w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>

            <ul className="space-y-4">
              <motion.li
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation("/")}
                className="text-white text-xl font-medium py-3 border-b border-gray-800"
              >
                Inicio
              </motion.li>

              <motion.li className="text-white text-xl font-medium py-3 border-b border-gray-800">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => handleMenuClick("servicios-mobile")}
                >
                  Nuestros Servicios
                  <motion.div
                    animate={{
                      rotate: openMenu === "servicios-mobile" ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openMenu === "servicios-mobile" && (
                    <motion.ul
                      className="pl-4 mt-2 space-y-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.li
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation("/courses")}
                        className="text-gray-300 py-2"
                      >
                        Desarrollo web (landings/páginas)
                      </motion.li>
                      <motion.li
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation("/courses")}
                        className="text-gray-300 py-2"
                      >
                        Contenidos personalizados
                      </motion.li>
                      <motion.li
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation("/courses")}
                        className="text-gray-300 py-2"
                      >
                        Evaluaciones y certificaciones
                      </motion.li>
                      <motion.li className="text-gray-300 py-2">
                        <button
                          className="flex items-center justify-between w-full"
                          onClick={() => handleSubMenuClick("serviciosadicionales-mobile")}
                        >
                          Servicios adicionales
                          <motion.div
                            animate={{
                              rotate:
                                openSubMenu === "serviciosadicionales-mobile" ? 180 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaChevronDown />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {openSubMenu === "serviciosadicionales-mobile" && (
                            <motion.ul
                              className="pl-4 mt-2 space-y-3"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.li
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleNavigation("/courses")}
                                className="text-gray-400 py-1"
                              >
                                Diseño instruccional de cursos virtuales
                              </motion.li>
                              <motion.li
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleNavigation("/courses")}
                                className="text-gray-400 py-1"
                              >
                                Automatización de procesos educativos
                              </motion.li>
                              <motion.li
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleNavigation("/courses")}
                                className="text-gray-400 py-1"
                              >
                                Mantenimiento y soporte web mensual
                              </motion.li>
                              <motion.li
                                whileTap={{ scale: 0.98 }}
                                onClick={() => handleNavigation("/courses")}
                                className="text-gray-400 py-1"
                              >
                                Diseño de marca y contenido visual
                              </motion.li>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              <motion.li className="text-white text-xl font-medium py-3 border-b border-gray-800">
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => handleMenuClick("recursos-mobile")}
                >
                  Recursos
                  <motion.div
                    animate={{
                      rotate: openMenu === "recursos-mobile" ? 180 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openMenu === "recursos-mobile" && (
                    <motion.ul
                      className="pl-4 mt-2 space-y-3"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.li
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation("/blog")}
                        className="text-gray-300 py-2"
                      >
                        Blog
                      </motion.li>
                      <motion.li
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleNavigation("/faq")}
                        className="text-gray-300 py-2"
                      >
                        FAQ
                      </motion.li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              <motion.li
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation("/about")}
                className="text-white text-xl font-medium py-3 border-b border-gray-800"
              >
                Sobre nosotros
              </motion.li>

              <motion.li
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation("/contact")}
                className="text-white text-xl font-medium py-3"
              >
                Contacto
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;