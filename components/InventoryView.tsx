
import React, { useState } from 'react';
import { InventoryItem } from '../types';

interface Props {
  inventory: InventoryItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onDelete: (id: string) => void;
  onAdd: (name: string, quantity: number, unit: string) => void;
  onBulkImport: (csv: string) => void;
  onScan: () => void;
}

const InventoryView: React.FC<Props> = ({ inventory, onUpdateQty, onDelete, onAdd, onBulkImport, onScan }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isBulk, setIsBulk] = useState(false);
  const [newName, setNewName] = useState('');
  const [newQty, setNewQty] = useState('1');
  const [newUnit, setNewUnit] = useState('unidades');
  const [bulkText, setBulkText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newName && newQty) {
      onAdd(newName, parseFloat(newQty), newUnit);
      setNewName('');
      setNewQty('1');
      setIsAdding(false);
    }
  };

  const handleBulkSubmit = () => {
    onBulkImport(bulkText);
    setBulkText('');
    setIsBulk(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 mb-6">
        <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-3">Mi Despensa</h2>
        <div className="grid grid-cols-2 gap-4">
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="bg-green-600 text-white p-4 rounded-xl font-bold text-xl shadow-md border-b-4 border-green-800"
          >
            ➕ Nuevo Item
          </button>
          <button 
            onClick={onScan}
            className="bg-purple-600 text-white p-4 rounded-xl font-bold text-xl shadow-md border-b-4 border-purple-800"
          >
            📸 Escanear
          </button>
        </div>
        <button 
          onClick={() => setIsBulk(!isBulk)}
          className="bg-slate-600 text-white p-3 rounded-xl font-bold text-lg shadow-md border-b-4 border-slate-800 w-full"
        >
          📄 Importar desde Excel (CSV)
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="bg-slate-100 p-6 rounded-2xl border-2 border-blue-400 space-y-4 shadow-inner">
          <h3 className="text-xl font-bold">Agregar Alimento</h3>
          <div>
            <label className="block font-bold mb-1">Nombre:</label>
            <input 
              type="text" 
              value={newName}
              onChange={e => setNewName(e.target.value)}
              className="w-full p-4 text-xl border-2 border-slate-300 rounded-lg"
              placeholder="Ej: Arroz"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1">Cantidad:</label>
              <input 
                type="number" 
                value={newQty}
                onChange={e => setNewQty(e.target.value)}
                className="w-full p-4 text-xl border-2 border-slate-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Unidad:</label>
              <select 
                value={newUnit}
                onChange={e => setNewUnit(e.target.value)}
                className="w-full p-4 text-xl border-2 border-slate-300 rounded-lg"
              >
                <option value="unidades">unidades</option>
                <option value="kg">kg</option>
                <option value="gr">gr</option>
                <option value="litro">litro</option>
                <option value="bolsa">bolsa</option>
                <option value="paquete">paquete</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl text-2xl font-bold">
            Guardar en Despensa
          </button>
        </form>
      )}

      {isBulk && (
        <div className="bg-slate-100 p-6 rounded-2xl border-2 border-slate-400 space-y-4 shadow-inner">
          <h3 className="text-xl font-bold">Importar Datos</h3>
          <p className="text-sm">Pegue texto con formato: Nombre,Cantidad</p>
          <textarea 
            value={bulkText}
            onChange={e => setBulkText(e.target.value)}
            className="w-full h-32 p-4 text-lg border-2 border-slate-300 rounded-lg"
            placeholder="Arroz,2,kg&#10;Pollo,1,unidad"
          />
          <button 
            onClick={handleBulkSubmit}
            className="w-full bg-slate-800 text-white py-4 rounded-xl text-xl font-bold"
          >
            Importar Ahora
          </button>
        </div>
      )}

      <div className="space-y-4">
        {inventory.length === 0 ? (
          <div className="text-center p-12 text-slate-400 font-bold border-4 border-dashed rounded-3xl">
            Tu despensa está vacía. <br/> Agrega algo para empezar.
          </div>
        ) : (
          inventory.map(item => (
            <div key={item.id} className="bg-white p-5 rounded-2xl border-4 border-slate-200 shadow-lg flex items-center justify-between group">
              <div className="flex-1">
                <h4 className="text-2xl font-bold capitalize">{item.name}</h4>
                <p className="text-xl text-slate-600 font-semibold">{item.quantity} {item.unit}</p>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => onUpdateQty(item.id, -1)}
                  className="bg-red-100 text-red-600 w-16 h-16 rounded-xl border-4 border-red-200 text-4xl font-black flex items-center justify-center"
                  aria-label="Restar uno"
                >
                  -
                </button>
                <button 
                  onClick={() => onUpdateQty(item.id, 1)}
                  className="bg-green-100 text-green-600 w-16 h-16 rounded-xl border-4 border-green-200 text-4xl font-black flex items-center justify-center"
                  aria-label="Sumar uno"
                >
                  +
                </button>
                <button 
                  onClick={() => { if(window.confirm('¿Eliminar definitivamente?')) onDelete(item.id); }}
                  className="bg-slate-100 text-slate-400 w-12 h-16 rounded-xl text-2xl flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors"
                  aria-label="Borrar"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default InventoryView;
