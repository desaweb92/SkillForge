import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaugh,
  faFaceLaughBeam,
  faFaceLaughWink,
} from "@fortawesome/free-regular-svg-icons";
import {
  faComments,
  faGears,
  faUsers,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
function Courses() {
  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#FFFACD] text-[#333333] min-h-screen">
      <Header />

      {/* Sección de Servicios */}
      <section className=" flex flex-col items-center justify-center w-full">
        <div className="w-full flex items-center justify-center md:justify-between md:col-span-2 bg-white px-[10%]">
          <h2 className="text-[30px] md:text-[50px] text-center font-bold mx-2 text-[#820000]">
            Cursos
          </h2>
          <img
            className="hidden md:block w-[20%]"
            src="/src/assets/images/Ilustration_Cursos.svg"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto my-8">
          {/* Tarjeta de Servicio */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#820000] hover:text-white">
            <div className="w-full mb-4">
              <FontAwesomeIcon
                icon={faFaceLaugh}
                style={{ fontSize: "50px" }}
              />
            </div>
            <h3 className="text-[20px] text-[#CD7F32] font-semibold mb-2 ">
              Básicos
            </h3>
            <p className="mb-4 text-[16px] text-justify">
              Nuestros cursos básicos ofrecen plantillas predefinidas y listas
              para usar, permitiéndote enfocarte únicamente en personalizar el
              contenido según las necesidades de tu empresa. Ideales para una
              implementación rápida y eficiente, estos diseños te brindan una
              base sólida sobre la cual construir tus materiales educativos.
              ¡Empieza tu viaje educativo con nosotros hoy mismo!
            </p>
            <button className="md:w-[30%] text-[#CD7F32] font-bold text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-4 border-[#CD7F32] active:bg-[#820000] active:border-t-4 active:border-b-0 w-full">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#820000] hover:text-white">
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faFaceLaughWink}
                style={{ fontSize: "50px" }}
              />
            </div>
            <h3 className="text-[20px] text-[#CD7F32] font-semibold mb-2 ">
              Mixtos
            </h3>
            <p className="mb-4 text-[16px] text-justify">
              Los cursos mixtos combinan la eficiencia de nuestras plantillas
              básicas con la flexibilidad de la personalización. Ajustamos
              partes específicas del diseño según tus requerimientos, ofreciendo
              una solución equilibrada que satisface tus necesidades únicas sin
              sacrificar la rapidez de implementación. ¡Empieza tu viaje
              educativo con nosotros hoy mismo!
            </p>
            <button className="md:w-[30%] text-[#CD7F32] font-bold text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-4 border-[#CD7F32] active:bg-[#820000] active:border-t-4 active:border-b-0 w-full">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#820000] hover:text-white">
            <div className="mb-4">
              <FontAwesomeIcon
                icon={faFaceLaughBeam}
                style={{ fontSize: "50px" }}
              />
            </div>
            <h3 className="text-[20px] text-[#CD7F32] font-semibold mb-2 ">
              Personalizados
            </h3>
            <p className="mb-4 text-[16px] text-justify">
              Con nuestros cursos personalizados, cada detalle es creado a tu
              medida. Desde el diseño hasta el contenido, trabajamos contigo
              para desarrollar una solución completamente adaptada a tus
              necesidades y objetivos específicos. Perfectos para aquellos que
              buscan una experiencia educativa única y totalmente personalizada.
              ¡Empieza tu viaje educativo con nosotros hoy mismo!
            </p>
            <button className="md:w-[30%] text-[#CD7F32] font-bold text-[16px] flex justify-center items-center px-4 py-2 bg-[#BC0000] rounded-full border-b-4 border-[#CD7F32] active:bg-[#820000] active:border-t-4 active:border-b-0 w-full">
              Ver más
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Proceso de Trabajo */}
      <section className="py-16 bg-[#F9F9F9]">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12 text-[#820000]">
          Nuestro flujo de trabajo
        </h2>
        <div className="w-[90%] md:w-full max-w-6xl mx-auto">
          <div className="w-full flex flex-col md:flex-row justify-between items-center">
            {/* Paso del Proceso */}
            <div className="w-full mx-2 bg-white p-3 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#CD7F32]">
              <FontAwesomeIcon
                icon={faComments}
                style={{ fontSize: "50px", marginBottom: "8px" }}
              />
              <h3 className="text-[20px] font-semibold mb-2 text-[#820000]">
                Consulta
              </h3>
              <p className="text-[16px] font-regular text-black text-justify">
                Programe una consulta para discutir sus objetivos y necesidades.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="w-full mx-2 bg-white p-3 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#CD7F32]">
              <FontAwesomeIcon
                icon={faGears}
                style={{ fontSize: "70px", marginBottom: "8px" }}
              />
              <h3 className="text-[20px] font-semibold mb-2 text-[#820000]">
                Desarrollo de estrategia
              </h3>
              <p className="text-[16px] font-regular text-black text-justify">
                Nuestro equipo desarrollará una estrategia de trabajo.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="w-full mx-2 bg-white p-3 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#CD7F32]">
              <FontAwesomeIcon
                icon={faUsers}
                style={{ fontSize: "70px", marginBottom: "8px" }}
              />
              <h3 className="text-[20px] font-semibold mb-2 text-[#820000]">
                Implementación
              </h3>
              <p className="text-[16px] font-regular text-black text-justify">
                Ejecutamos el curso según solicitud del cliente.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="w-full mx-2 bg-white p-3 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#CD7F32]">
              <FontAwesomeIcon
                icon={faDesktop}
                style={{ fontSize: "70px", marginBottom: "8px" }}
              />
              <h3 className="text-[20px] font-semibold mb-2 text-[#820000]">
                Monitoreo y optimización
              </h3>
              <p className="text-[16px] font-regular text-black text-justify">
                Monitoreamos y optimizamos continuamente sus cursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Courses;
