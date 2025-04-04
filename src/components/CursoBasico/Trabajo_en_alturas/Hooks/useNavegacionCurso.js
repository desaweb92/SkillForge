import { useState } from 'react';

export const useNavegacionCurso = (totalDiapositivas) => {
  const [diapositivaActual, setDiapositivaActual] = useState(0);
  const [completadas, setCompletadas] = useState(Array(totalDiapositivas).fill(false));

  const siguienteDiapositiva = () => {
    if (diapositivaActual < totalDiapositivas - 1) {
      setDiapositivaActual(diapositivaActual + 1);
    }
  };

  const diapositivaAnterior = () => {
    if (diapositivaActual > 0) {
      setDiapositivaActual(diapositivaActual - 1);
    }
  };

  const completarDiapositiva = (index) => {
    const nuevasCompletadas = [...completadas];
    nuevasCompletadas[index] = true;
    setCompletadas(nuevasCompletadas);
  };

  return {
    diapositivaActual,
    completadas,
    siguienteDiapositiva,
    diapositivaAnterior,
    completarDiapositiva,
    setDiapositivaActual
  };
};