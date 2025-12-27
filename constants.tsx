
import { Recipe, InventoryItem } from './types';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    name: 'Lomo Saltado',
    ingredients: [
      { name: 'Carne de Res', amount: 500, unit: 'gr' },
      { name: 'Cebolla Roja', amount: 2, unit: 'unidades' },
      { name: 'Tomate', amount: 2, unit: 'unidades' },
      { name: 'Papa', amount: 3, unit: 'unidades' },
      { name: 'Arroz', amount: 250, unit: 'gr' }
    ],
    estimatedPrice: 35
  },
  {
    id: '2',
    name: 'Ají de Gallina',
    ingredients: [
      { name: 'Pollo', amount: 1, unit: 'unidad' },
      { name: 'Ají Amarillo', amount: 5, unit: 'unidades' },
      { name: 'Pan de Molde', amount: 4, unit: 'tajadas' },
      { name: 'Leche Evaporada', amount: 1, unit: 'lata' },
      { name: 'Papa Blanca', amount: 4, unit: 'unidades' }
    ],
    estimatedPrice: 28
  },
  {
    id: '3',
    name: 'Papa a la Huancaína',
    ingredients: [
      { name: 'Papa Amarilla', amount: 6, unit: 'unidades' },
      { name: 'Queso Fresco', amount: 200, unit: 'gr' },
      { name: 'Galleta de Soda', amount: 1, unit: 'paquete' },
      { name: 'Ají Amarillo', amount: 3, unit: 'unidades' },
      { name: 'Aceituna', amount: 4, unit: 'unidades' }
    ],
    estimatedPrice: 15
  },
  {
    id: '4',
    name: 'Causa Limeña',
    ingredients: [
      { name: 'Papa Amarilla', amount: 1, unit: 'kg' },
      { name: 'Atún', amount: 1, unit: 'lata' },
      { name: 'Palta', amount: 1, unit: 'unidad' },
      { name: 'Limón', amount: 3, unit: 'unidades' },
      { name: 'Mayonesa', amount: 100, unit: 'gr' }
    ],
    estimatedPrice: 22
  },
  {
    id: '5',
    name: 'Arroz con Pollo',
    ingredients: [
      { name: 'Pollo', amount: 4, unit: 'presas' },
      { name: 'Arroz', amount: 500, unit: 'gr' },
      { name: 'Culantro', amount: 100, unit: 'gr' },
      { name: 'Alverjitas', amount: 100, unit: 'gr' },
      { name: 'Zanahoria', amount: 1, unit: 'unidad' }
    ],
    estimatedPrice: 25
  },
  {
    id: '6',
    name: 'Tallarines Verdes',
    ingredients: [
      { name: 'Tallarines', amount: 500, unit: 'gr' },
      { name: 'Espinaca', amount: 200, unit: 'gr' },
      { name: 'Albahaca', amount: 50, unit: 'gr' },
      { name: 'Queso Fresco', amount: 150, unit: 'gr' },
      { name: 'Bistec', amount: 2, unit: 'unidades' }
    ],
    estimatedPrice: 30
  },
  {
    id: '7',
    name: 'Seco de Res',
    ingredients: [
      { name: 'Carne de Res', amount: 500, unit: 'gr' },
      { name: 'Culantro', amount: 100, unit: 'gr' },
      { name: 'Chicha de Jora', amount: 1, unit: 'taza' },
      { name: 'Frijoles', amount: 250, unit: 'gr' },
      { name: 'Arroz', amount: 250, unit: 'gr' }
    ],
    estimatedPrice: 32
  },
  {
    id: '8',
    name: 'Tacu Tacu',
    ingredients: [
      { name: 'Frijoles', amount: 300, unit: 'gr' },
      { name: 'Arroz', amount: 300, unit: 'gr' },
      { name: 'Huevo', amount: 1, unit: 'unidad' },
      { name: 'Plátano frito', amount: 1, unit: 'unidad' },
      { name: 'Bistec', amount: 1, unit: 'unidad' }
    ],
    estimatedPrice: 20
  },
  {
    id: '9',
    name: 'Lentejitas con Arroz',
    ingredients: [
      { name: 'Lentejas', amount: 250, unit: 'gr' },
      { name: 'Arroz', amount: 250, unit: 'gr' },
      { name: 'Cebolla', amount: 1, unit: 'unidad' },
      { name: 'Tocino', amount: 50, unit: 'gr' },
      { name: 'Pescado frito', amount: 1, unit: 'unidad' }
    ],
    estimatedPrice: 18
  },
  {
    id: '10',
    name: 'Estofado de Pollo',
    ingredients: [
      { name: 'Pollo', amount: 4, unit: 'presas' },
      { name: 'Papa Blanca', amount: 3, unit: 'unidades' },
      { name: 'Zanahoria', amount: 2, unit: 'unidades' },
      { name: 'Tomate', amount: 2, unit: 'unidades' },
      { name: 'Arroz', amount: 250, unit: 'gr' }
    ],
    estimatedPrice: 24
  },
  {
    id: '11',
    name: 'Adobo de Cerdo',
    ingredients: [
      { name: 'Carne de Cerdo', amount: 500, unit: 'gr' },
      { name: 'Chicha de Jora', amount: 2, unit: 'tazas' },
      { name: 'Ají Panca', amount: 3, unit: 'cucharadas' },
      { name: 'Cebolla Roja', amount: 2, unit: 'unidades' },
      { name: 'Camote', amount: 2, unit: 'unidades' }
    ],
    estimatedPrice: 26
  },
  {
    id: '12',
    name: 'Carapulca',
    ingredients: [
      { name: 'Papa Seca', amount: 250, unit: 'gr' },
      { name: 'Chancho', amount: 400, unit: 'gr' },
      { name: 'Ají Panca', amount: 2, unit: 'cucharadas' },
      { name: 'Maní Tostado', amount: 50, unit: 'gr' },
      { name: 'Arroz', amount: 250, unit: 'gr' }
    ],
    estimatedPrice: 22
  },
  {
    id: '13',
    name: 'Locro de Zapallo',
    ingredients: [
      { name: 'Zapallo Macre', amount: 500, unit: 'gr' },
      { name: 'Papa Amarilla', amount: 2, unit: 'unidades' },
      { name: 'Choclo', amount: 1, unit: 'unidad' },
      { name: 'Queso Fresco', amount: 100, unit: 'gr' },
      { name: 'Arroz', amount: 250, unit: 'gr' }
    ],
    estimatedPrice: 16
  },
  {
    id: '14',
    name: 'Chupe de Pescado',
    ingredients: [
      { name: 'Pescado', amount: 500, unit: 'gr' },
      { name: 'Arroz', amount: 100, unit: 'gr' },
      { name: 'Huevo', amount: 2, unit: 'unidades' },
      { name: 'Leche Evaporada', amount: 1, unit: 'taza' },
      { name: 'Habas', amount: 100, unit: 'gr' }
    ],
    estimatedPrice: 28
  },
  {
    id: '15',
    name: 'Tallarines Rojos con Pollo',
    ingredients: [
      { name: 'Tallarines', amount: 500, unit: 'gr' },
      { name: 'Pollo', amount: 2, unit: 'presas' },
      { name: 'Zanahoria', amount: 1, unit: 'unidad' },
      { name: 'Hongos y Laurel', amount: 1, unit: 'sobres' },
      { name: 'Tuco', amount: 1, unit: 'sobre' }
    ],
    estimatedPrice: 22
  }
];

