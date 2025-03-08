import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

function About() {
  const percentageEducation = 75;
  const percentageCorporate = 94;
  const percentageEarlyEducation = 30;

  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#FFFACD] text-[#333333] min-h-screen">
      <Header />
      <main className="p-6 space-y-12">
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-[#8B0000]">Sobre Nosotros</h1>
          <img
            src="/src/assets/images/LogoPrincipalSK.png"
            alt="Profile"
            className="rounded-full shadow-lg w-52 h-52 mx-auto mb-4 p-1"
          />
          <p className="text-gray-800 max-w-2xl mx-auto leading-relaxed">
            En SkillForge, estamos comprometidos a empoderar a organizaciones y
            instituciones educativas mediante la entrega de programas de
            formación innovadores y personalizados. Nuestra misión es
            transformar el aprendizaje a través de la tecnología, proporcionando
            herramientas interactivas que faciliten el crecimiento profesional y
            el desarrollo de habilidades críticas.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-[#CD7F32] text-center">
            La Importancia de la Tecnología en la Educación y Capacitación
          </h2>
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:items-start">
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold text-[#8B0000]">
                Educación
              </h3>
              <div className="w-32 h-32 mx-auto my-4">
                <CircularProgressbar
                  value={percentageEducation}
                  text={`${percentageEducation}%`}
                  styles={{
                    path: { stroke: "#CD7F32" },
                    trail: { stroke: "#d6d6d6" },
                    text: { fill: "#8B0000", fontSize: "16px" },
                  }}
                />
              </div>
              <p className="text-gray-800">
                Un estudio del National Training Laboratory muestra que los
                estudiantes retienen aproximadamente el 5% de lo que escuchan en
                conferencias, pero hasta el 75% cuando practican haciendo. El
                aprendizaje mejorado con tecnología puede aumentar
                significativamente las tasas de participación y retención.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold text-[#8B0000]">
                Capacitación Corporativa
              </h3>
              <div className="w-32 h-32 mx-auto my-4">
                <CircularProgressbar
                  value={percentageCorporate}
                  text={`${percentageCorporate}%`}
                  styles={{
                    path: { stroke: "#CD7F32" },
                    trail: { stroke: "#d6d6d6" },
                    text: { fill: "#8B0000", fontSize: "16px" },
                  }}
                />
              </div>
              <p className="text-gray-800">
                Según un informe de LinkedIn, el 94% de los empleados afirma que
                permanecería más tiempo en una empresa si esta invirtiera en su
                desarrollo profesional.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl font-semibold text-[#8B0000]">
                Educación Temprana
              </h3>
              <div className="w-32 h-32 mx-auto my-4">
                <CircularProgressbar
                  value={percentageEarlyEducation}
                  text={`${percentageEarlyEducation}%`}
                  styles={{
                    path: { stroke: "#CD7F32" },
                    trail: { stroke: "#d6d6d6" },
                    text: { fill: "#8B0000", fontSize: "16px" },
                  }}
                />
              </div>
              <p className="text-gray-800">
                Un estudio publicado en el Journal of Educational Technology
                encontró que el uso de aplicaciones educativas interactivas
                puede mejorar las habilidades cognitivas hasta en un 30% en
                niños en edad preescolar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
