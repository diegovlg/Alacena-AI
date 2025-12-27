
import React, { useState, useEffect, useCallback } from 'react';
import { View, InventoryItem, ShoppingListItem, Recipe } from './types';
import { INITIAL_INVENTORY, RECIPES, MOCK_PRICES } from './constants';
import InventoryView from './components/InventoryView';
import RecipeBookView from './components/RecipeBookView';
import ShoppingListView from './components/ShoppingListView';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('inventory');
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [shoppingList, setShoppingList] = useState<ShoppingListItem[]>([]);
  const [showNotification, setShowNotification] = useState<{message: string, type: 'success' | 'info' | 'error'} | null>(null);

  // Load Data
  useEffect(() => {
    const savedInventory = localStorage.getItem('alacena_inventory');
    const savedShopping = localStorage.getItem('alacena_shopping');

    if (savedInventory) {
      setInventory(JSON.parse(savedInventory));
    } else {
      setInventory(INITIAL_INVENTORY);
    }

    if (savedShopping) {
      setShoppingList(JSON.parse(savedShopping));
    }
  }, []);

  // Save Data
  useEffect(() => {
    if (inventory.length > 0) {
      localStorage.setItem('alacena_inventory', JSON.stringify(inventory));
    }
    localStorage.setItem('alacena_shopping', JSON.stringify(shoppingList));
  }, [inventory, shoppingList]);

  const notify = useCallback((message: string, type: 'success' | 'info' | 'error' = 'info') => {
    setShowNotification({ message, type });
    setTimeout(() => setShowNotification(null), 3000);
  }, []);

  // Inventory Handlers
  const addInventoryItem = (name: string, quantity: number, unit: string) => {
    const newItem: InventoryItem = {
      id: Date.now().toString(),
      name: name.trim(),
      quantity,
      unit
    };
    setInventory(prev => [...prev, newItem]);
    notify(`Se agregó ${name} a la despensa`, 'success');
  };

  const updateInventoryQuantity = (id: string, delta: number) => {
    setInventory(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          if (newQty === 0 && item.quantity > 0) {
            if (window.confirm(`¿Quieres agregar "${item.name}" a tu lista de compras?`)) {
                addToShoppingList(item.name, 1, item.unit);
            }
          }
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0 || item.id === id); // Keep items for now even if 0 if needed, but the UI filters
    });
  };

  const deleteInventoryItem = (id: string) => {
    setInventory(prev => prev.filter(item => item.id !== id));
  };

  const importBulkData = (csv: string) => {
    const lines = csv.split('\n');
    const newItems: InventoryItem[] = [];
    lines.forEach(line => {
      const parts = line.split(',');
      if (parts.length >= 2) {
        newItems.push({
          id: Date.now().toString() + Math.random(),
          name: parts[0].trim(),
          quantity: parseFloat(parts[1]) || 1,
          unit: parts[2] ? parts[2].trim() : 'unidades'
        });
      }
    });
    setInventory(prev => [...prev, ...newItems]);
    notify(`${newItems.length} productos importados`, 'success');
  };

  const scanSimulate = () => {
    const demoItems = [
      { name: 'Leche', quantity: 2, unit: 'unidades' },
      { name: 'Pan', quantity: 1, unit: 'paquete' },
      { name: 'Avena', quantity: 1, unit: 'bolsa' }
    ];
    demoItems.forEach(i => addInventoryItem(i.name, i.quantity, i.unit));
    notify('Escaneo completado. Se detectaron 3 productos.', 'success');
  };

  // Shopping Handlers
  const addToShoppingList = (name: string, quantity: number, unit: string) => {
    const price = MOCK_PRICES[name] || 5.00; // Fallback price
    const newItem: ShoppingListItem = {
      id: Date.now().toString(),
      name,
      quantity,
      unit,
      priceEstimate: price,
      completed: false
    };
    setShoppingList(prev => [...prev, newItem]);
    notify(`"${name}" agregado a la lista de compras`, 'info');
  };

  const toggleShoppingItem = (id: string) => {
    setShoppingList(prev => prev.map(item => {
      if (item.id === id) return { ...item, completed: !item.completed };
      return item;
    }));
  };

  const removeShoppingItem = (id: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  };

  const clearCompletedShopping = () => {
    setShoppingList(prev => prev.filter(item => !item.completed));
  };

  return (
    <div className="flex flex-col min-h-screen max-w-2xl mx-auto shadow-xl bg-white relative">
      <Header />

      <main className="flex-1 pb-32 pt-4 px-4 overflow-y-auto">
        {showNotification && (
          <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-xl shadow-2xl text-white font-bold text-center border-4 border-white ${
            showNotification.type === 'success' ? 'bg-green-600' : 
            showNotification.type === 'error' ? 'bg-red-600' : 'bg-blue-600'
          }`}>
            {showNotification.message}
          </div>
        )}

        {currentView === 'inventory' && (
          <InventoryView 
            inventory={inventory} 
            onUpdateQty={updateInventoryQuantity}
            onDelete={deleteInventoryItem}
            onAdd={addInventoryItem}
            onBulkImport={importBulkData}
            onScan={scanSimulate}
          />
        )}

        {currentView === 'recipes' && (
          <RecipeBookView 
            inventory={inventory} 
            recipes={RECIPES}
            onAddToShopping={addToShoppingList}
          />
        )}

        {currentView === 'shopping' && (
          <ShoppingListView 
            shoppingList={shoppingList} 
            onToggle={toggleShoppingItem}
            onRemove={removeShoppingItem}
            onClearCompleted={clearCompletedShopping}
            onManualAdd={addToShoppingList}
          />
        )}
      </main>

      <Navigation currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
