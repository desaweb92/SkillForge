// src/components/CursoBasico/Trabajo_en_alturas/activities/DragAndDrop.jsx
import React, { useState } from 'react';
import { motion, Reorder } from 'framer-motion';
import { FaGripVertical, FaRedo } from 'react-icons/fa';

const DragAndDrop = ({ datos = { items: [], targets: [] }, onComplete }) => {
  // Valores por defecto para evitar undefined
  const initialItems = datos?.items || [];
  const initialTargets = datos?.targets || [];
  
  const [items, setItems] = useState([...initialItems]);
  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleDrop = (item, target) => {
    setMatches(prev => ({ ...prev, [item]: target }));
  };

  const checkAnswers = () => {
    setSubmitted(true);
    setAttempts(prev => prev + 1);
    const allCorrect = initialItems.every(item => 
      matches[item] === initialTargets[initialItems.indexOf(item)]
    );
    
    if (allCorrect) {
      setTimeout(onComplete, 1500);
    }
  };

  const handleDragStart = (e, item) => {
    e.dataTransfer.setData('text/plain', item);
  };

  const resetActivity = () => {
    setItems([...initialItems]);
    setMatches({});
    setSubmitted(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Contador de intentos y botón de reinicio */}
      <div className="md:col-span-2 flex justify-between items-center">
        <span className="text-sm text-gray-600">
          Intentos: {attempts}
        </span>
        {(Object.keys(matches).length > 0 || submitted) && (
          <motion.button
            onClick={resetActivity}
            className="px-4 py-2 bg-orange-500 text-white rounded-lg flex items-center gap-2 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRedo /> Reiniciar
          </motion.button>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Elementos</h3>
        <Reorder.Group values={items} onReorder={setItems} className="space-y-2">
          {items.map((item) => (
            <Reorder.Item key={item} value={item}>
              <motion.div
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                className="p-3 bg-blue-100 rounded-lg flex items-center justify-between cursor-move"
                whileDrag={{ scale: 1.05 }}
              >
                <span>{item}</span>
                <FaGripVertical className="text-gray-500" />
              </motion.div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-gray-700">Categorías</h3>
        {initialTargets.map((target) => (
          <motion.div
            key={target}
            onDrop={(e) => {
              e.preventDefault();
              const item = e.dataTransfer.getData('text/plain');
              handleDrop(item, target);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={`p-4 border-2 border-dashed rounded-lg min-h-16 ${
              Object.values(matches).includes(target) 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-300'
            }`}
          >
            <h4 className="font-medium mb-2">{target}</h4>
            {Object.entries(matches)
              .filter(([_, t]) => t === target)
              .map(([item]) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-2 bg-white rounded shadow-sm mb-1"
                >
                  {item}
                </motion.div>
              ))}
          </motion.div>
        ))}
      </div>

      {!submitted && (
        <div className="md:col-span-2">
          <button
            onClick={checkAnswers}
            disabled={Object.keys(matches).length !== initialItems.length}
            className="px-4 py-2 bg-[#BC0000] hover:bg-[#820000] text-white rounded disabled:bg-gray-300"
          >
            Verificar respuestas
          </button>
        </div>
      )}

      {submitted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:col-span-2 p-3 bg-green-100 text-green-500 rounded"
        >
          {Object.keys(matches).length === initialItems.length && 
          initialItems.every(item => matches[item] === initialTargets[initialItems.indexOf(item)]) 
            ? "¡Actividad completada correctamente!"
            : "¡Inténtalo de nuevo! Algunas respuestas no son correctas."}
        </motion.div>
      )}
    </div>
  );
};

export default DragAndDrop;