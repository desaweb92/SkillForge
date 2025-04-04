import React from 'react';
import { motion } from 'framer-motion';

const DiapositivaInfo = ({ contenido, imagen }) => {
  return (
    <div className="space-y-6">
      {imagen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src={imagen} alt="Ilustración" className="w-full h-auto" />
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="prose prose-lg max-w-none text-gray-700"
      >
        {contenido.split('\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </motion.div>
    </div>
  );
};

export default DiapositivaInfo;