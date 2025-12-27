
import React from 'react';
import { Recipe, InventoryItem } from '../types';

interface Props {
  inventory: InventoryItem[];
  recipes: Recipe[];
  onAddToShopping: (name: string, quantity: number, unit: string) => void;
}

const RecipeBookView: React.FC<Props> = ({ inventory, recipes, onAddToShopping }) => {
  const getRecipeStatus = (recipe: Recipe) => {
    let missing = 0;
    const have: string[] = [];
    const lack: string[] = [];

    recipe.ingredients.forEach(ing => {
      const inStock = inventory.find(i => i.name.toLowerCase().includes(ing.name.toLowerCase()) && i.quantity > 0);
      if (inStock) {
        have.push(ing.name);
      } else {
        missing++;
        lack.push(ing.name);
      }
    });

    const total = recipe.ingredients.length;
    const availablePercent = ((total - missing) / total) * 100;

    let colorClass = "border-red-500";
    let bgClass = "bg-red-50";
    let label = "Te falta mucho";
    let status = "red";

    if (availablePercent >= 90) {
      colorClass = "border-green-500";
      bgClass = "bg-green-50";
      label = "Tienes todo";
      status = "green";
    } else if (availablePercent >= 50) {
      colorClass = "border-yellow-500";
      bgClass = "bg-yellow-50";
      label = "Te falta poco";
      status = "yellow";
    }

    return { colorClass, bgClass, label, have, lack, status };
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold border-l-8 border-blue-600 pl-3">¿Qué cocino hoy?</h2>
      <p className="text-lg text-slate-600 mb-4 font-semibold">Te mostramos qué platos puedes preparar con lo que tienes en tu despensa.</p>

      <div className="grid grid-cols-1 gap-6">
        {recipes.map(recipe => {
          const info = getRecipeStatus(recipe);
          return (
            <div key={recipe.id} className={`p-6 rounded-3xl border-4 ${info.colorClass} ${info.bgClass} shadow-lg transition-transform hover:scale-[1.01]`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{recipe.name}</h3>
                <div className={`px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest text-white shadow-sm ${
                  info.status === 'green' ? 'bg-green-600' : info.status === 'yellow' ? 'bg-yellow-500' : 'bg-red-600'
                }`}>
                  {info.label}
                </div>
              </div>

              <div className="mb-4 bg-white p-4 rounded-xl shadow-inner border-2 border-slate-200">
                <p className="font-bold text-slate-700 mb-2">Ingredientes:</p>
                <div className="flex flex-wrap gap-2">
                  {recipe.ingredients.map((ing, idx) => {
                    const hasIt = info.have.includes(ing.name);
                    return (
                      <span key={idx} className={`px-3 py-1 rounded-lg text-sm border-2 font-bold ${
                        hasIt ? 'bg-green-100 border-green-300 text-green-700' : 'bg-red-100 border-red-300 text-red-700'
                      }`}>
                        {hasIt ? '✅' : '❌'} {ing.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 gap-4">
                <div className="text-blue-900 font-bold">
                  <span className="text-sm block text-slate-500 uppercase">Costo aprox.</span>
                  <span className="text-2xl">S/ {recipe.estimatedPrice.toFixed(2)}</span>
                </div>
                
                {info.lack.length > 0 && (
                  <button 
                    onClick={() => {
                      info.lack.forEach(item => onAddToShopping(item, 1, 'unidad'));
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-lg border-b-4 border-blue-900 active:bg-blue-700"
                  >
                    Pedir lo que falta
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeBookView;
