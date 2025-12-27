
import React from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  setView: (view: View) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-slate-100 border-t-8 border-slate-300 grid grid-cols-3 h-24 max-w-2xl mx-auto shadow-[0_-10px_20px_rgba(0,0,0,0.1)] z-50">
      <button 
        onClick={() => setView('inventory')}
        className={`flex flex-col items-center justify-center p-2 font-bold transition-colors ${
          currentView === 'inventory' ? 'bg-blue-600 text-white' : 'text-slate-600 active:bg-slate-300'
        }`}
      >
        <span className="text-3xl">🏠</span>
        <span className="text-sm uppercase mt-1">Despensa</span>
      </button>

      <button 
        onClick={() => setView('recipes')}
        className={`flex flex-col items-center justify-center p-2 font-bold transition-colors ${
          currentView === 'recipes' ? 'bg-blue-600 text-white' : 'text-slate-600 active:bg-slate-300'
        }`}
      >
        <span className="text-3xl">🍳</span>
        <span className="text-sm uppercase mt-1">Recetas</span>
      </button>

      <button 
        onClick={() => setView('shopping')}
        className={`flex flex-col items-center justify-center p-2 font-bold transition-colors ${
          currentView === 'shopping' ? 'bg-blue-600 text-white' : 'text-slate-600 active:bg-slate-300'
        }`}
      >
        <span className="text-3xl">🛒</span>
        <span className="text-sm uppercase mt-1">Compras</span>
      </button>
    </nav>
  );
};

export default Navigation;
