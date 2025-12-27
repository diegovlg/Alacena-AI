
export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  estimatedPrice: number; // In Soles (PEN)
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
}

export interface ShoppingListItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  priceEstimate: number;
  completed: boolean;
}

export type View = 'inventory' | 'recipes' | 'shopping';
