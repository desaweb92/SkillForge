import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-800">
      <Header />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mt-8 text-[#CD7F32]"
      >
        Bienvenidos al Blog de SkillForge
      </motion.h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
      >
        <p className="text-black">
          En SkillForge, estamos comprometidos con la transformación de las
          organizaciones a través de la formación y el desarrollo profesional.
          Nuestro blog es un espacio donde compartimos conocimientos, tendencias
          y tecnologías que impulsan el aprendizaje corporativo.
        </p>
      </motion.section>

      <div className="flex justify-center items-center w-full my-4">
        <section className="max-w-xl mx-auto mt-8 space-y-6">
          <motion.article
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#CD7F32]">
              La personalización en el aprendizaje corporativo
            </h2>

            <p className="text-black">
              En SkillForge, entendemos que cada organización es única, al igual
              que sus necesidades de formación. Por eso, nos enorgullece ofrecer
              soluciones de aprendizaje altamente personalizadas que se adaptan
              a los objetivos y desafíos específicos de tu empresa.
            </p>
            <button
              onClick={() => handleAccordionClick(5)}
              className="text-center w-[30%] my-2 px-4 py-2 rounded-full bg-[#820000] text-white hover:bg-[#BC0000] border-b-4 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-4 active:border-b-0 active:border-l-0"
            >
             {activeIndex === 5 ? "Leer menos" : "Leer más"}
            </button>
            {activeIndex === 5 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-black overflow-hidden"
              >
                <strong className="text-[#CD7F32]">
                  <FontAwesomeIcon icon={faPencil} className="mr-2 text-[#CD7F32]" />
                  Personalización basada en datos:
                </strong>
                <p className="mb-2">
                  <strong>Evaluaciones iniciales:</strong> Realizamos
                  evaluaciones detalladas para identificar las brechas de
                  habilidades y áreas de mejora dentro de tu equipo. Esto nos
                  permite diseñar programas de formación que aborden necesidades
                  específicas y maximicen el impacto del aprendizaje.
                </p>

                <p className="mb-2">
                  <strong> Rutas de aprendizaje individualizadas:</strong>{" "}
                  Creamos rutas de aprendizaje personalizadas para cada
                  empleado, asegurando que reciban la formación adecuada en el
                  momento adecuado. Esto no solo mejora la eficiencia del
                  aprendizaje, sino que también aumenta la motivación y el
                  compromiso de los empleados.
                </p>

                <strong className="text-[#CD7F32]">
                  <FontAwesomeIcon icon={faPencil} className="mr-2 text-[#CD7F32]" />
                  Tecnología de vanguardia:
                </strong>
                <p className="mb-2">
                  <strong>Plataforma de aprendizaje adaptativa:</strong> Nuestra
                  plataforma utiliza algoritmos avanzados para adaptar el
                  contenido y la dificultad de los cursos según el progreso y
                  las necesidades individuales de cada estudiante. Esto
                  garantiza que cada empleado reciba una experiencia de
                  aprendizaje única y efectiva.
                </p>

                <p className="mb-2">
                  <strong>Análisis y reportes detallados:</strong>{" "}
                  Proporcionamos análisis detallados y reportes sobre el
                  progreso y el rendimiento de los empleados, permitiendo a los
                  líderes tomar decisiones informadas sobre el desarrollo
                  continuo de sus equipos.
                </p>

                <strong className="text-[#CD7F32]">
                  <FontAwesomeIcon icon={faPencil} className="mr-2 text-[#CD7F32]" />
                  Impacto en el rendimiento empresarial:
                </strong>
                <p className="mb-2">
                  <strong>Alineación con objetivos estratégicos:</strong> Al
                  personalizar nuestros programas de formación para alinearse
                  con los objetivos estratégicos de tu empresa, ayudamos a
                  impulsar el rendimiento general y a alcanzar metas
                  organizacionales clave.
                </p>

                <p className="mb-2">
                  <strong>Retención y satisfacción del empleado:</strong> La
                  formación personalizada no solo mejora las habilidades de los
                  empleados, sino que también aumenta su satisfacción y lealtad
                  hacia la empresa, reduciendo la rotación de personal y
                  fomentando un ambiente de trabajo positivo.
                </p>
              </motion.div>
            )}
          </motion.article>

          <motion.article
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#CD7F32]">
              Conoce las ventajas de aprender en cursos virtuales
            </h2>
            <strong>
              <FontAwesomeIcon icon={faPencil} className="mr-2" />
              Flexibilidad y accesibilidad:
            </strong>
            <p>
              Los cursos virtuales permiten a los estudiantes aprender a su
              propio ritmo y desde cualquier lugar, lo que es especialmente
              beneficioso para aquellos con horarios ocupados o limitaciones
              geográficas.
            </p>
            <button
              onClick={() => handleAccordionClick(0)}
              className="text-center w-[30%] my-2 px-4 py-2 rounded-full bg-[#820000] text-white hover:bg-[#BC0000] border-b-4 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-4 active:border-b-0 active:border-l-0"
            >
              {activeIndex === 0 ? "Leer menos" : "Leer más"}
            </button>
            {activeIndex === 0 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-black overflow-hidden"
              >
                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Interactividad y participación:
                </strong>
                <p className="mb-2">
                  Las plataformas de aprendizaje en línea ofrecen herramientas
                  interactivas como foros, chats y videoconferencias que
                  fomentan la participación activa y la colaboración entre
                  estudiantes.
                </p>

                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Variedad de recursos:
                </strong>
                <p className="mb-2">
                  Los cursos virtuales pueden integrar una amplia gama de
                  recursos multimedia, como videos, simulaciones y juegos
                  educativos, que hacen el aprendizaje más atractivo y efectivo.
                </p>

                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />{" "}
                  Actualización continua:
                </strong>
                <p className="mb-2">
                  Los contenidos de los cursos virtuales pueden actualizarse
                  fácilmente para reflejar los últimos avances y tendencias en
                  el campo de estudio.
                </p>
              </motion.div>
            )}
          </motion.article>

          <motion.article
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#CD7F32]">
              Tecnología
            </h2>
            <strong>
              <FontAwesomeIcon icon={faPencil} className="mr-2" />
              Impacto en la educación:
            </strong>
            <p>
              La tecnología ha transformado la educación, permitiendo el acceso
              a recursos ilimitados y herramientas que personalizan el
              aprendizaje según las necesidades individuales.
            </p>
            <button
              onClick={() => handleAccordionClick(1)}
              className="text-center w-[30%] my-2 px-4 py-2 rounded-full bg-[#820000] text-white hover:bg-[#BC0000] border-b-4 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-4 active:border-b-0 active:border-l-0"
            >
             {activeIndex === 1 ? "Leer menos" : "Leer más"}
            </button>
            {activeIndex === 1 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-black overflow-hidden"
              >
                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Inteligencia artificial y machine learning:
                </strong>
                <p className="mb-2">
                  Estas tecnologías están siendo utilizadas para crear tutores
                  virtuales y sistemas de recomendación que adaptan el
                  aprendizaje a las capacidades y estilos de los estudiantes.
                </p>

                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Realidad Aumentada (AR) y Realidad Virtual (VR):
                </strong>
                <p className="mb-2">
                  AR y VR ofrecen experiencias de aprendizaje inmersivas que
                  pueden simular entornos reales, mejorando la comprensión y
                  retención de conceptos complejos.
                </p>
              </motion.div>
            )}
          </motion.article>
        </section>
        <section className="max-w-xl mx-auto mt-8 space-y-6">
          <motion.article
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#CD7F32]">
              Tecnología infantil
            </h2>
            <strong>
              <FontAwesomeIcon icon={faPencil} className="mr-2" />
              Aplicaciones Educativas:
            </strong>
            <p>
              Las aplicaciones diseñadas para el aprendizaje infantil pueden ser
              una herramienta valiosa para complementar la educación
              tradicional, ofreciendo actividades interactivas y personalizadas.
            </p>
            <button
              onClick={() => handleAccordionClick(2)}
              className="text-center w-[30%] my-2 px-4 py-2 rounded-full bg-[#820000] text-white hover:bg-[#BC0000] border-b-4 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-4 active:border-b-0 active:border-l-0"
            >
              {activeIndex === 2 ? "Leer menos" : "Leer más"}
            </button>
            {activeIndex === 2 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-black overflow-hidden"
              >
                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Seguridad en línea:
                </strong>
                <p className="mb-2">
                  Es crucial enseñar a los niños sobre la seguridad en línea
                  desde una edad temprana, incluyendo la protección de datos
                  personales y el reconocimiento de contenido inapropiado.
                </p>

                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Aprendizaje basado en proyectos:
                </strong>
                <p className="mb-2">
                  Este enfoque permite a los niños aplicar lo que han aprendido
                  en contextos del mundo real, desarrollando habilidades de
                  pensamiento crítico y resolución de problemas.
                </p>
              </motion.div>
            )}
          </motion.article>

          <motion.article
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#CD7F32]">
              Seguridad en el trabajo
            </h2>
            <strong>
              <FontAwesomeIcon icon={faPencil} className="mr-2" />
              Prevención de riesgos:
            </strong>
            <p>
              La identificación y mitigación proactiva de riesgos en el lugar de
              trabajo pueden prevenir accidentes y enfermedades, mejorando la
              seguridad general de los empleados.
            </p>
            <button
              onClick={() => handleAccordionClick(3)}
              className="text-center w-[30%] my-2 px-4 py-2 rounded-full bg-[#820000] text-white hover:bg-[#BC0000] border-b-4 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-4 active:border-b-0 active:border-l-0"
            >
              {activeIndex === 3 ? "Leer menos" : "Leer más"}
            </button>
            {activeIndex === 3 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-black overflow-hidden"
              >
                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Cultura de seguridad:
                </strong>
                <p className="mb-2">
                  Fomentar una cultura de seguridad en la que todos los
                  empleados se sientan responsables y empoderados para
                  identificar y abordar riesgos puede reducir significativamente
                  los incidentes.
                </p>

                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Capacitación continua:
                </strong>
                <p className="mb-2">
                  La formación regular en prácticas de seguridad y el uso
                  adecuado de equipos de protección personal (EPP) es esencial
                  para mantener un entorno de trabajo seguro.
                </p>
              </motion.div>
            )}
          </motion.article>

          <motion.article
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-[#CD7F32]">
              Primeros auxilios
            </h2>
            <strong>
              <FontAwesomeIcon icon={faPencil} className="mr-2" />
              Importancia de la respuesta rápida:
            </strong>
            <p>
              Conocer técnicas básicas de primeros auxilios puede marcar la
              diferencia en situaciones de emergencia, proporcionando atención
              inmediata que puede salvar vidas.
            </p>
            <button
              onClick={() => handleAccordionClick(4)}
              className="text-center w-[30%] my-2 px-4 py-2 rounded-full bg-[#820000] text-white hover:bg-[#BC0000] border-b-4 border-[#CD7F32] leading-5 active:bg-[#820000] active:border-t-4 active:border-b-0 active:border-l-0"
            >
              {activeIndex === 4 ? "Leer menos" : "Leer más"}
            </button>
            {activeIndex === 4 && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ duration: 0.5 }}
                className="mt-4 text-black overflow-hidden"
              >
                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Capacitación para todos:
                </strong>
                <p className="mb-2">
                  Todos los empleados deben recibir capacitación en primeros
                  auxilios para asegurar que haya personas capacitadas
                  disponibles en caso de emergencia.
                </p>

                <strong>
                  <FontAwesomeIcon icon={faPencil} className="mr-2" />
                  Uso de tecnología en primeros auxilios:
                </strong>
                <p className="mb-2">
                  Las aplicaciones móviles y dispositivos portátiles pueden
                  proporcionar guías paso a paso y acceso rápido a información
                  crítica durante una emergencia.
                </p>
              </motion.div>
            )}
          </motion.article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
