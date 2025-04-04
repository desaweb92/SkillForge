import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRedo } from 'react-icons/fa';

const CompleteSentence = ({ datos = { frases: [] }, onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const frases = datos?.frases || [];

  const handleSelect = (fraseIndex, value) => {
    setAnswers(prev => ({ ...prev, [fraseIndex]: value }));
  };

  const checkAnswers = () => {
    setSubmitted(true);
    const allCorrect = frases.every(
      (frase, index) => answers[index] === frase.respuesta
    );
    
    if (allCorrect) {
      setTimeout(onComplete, 1500);
    }
  };

  const resetActivity = () => {
    setAnswers({});
    setSubmitted(false);
  };

  const allCorrect = submitted && frases.every((_, i) => answers[i] === frases[i].respuesta);

  return (
    <div className="space-y-6">
      {frases.length === 0 ? (
        <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">
          No hay frases disponibles para completar
        </div>
      ) : (
        frases.map((frase, index) => {
          const [partBefore, partAfter] = frase.texto.split('_');
          const isCorrect = submitted && answers[index] === frase.respuesta;
          const isIncorrect = submitted && answers[index] && answers[index] !== frase.respuesta;

          return (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {partBefore && <span className="text-gray-800">{partBefore}</span>}
                
                <select
                  className={`border rounded px-3 py-1 min-w-[120px] ${
                    isCorrect ? 'bg-green-50 border-green-500 text-green-700' :
                    isIncorrect ? 'bg-red-50 border-red-500 text-red-700' :
                    'bg-white border-gray-300 text-gray-800'
                  }`}
                  onChange={(e) => handleSelect(index, e.target.value)}
                  disabled={submitted && !isIncorrect}
                  value={answers[index] || ''}
                >
                  <option value="" disabled>Seleccione...</option>
                  {frase.opciones.map((opcion, i) => (
                    <option key={i} value={opcion}>
                      {opcion}
                    </option>
                  ))}
                </select>
                
                {partAfter && <span className="text-gray-800">{partAfter}</span>}
                
                {isCorrect && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-green-500 ml-2"
                  >
                    <FaCheck />
                  </motion.span>
                )}
              </div>
              
              {isIncorrect && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-sm mt-1 pl-2"
                >
                  Correcto: <span className="font-semibold">{frase.respuesta}</span>
                </motion.div>
              )}
            </div>
          );
        })
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        {!submitted ? (
          <motion.button
            onClick={checkAnswers}
            disabled={Object.keys(answers).length !== frases.length}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Verificar respuestas
          </motion.button>
        ) : !allCorrect && (
          <motion.button
            onClick={resetActivity}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaRedo /> Reintentar actividad
          </motion.button>
        )}

        {allCorrect && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-3 bg-green-100 text-green-800 rounded-lg text-center"
          >
            ¡Perfecto! Todas las respuestas son correctas.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CompleteSentence;