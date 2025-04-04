import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaRedo } from 'react-icons/fa';

const MultipleChoice = ({ datos = { preguntas: [] }, onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);
  const [attempts, setAttempts] = useState(0);

  const preguntas = datos?.preguntas || [];

  const handleSelect = (questionId, answerId) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const checkAnswers = () => {
    setSubmitted(true);
    setAttempts(prev => prev + 1);
    
    const correctCount = preguntas.reduce((count, pregunta, index) => {
      return count + (selectedAnswers[index] === pregunta.respuesta ? 1 : 0);
    }, 0);
    
    setScore(correctCount);
    
    if (correctCount === preguntas.length) {
      setTimeout(onComplete, 1500);
    }
  };

  const resetActivity = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  const allCorrect = score === preguntas.length;

  return (
    <div className="space-y-6">
      {/* Contador de intentos */}
      {submitted && !allCorrect && (
        <div className="text-right text-sm text-gray-600">
          Intento: {attempts}
        </div>
      )}

      {preguntas.length === 0 ? (
        <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg">
          No hay preguntas disponibles
        </div>
      ) : (
        preguntas.map((pregunta, index) => {
          const isSelected = selectedAnswers[index] !== undefined;
          const isCorrect = selectedAnswers[index] === pregunta.respuesta;
          const showFeedback = submitted && (isSelected || selectedAnswers[index] === pregunta.respuesta);

          return (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-3">{pregunta.texto}</h3>
              <div className="space-y-2">
                {pregunta.opciones.map((opcion, i) => {
                  const isAnswerCorrect = i === pregunta.respuesta;
                  const isSelectedOption = selectedAnswers[index] === i;
                  const showAsCorrect = submitted && isAnswerCorrect;
                  const showAsIncorrect = submitted && isSelectedOption && !isCorrect;

                  return (
                    <motion.div
                      key={i}
                      onClick={() => !submitted && handleSelect(index, i)}
                      className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                        !submitted
                          ? isSelectedOption
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:bg-gray-100'
                          : showAsCorrect
                            ? 'bg-green-100 border-green-500'
                            : showAsIncorrect
                              ? 'bg-red-100 border-red-500'
                              : 'border-gray-300'
                      } ${submitted && !isAnswerCorrect ? 'opacity-80' : ''}`}
                      whileHover={!submitted ? { scale: 1.02 } : {}}
                    >
                      <div className="flex items-center gap-3">
                        {showAsCorrect && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-green-500"
                          >
                            <FaCheck />
                          </motion.span>
                        )}
                        {showAsIncorrect && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-red-500"
                          >
                            <FaTimes />
                          </motion.span>
                        )}
                        <span>{opcion}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })
      )}

      {/* Botones de acción */}
      <div className="flex flex-wrap gap-4 justify-center">
        {!submitted ? (
          <motion.button
            onClick={checkAnswers}
            disabled={Object.keys(selectedAnswers).length !== preguntas.length}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Verificar respuestas
          </motion.button>
        ) : !allCorrect && (
          <>
            <motion.button
              onClick={resetActivity}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaRedo /> Reintentar
            </motion.button>
            
            <motion.button
              onClick={checkAnswers}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Verificar nuevamente
            </motion.button>
          </>
        )}
      </div>

      {/* Resultados */}
      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`p-4 rounded-lg text-center ${
            allCorrect ? 'bg-green-100 text-green-800' : 'bg-blue-50 text-blue-800'
          }`}
        >
          <p>
            Obtuviste {score} de {preguntas.length} respuestas correctas.
          </p>
          {allCorrect ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 font-medium"
            >
              ¡Perfecto! Todas las respuestas son correctas.
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-2 text-sm"
            >
              {attempts > 1 && `Intento ${attempts} - `}
              Revisa las respuestas marcadas y vuelve a intentarlo.
            </motion.p>
          )}
        </motion.div>
      )}
    </div>
  );
};

export default MultipleChoice;