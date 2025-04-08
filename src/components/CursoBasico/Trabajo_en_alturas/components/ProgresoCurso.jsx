import React from 'react';
import { motion } from 'framer-motion';

const ProgresoCurso = ({ 
  total, 
  actual, 
  completadas, 
  setDiapositivaActual,
  totalActividades = 4 // Nuevo prop para especificar cuántas diapositivas son actividades
}) => {
  // Calcular porcentaje de avance
  const calcularPorcentaje = () => {
    const diapositivasVistas = actual + 1; // +1 porque actual empieza en 0
    const actividadesCompletadas = completadas.filter(Boolean).length;
    const totalDiapositivasLectura = total - totalActividades;

    // Peso: 60% por diapositivas de lectura, 40% por actividades (6 lectura vs 4 actividades)
    const porcentajeLectura = (diapositivasVistas / total) * (totalDiapositivasLectura / total) * 100;
    const porcentajeActividades = (actividadesCompletadas / totalActividades) * (totalActividades / total) * 100;

    return Math.min(Math.round(porcentajeLectura + porcentajeActividades), 100);
  };

  const porcentajeCompletado = calcularPorcentaje();

  return (
    <div className="p-4 bg-white border-b">
      {/* Barra de progreso con porcentaje */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700">Progreso del curso</span>
          <span className="text-sm font-medium text-[#BC0000]">{porcentajeCompletado}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <motion.div
            className="bg-[#BC0000] h-2.5 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${porcentajeCompletado}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Indicadores de diapositivas */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 px-2">
        {Array.from({ length: total }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setDiapositivaActual(index)}
            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center relative ${
              actual === index
                ? 'bg-[#BC0000] text-white shadow-lg border-b-4 border-[#CD7F32]'
                : completadas[index]
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-800'
            }`}
            whileHover={{ scale: 1.1 }}
          >
            {index + 1}
            {completadas[index] && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"
              >
                ✓
              </motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProgresoCurso;