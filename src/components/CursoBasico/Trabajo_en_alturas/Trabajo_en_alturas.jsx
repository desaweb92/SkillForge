// src/components/CursoBasico/Trabajo_en_alturas/Trabajo_en_alturas.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavegacionCurso } from './hooks/useNavegacionCurso';
import ProgresoCurso from './components/ProgresoCurso';
import DiapositivaInfo from './components/DiapositivaInfo';
import { data } from './data';
import CompleteSentence from './activities/CompleteSentence';
import DragAndDrop from './activities/DragAndDrop';
import WordSearch from './activities/WordSearch';
import MultipleChoice from './activities/MultipleChoice';
import Header from '../../Header';
import Footer from '../../Footer';

const TrabajoEnAlturas = () => {
  const {
    diapositivaActual,
    completadas,
    siguienteDiapositiva,
    diapositivaAnterior,
    completarDiapositiva,
    setDiapositivaActual
  } = useNavegacionCurso(data.length);

  const renderActividad = () => {
    const diapositiva = data[diapositivaActual];
    
    if (!diapositiva || !diapositiva.tipoActividad) return null;

    switch (diapositiva.tipoActividad) {
      case 'completar-frases':
        return <CompleteSentence datos={diapositiva.datos} onComplete={() => completarDiapositiva(diapositivaActual)} />;
      case 'arrastrar-soltar':
        return <DragAndDrop datos={diapositiva.datos} onComplete={() => completarDiapositiva(diapositivaActual)} />;
      case 'sopa-letras':
        return <WordSearch datos={diapositiva.datos} onComplete={() => completarDiapositiva(diapositivaActual)} />;
      case 'seleccion-multiple':
        return <MultipleChoice datos={diapositiva.datos} onComplete={() => completarDiapositiva(diapositivaActual)} />;
      default:
        return null;
    }
  };

  if (!data || data.length === 0) {
    return <div className="p-8 text-center text-red-500">Error: No hay datos del curso disponibles</div>;
  }

  return (
    <div className="bg-gradient-to-r from-[#F5F5DC] to-[#FFFACD] text-[#333333] min-h-screen">
          <Header />
    <div className="my-10 max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <ProgresoCurso 
        total={data.length} 
        actual={diapositivaActual}
        completadas={completadas}
        setDiapositivaActual={setDiapositivaActual}
      />

      <motion.div
        key={diapositivaActual}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="p-8"
      >
        {data[diapositivaActual] && (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {data[diapositivaActual].titulo}
            </h2>

            {data[diapositivaActual].tipo === 'info' ? (
              <DiapositivaInfo 
                contenido={data[diapositivaActual].contenido} 
                imagen={data[diapositivaActual].imagen} 
              />
            ) : (
              <div>
                <p className="text-gray-600 mb-6">
                  {data[diapositivaActual].instrucciones}
                </p>
                {renderActividad()}
                {completadas[diapositivaActual] && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded flex items-center gap-2">
                    <span>¡Actividad completada!</span>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </motion.div>

      <div className="flex justify-between p-4 bg-gray-50">
        <button
          onClick={diapositivaAnterior}
          disabled={diapositivaActual === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Anterior
        </button>
        <button
          onClick={siguienteDiapositiva}
          disabled={diapositivaActual === data.length - 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Siguiente
        </button>
      </div>
    </div>
      <Footer />
        </div>
  );
};

export default TrabajoEnAlturas;