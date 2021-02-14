export interface Ingredient {
  name: string;
}

export interface RecipeIngredient {
  ingredient: Ingredient;
  amount: number;
  measurement: Measurement;
}

export interface Recipe {
  name: string;
  ingredients: RecipeIngredient[];
  method: string[];
}

export interface Measurement {
  short: string;
  long: string;
}

export interface Measurements {
  [s: string]: Measurement;
}

export const measurementData: Measurements = {
  TABLESPOON: { short: 'Tbsp', long: 'Tablespoon' },
  TEASPOON: { short: 'Tsp', long: 'Teaspoon' },
  CUP: { short: 'Cup', long: 'Cup' },
  LITRE: { short: 'L', long: 'Litre' },
  MILLILITER: { short: 'ml', long: 'Millilitre' },
  GRAM: { short: 'g', long: 'gram' },
  KILOGRAM: { short: 'Kg', long: 'Kilogram' },
};
