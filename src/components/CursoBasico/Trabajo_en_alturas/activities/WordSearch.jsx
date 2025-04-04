import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRedo } from 'react-icons/fa';

const WordSearch = ({ data, onComplete }) => {
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Ejemplo de sopa de letras
  const grid = [
    ['A', 'R', 'N', 'E', 'S', 'C', 'O', 'P'],
    ['B', 'O', 'T', 'A', 'S', 'D', 'E', 'M'],
    ['C', 'A', 'S', 'C', 'O', 'F', 'G', 'H'],
    ['D', 'E', 'G', 'U', 'A', 'N', 'T', 'E'],
    ['E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
    ['F', 'A', 'R', 'N', 'E', 'S', 'M', 'N'],
    ['G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'],
    ['H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']
  ];

  const words = ['ARNES', 'BOTAS', 'CASCO', 'GUANTE'];

  const handleCellClick = (row, col) => {
    if (isDragging) return;
    
    setSelectedCells([{ row, col }]);
    setIsDragging(true);
  };

  const handleCellEnter = (row, col) => {
    if (!isDragging) return;
    
    setSelectedCells(prev => [...prev, { row, col }]);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    checkSelectedWord();
  };

  const checkSelectedWord = () => {
    if (selectedCells.length < 3) {
      setSelectedCells([]);
      return;
    }
    
    const word = selectedCells
      .map(cell => grid[cell.row][cell.col])
      .join('');
    
    if (words.includes(word) && !foundWords.includes(word)) {
      setFoundWords(prev => [...prev, word]);
    } else {
      setAttempts(prev => prev + 1);
    }
    
    setSelectedCells([]);
  };

  const resetActivity = () => {
    setFoundWords([]);
    setSelectedCells([]);
    setIsDragging(false);
    setAttempts(0);
  };

  useEffect(() => {
    if (foundWords.length === words.length) {
      setTimeout(onComplete, 1500);
    }
  }, [foundWords, onComplete, words.length]);

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Contador de intentos y botón de reinicio */}
      <div className="flex justify-between w-full max-w-md items-center">
        <span className="text-sm text-gray-600">
          Intentos: {attempts}
        </span>
        {foundWords.length > 0 && foundWords.length < words.length && (
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

      {/* Sopa de letras */}
      <div className="grid grid-cols-8 gap-0 select-none mx-auto">
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => {
            const isSelected = selectedCells.some(
              cell => cell.row === rowIndex && cell.col === colIndex
            );
            const isFound = foundWords.some(word => word.includes(letter));

            return (
              <motion.div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onMouseEnter={() => handleCellEnter(rowIndex, colIndex)}
                onMouseUp={handleMouseUp}
                className={`w-8 h-8 flex items-center justify-center border border-gray-200 cursor-pointer ${
                  isSelected
                    ? 'bg-blue-500 text-white'
                    : isFound
                    ? 'bg-green-100'
                    : 'bg-white'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {letter}
              </motion.div>
            );
          })
        )}
      </div>

      {/* Lista de palabras */}
      <div className="w-full max-w-md p-3 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-center mb-2">Palabras a encontrar:</h3>
        <div className="flex flex-wrap justify-center gap-1">
          {words.map((word) => (
            <motion.div
              key={word}
              initial={{ opacity: 1 }}
              animate={{
                opacity: foundWords.includes(word) ? 0.5 : 1,
              }}
              className={`px-2 py-1 bg-white rounded shadow text-sm ${
                foundWords.includes(word) ? 'line-through' : ''
              }`}
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mensajes de estado */}
      {attempts > 3 && foundWords.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-orange-600 text-sm"
        >
          Consejo: Busca palabras en diagonal y en reversa también
        </motion.div>
      )}

      {foundWords.length === words.length ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-2 bg-green-100 text-green-800 rounded text-sm"
        >
          ¡Todas las palabras encontradas!
        </motion.div>
      ) : foundWords.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-600 text-sm"
        >
          Has encontrado {foundWords.length} de {words.length} palabras
        </motion.div>
      )}
    </div>
  );
};

export default WordSearch;