export const INITIAL_INVENTORY: InventoryItem[] = [
  { id: 'item-1', name: 'Arroz', quantity: 1, unit: 'kg' },
  { id: 'item-2', name: 'Papa', quantity: 5, unit: 'unidades' },
  { id: 'item-3', name: 'Cebolla Roja', quantity: 2, unit: 'unidades' },
  { id: 'item-4', name: 'Aceite', quantity: 1, unit: 'litro' }
];

export const MOCK_PRICES: Record<string, number> = {
  'Carne de Res': 32,
  'Cebolla Roja': 3,
  'Tomate': 4,
  'Papa': 2.5,
  'Arroz': 4,
  'Pollo': 12,
  'Ají Amarillo': 6,
  'Pan de Molde': 8,
  'Leche Evaporada': 4.5,
  'Papa Amarilla': 4,
  'Queso Fresco': 18,
  'Galleta de Soda': 1,
  'Aceituna': 10,
  'Atún': 5.5,
  'Palta': 10,
  'Limón': 4,
  'Mayonesa': 3,
  'Culantro': 2,
  'Alverjitas': 5,
  'Zanahoria': 2,
  'Tallarines': 5,
  'Espinaca': 3,
  'Albahaca': 2,
  'Bistec': 15,
  'Chicha de Jora': 4,
  'Frijoles': 8,
  'Huevo': 0.8,
  'Plátano frito': 1.5,
  'Lentejas': 7,
  'Tocino': 10,
  'Pescado frito': 10,
  'Ají Panca': 2,
  'Camote': 3,
  'Papa Seca': 8,
  'Maní Tostado': 4,
  'Zapallo Macre': 3,
  'Choclo': 2,
  'Pescado': 25,
  'Habas': 4,
  'Hongos y Laurel': 1,
  'Tuco': 1.5,
  'Aceite': 8
};
