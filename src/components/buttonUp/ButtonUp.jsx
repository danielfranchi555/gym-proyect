'use client'
import React, { useState, useEffect } from 'react';

const ButtonUp = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Obtener la posición de desplazamiento actual
      const scrollPosition = window.scrollY;

      // Ajustar la visibilidad del botón basándose en la posición de desplazamiento
      setShowButton(scrollPosition > 200); // Cambia 200 a la posición de desplazamiento deseada
    };

    // Agregar el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {showButton && (
        <span
          className='icon-cheveron-up text-[40px] rounded-full bg-slate-500 bg-opacity-35 cursor-pointer fixed bottom-4 right-1 transition-opacity duration-500 md:right-4 md:text-[40px] md:bottom-4'
          onClick={scrollToTop}
        ></span>
      )}
    </div>
  );
};

export default ButtonUp;
