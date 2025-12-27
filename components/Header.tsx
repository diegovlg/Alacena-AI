
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white p-6 shadow-lg sticky top-0 z-40 border-b-4 border-blue-900">
      <h1 className="text-3xl font-bold text-center uppercase tracking-wider">
        La Alacena Inteligente
      </h1>
      <p className="text-center text-blue-100 text-lg mt-1 font-semibold">
        Gestión fácil de alimentos
      </p>
    </header>
  );
};

export default Header;
