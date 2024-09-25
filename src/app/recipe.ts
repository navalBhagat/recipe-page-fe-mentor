export interface Recipe {
  imagePath: string;
  recipeName: string;
  introduction: string;
  preparationItems: Preparation[];
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrition: Nutrition;
}

export interface Preparation {
  name: string;
  time: string;
}

export interface Ingredient {
  name: string;
}

export interface Instruction {
  name: string;
  description: string;
}

export interface Nutrition {
  description: string;
  nutritionItems: NutritionItem[];
}

export interface NutritionItem {
  name: string;
  amount: number;
  unit: string;
}
