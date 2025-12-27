
import React, { useState } from 'react';
import { ShoppingListItem } from '../types';

interface Props {
  shoppingList: ShoppingListItem[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onClearCompleted: () => void;
  onManualAdd: (name: string, quantity: number, unit: string) => void;
}

const ShoppingListView: React.FC<Props> = ({ shoppingList, onToggle, onRemove, onClearCompleted, onManualAdd }) => {
  const [manualName, setManualName] = useState('');
  
  const total = shoppingList
    .filter(i => !i.completed)
    .reduce((acc, curr) => acc + curr.priceEstimate, 0);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualName.trim()) {
      onManualAdd(manualName.trim(), 1, 'unidad');
      setManualName('');
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-3">Lista de Compras</h2>
      
      <form onSubmit={handleAdd} className="flex gap-2">
        <input 
          type="text"
          value={manualName}
          onChange={e => setManualName(e.target.value)}
          className="flex-1 p-4 text-xl border-4 border-blue-200 rounded-2xl"
          placeholder="Escriba aquí un producto..."
        />
        <button 
          type="submit"
          className="bg-blue-600 text-white px-6 rounded-2xl font-bold text-3xl border-b-4 border-blue-800"
        >
          +
        </button>
      </form>

      <div className="bg-blue-50 p-6 rounded-3xl border-4 border-blue-200 shadow-md flex justify-between items-center">
        <div>
          <p className="text-slate-600 font-bold uppercase text-sm">Costo Estimado Total</p>
          <p className="text-4xl font-black text-blue-900">S/ {total.toFixed(2)}</p>
        </div>
        <button 
          onClick={onClearCompleted}
          className="bg-white text-blue-700 border-4 border-blue-200 px-4 py-2 rounded-xl font-bold hover:bg-blue-100 transition-colors"
        >
          Limpiar Marcados
        </button>
      </div>

      <div className="space-y-3">
        {shoppingList.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <span className="text-6xl block mb-4">📭</span>
            <p className="text-xl font-bold">No tienes nada pendiente de comprar.</p>
          </div>
        ) : (
          shoppingList.map(item => (
            <div 
              key={item.id} 
              className={`p-4 rounded-2xl border-4 flex items-center gap-4 transition-all ${
                item.completed ? 'bg-slate-100 border-slate-200 opacity-50' : 'bg-white border-blue-100 shadow-lg'
              }`}
            >
              <button 
                onClick={() => onToggle(item.id)}
                className={`w-12 h-12 rounded-full border-4 flex items-center justify-center text-2xl font-bold ${
                  item.completed ? 'bg-green-500 border-green-700 text-white' : 'bg-white border-slate-300 text-transparent'
                }`}
              >
                ✓
              </button>
              
              <div className="flex-1" onClick={() => onToggle(item.id)}>
                <h4 className={`text-2xl font-bold ${item.completed ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                  {item.name}
                </h4>
                <p className="text-slate-500 font-bold">Est. S/ {item.priceEstimate.toFixed(2)}</p>
              </div>

              <button 
                onClick={() => onRemove(item.id)}
                className="text-3xl text-red-300 hover:text-red-500 p-2"
                aria-label="Quitar de la lista"
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-xl text-yellow-800 text-sm italic mt-8 font-semibold">
        * Los precios son referenciales basados en el mercado local peruano.
      </div>
    </div>
  );
};

export default ShoppingListView;
