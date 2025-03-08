import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Courses() {
  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#FFFACD] text-[#333333] min-h-screen">
      <Header />

      {/* Sección de Servicios */}
      <section className=" flex flex-col items-center justify-center w-full">
        <div className="w-full flex items-center justify-between mb-8 col-span-2 bg-white px-[10%]">
          <h2 className="md:text-[50px] text-center font-bold mx-2 text-[#820000]">Cursos</h2>
          <img className="w-[20%]" src="/src/assets/images/Ilustration_Cursos.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tarjeta de Servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#820000] hover:text-white">
            <div className="mb-4">
              <img
                src="social-media-icon.png"
                alt="Social Media"
                className="mx-auto"
              />
            </div>
            <h3 className="text-[20px] text-[#820000] hover:text-[#CD7F32] font-semibold mb-2">
              Básicos
            </h3>
            <p className="mb-4">
              Boost your online presence with our social media strategies.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#820000] hover:text-white">
            <div className="mb-4">
              <img src="seo-icon.png" alt="SEO" className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Mixtos
            </h3>
            <p className="mb-4">
              Improve your website's visibility on search engines.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#820000] hover:text-white">
            <div className="mb-4">
              <img src="content-icon.png" alt="Content" className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalizados</h3>
            <p className="mb-4">
              Create valuable content that engages your audience.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
            <div className="mb-4">
              <img src="email-icon.png" alt="Email" className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
            <p className="mb-4">
              Reach your customers directly with targeted email campaigns.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
            <div className="mb-4">
              <img
                src="web-design-icon.png"
                alt="Web Design"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Web Design & Optimization
            </h3>
            <p className="mb-4">
              Create a professional and optimized web presence.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Ver más
            </button>
          </div>

          {/* Tarjeta de Servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
            <div className="mb-4">
              <img
                src="analytics-icon.png"
                alt="Analytics"
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Web Analytics & Reporting
            </h3>
            <p className="mb-4">
              Analyze your website's performance and make data-driven decisions.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded">
              Ver más
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Proceso de Trabajo */}
      <section className="py-16 bg-[#F9F9F9]">
        <h2 className="text-4xl text-center font-bold mb-12">
          Our Process Workflow
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-around items-center">
            {/* Paso del Proceso */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
              <img
                src="consultation-icon.png"
                alt="Consultation"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p>
                Schedule a consultation to discuss your business goals and
                needs.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
              <img
                src="strategy-icon.png"
                alt="Strategy"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Strategy Development
              </h3>
              <p>
                Our team will develop a tailored digital marketing strategy for
                your business.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
              <img
                src="implementation-icon.png"
                alt="Implementation"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p>
                We execute the plan and launch your digital marketing campaigns.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
              <img
                src="monitoring-icon.png"
                alt="Monitoring"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Monitoring & Optimization
              </h3>
              <p>
                We continuously monitor and optimize your campaigns to maximize
                ROI.
              </p>
            </div>

            {/* Paso del Proceso */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center mb-4 md:mb-0 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-indigo-100">
              <img
                src="reporting-icon.png"
                alt="Reporting"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Reporting & Analysis
              </h3>
              <p>
                Receive regular reports and insights on campaign performance.
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
