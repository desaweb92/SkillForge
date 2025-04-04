import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Personalizados from "./components/Personalizados";
import SeguridadSaludTrabajo from "./components/CursoBasico/SeguridadSaludTrabajo/SeguridadSaludTrabajo";
import Trabajo_en_alturas from "./components/CursoBasico/Trabajo_en_alturas/Trabajo_en_alturas";
import PrevencionIncendios from "./components/CursoBasico/PrevencionIncendios/PrevencionIncendios";
import SeguridadEquiposMaquinaria from "./components/CursoBasico/SeguridadEquiposMaquinaria/SeguridadEquiposMaquinaria";
import ManejoSustanciasPeligrosas from "./components/CursoBasico/ManejoSustanciasPeligrosas/ManejoSustanciasPeligrosas";
import ErgonomiaTrabajo from "./components/CursoBasico/ErgonomiaTrabajo/ErgonomiaTrabajo";
import SeguridadInformaticaCiberseguridad from "./components/CursoBasico/SeguridadInformaticaCiberseguridad/SeguridadInformaticaCiberseguridad";
import ConduccionSegura from "./components/CursoBasico/ConduccionSegura/ConduccionSegura";
import GestionEmergenciasEvacuacion from "./components/CursoBasico/GestionEmergenciasEvacuacion/GestionEmergenciasEvacuacion";
import SeguridadConstruccion from "./components/CursoBasico/SeguridadConstruccion/SeguridadConstruccion";
import ConsultoriaEspecializada from "./components/ConsultoriaEspecializada";
import DesarrolloContenidosPersonalizados from "./components/DesarrolloContenidosPersonalizados";
import EvaluacionesCertificaciones from "./components/EvaluacionesCertificaciones";
import JuegosActividadesInteractivas from "./components/JuegosActividadesInteractivas";
import Blog from "./components/Blog";
import Faq from "./components/Faq";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Personalizados" element={<Personalizados />} />
        <Route path="/SeguridadSaludTrabajo" element={<SeguridadSaludTrabajo />} />
        <Route path="/Trabajo_en_alturas" element={<Trabajo_en_alturas />} />
        <Route path="/PrevencionIncendios" element={<PrevencionIncendios />} />
        <Route path="/SeguridadEquiposMaquinaria" element={<SeguridadEquiposMaquinaria />} />
        <Route path="/ManejoSustanciasPeligrosas" element={<ManejoSustanciasPeligrosas />} />
        <Route path="/ErgonomiaTrabajo" element={<ErgonomiaTrabajo />} />
        <Route path="/SeguridadInformaticaCiberseguridad" element={<SeguridadInformaticaCiberseguridad />} />
        <Route path="/ConduccionSegura" element={<ConduccionSegura />} />
        <Route path="/GestionEmergenciasEvacuacion" element={<GestionEmergenciasEvacuacion />} />
        <Route path="/SeguridadConstruccion" element={<SeguridadConstruccion />} />
        <Route path="/ConsultoriaEspecializada" element={<ConsultoriaEspecializada />} />
        <Route path="/DesarrolloContenidosPersonalizados" element={<DesarrolloContenidosPersonalizados />} />
        <Route path="/EvaluacionesCertificaciones" element={<EvaluacionesCertificaciones />} />
        <Route path="/JuegosActividadesInteractivas" element={<JuegosActividadesInteractivas />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
