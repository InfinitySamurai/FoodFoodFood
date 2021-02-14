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
  TABLESPOON: { short: 'Tbsp', long: 'Tablespoons' },
  TEASPOON: { short: 'Tsp', long: 'Teaspoons' },
  CUP: { short: 'Cup', long: 'Cups' },
  LITRE: { short: 'L', long: 'Litres' },
  MILLILITER: { short: 'ml', long: 'Millilitres' },
  GRAM: { short: 'g', long: 'grams' },
  KILOGRAM: { short: 'Kg', long: 'Kilograms' },
};
