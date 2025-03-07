import React from 'react';
import Header from '../components/Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '../components/Footer';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="bg-gradient-to-r  from-[#F5F5DC] to-[#FFFACD] text-[#333333] min-h-screen">
      <Header />
      <main className="p-6 space-y-8">

        {/* Los slider solo se usan en promociones o fechas especiales */}
        {/* <div className='w-full flex justify-center items-center '>
        <Slider {...settings} className="w-[50%] mb-6">
         
          <div>
            <video controls className="w-full rounded-xl shadow-lg">
              <source src="/src/assets/videos/infantil.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
          <div>
            <img src="/src/assets/images/aprendizaje.jpg" alt="Slider 2" className="w-full rounded-xl shadow-lg" />
          </div>
          <div>
            <video controls className="w-full rounded-xl shadow-lg">
              <source src="/src/assets/videos/seguridad.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
          <div>
            <video controls className="w-full rounded-xl shadow-lg">
              <source src="/src/assets/videos/trabajo.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        </Slider>
        </div> */}

        <section className="text-center space-y-6">
          <h1 className="text-5xl font-extrabold text-[#8B0000] animate-fade-in">Bienvenidos a SkillForge</h1>
          <h2 className="text-3xl font-bold text-[#CD7F32]">"Transformando potencial en desempeño"</h2>
          <p className="text-gray-800 max-w-4xl mx-auto leading-relaxed">
            En SkillForge, estamos comprometidos con empoderar a las organizaciones mediante la entrega de programas de formación innovadores y personalizados. Nuestra misión es desarrollar habilidades críticas, fomentar un entorno de trabajo seguro y promover el crecimiento profesional continuo.
          </p>
          <div className="flex justify-center space-x-6">
            <img src="/src/assets/images/Seguridad.jpg" alt="SkillForge Training" className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-1/3" />
            <img src="/src/assets/images/Trabajo.jpg" alt="SkillForge Solutions" className="rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-1/3" />
          </div>
        </section>

        <section className="bg-[#F5F5F5] p-8 rounded-2xl shadow-xl space-y-6">
          <h3 className="text-3xl font-bold text-[#CD7F32]">Nuestra Misión y Visión</h3>
          <p className="text-gray-800">
            <strong>Nuestra Misión:</strong> Empoderar a las organizaciones mediante programas de formación innovadores y personalizados que desarrollen habilidades críticas, fomenten un entorno de trabajo seguro y promuevan el crecimiento profesional continuo.
          </p>
          <p className="text-gray-800">
            <strong>Nuestra Visión:</strong> Ser la empresa líder en formación corporativa, reconocida globalmente por transformar empresas a través de soluciones educativas de vanguardia que impulsan el éxito y la seguridad en el lugar de trabajo.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-3xl font-bold text-[#CD7F32]">Beneficios Clave de Nuestros Servicios</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-3 pl-5">
            <li className="flex items-center space-x-3">
              <span className="text-[#CD7F32] text-lg">&#x2713;</span>
              <span><strong>Formación Personalizada:</strong> Cursos adaptados a las necesidades específicas de cada organización.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#CD7F32] text-lg">&#x2713;</span>
              <span><strong>Innovación en el Aprendizaje:</strong> Uso de tecnologías avanzadas y metodologías interactivas.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#CD7F32] text-lg">&#x2713;</span>
              <span><strong>Expertos en Seguridad y Cumplimiento:</strong> Programas que abarcan desde la seguridad en alturas hasta la ciberseguridad.</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-[#CD7F32] text-lg">&#x2713;</span>
              <span><strong>Desarrollo Profesional Integral:</strong> Cursos de liderazgo, gestión del tiempo, inteligencia emocional y más.</span>
            </li>
          </ul>
        </section>

       
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
