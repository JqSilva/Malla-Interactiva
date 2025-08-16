// malla.ts
export interface MallaData {
  name: string;
  malla: {
    [key: string]: Array<[string, string, number, number, string, string[], string]>;
  };
  categories: {
    [key: string]: [string, string];
  };
}

// Data por defecto
export let mallaData: MallaData = {
  "name": "DEFAULT",
  "malla": {
    "s1": [
      ["Materia Ejemplo 1", "DEF-111", 3, 5, "CC", [], "A"],
      ["Materia Ejemplo 2", "DEF-112", 3, 5, "FI", [], "A"]
    ],
    "s2": [
      ["Materia Ejemplo 3", "DEF-121", 3, 5, "CC", [], "A"],
      ["Materia Ejemplo 4", "DEF-122", 3, 5, "FI", [], "A"]
    ]
  },
  "categories": {
    "CC": ["#2E58A7", "Ciencias de la Computación"],
    "FI": ["#00838F", "Fundamentos de la Ingeniería"]
  }
};

// Función para actualizar la malla
export function actualizarMalla(nuevaData: MallaData) {
  mallaData = nuevaData;
  
  // Disparar evento para notificar el cambio
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('mallaUpdated', {
      detail: mallaData
    }));
  }
}

// Función para obtener la malla actual
export function obtenerMalla(): MallaData {
  return mallaData;
}