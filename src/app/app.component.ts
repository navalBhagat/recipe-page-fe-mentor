import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <main class="white-box">
      <img
        class="recipe-image"
        alt="image of {{ recipe.recipeName }}"
        [src]="recipe.imagePath"
      />
      <header class="recipe-heading">{{ recipe.recipeName }}</header>
      <section class="introduction-prep">
        <p class="introduction">{{ recipe.introduction }}</p>
        <div class="prep">
          <span class="prep-heading">Preparation time</span>
          <ul class="prep-items">
            <li *ngFor="let item of recipe.preparationItems">
              <strong>{{ item.name }}:</strong> {{ item.time }}
            </li>
          </ul>
        </div>
      </section>
      <section class="ingredients">
        <p class="ingredient-heading">Ingredients</p>
        <ul class="ingredient-items">
          <li *ngFor="let item of recipe.ingredients">
            {{ item.name }}
          </li>
        </ul>
      </section>
      <section class="instructions">
        <p class="instruction-heading">Instruction</p>
        <ol class="instruction-items">
          <li *ngFor="let item of recipe.instructions">
            <strong>{{ item.name }}</strong
            >: {{ item.description }}
          </li>
        </ol>
      </section>
      <section class="nutrition">
        <p class="nutrition-heading">Nutrition</p>
        <span>{{ recipe.nutrition.description }}</span>
        <table class="nutrition-table">
          <tbody>
            <tr *ngFor="let item of recipe.nutrition.nutritionItems">
              <td>{{ item.name }}</td>
              <td class="nutrition-amounts">
                {{ item.amount }}{{ item.unit }}
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
    <section class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by
      <a href="https://www.frontendmentor.io/profile/navalBhagat"
        >Naval Bhagat</a
      >.
    </section>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  recipe: Recipe = {
    imagePath: 'assets/images/image-omelette.jpeg',
    recipeName: 'Simple Omelette Recipe',
    introduction:
      'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
    preparationItems: [
      {
        name: 'Total',
        time: 'Approximately 10 minutes',
      },
      {
        name: 'Preparation',
        time: '5 minutes',
      },
      {
        name: 'Cooking',
        time: '5 minutes',
      },
    ],
    ingredients: [
      { name: '2-3 large eggs' },
      { name: 'Salt, to taste' },
      { name: 'Pepper, to taste' },
      { name: '1 tablespoon of butter or oil' },
      {
        name: 'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
      },
    ],
    instructions: [
      {
        name: 'Beat the eggs',
        description:
          'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
      },
      {
        name: 'Heat the pan',
        description:
          'Place a non-stick frying pan over medium heat and add butter or oil.',
      },
      {
        name: 'Cook the omelette',
        description:
          'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
      },
      {
        name: 'Add fillings (optional)',
        description:
          'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
      },
      {
        name: 'Fold and serve',
        description:
          'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
      },
      {
        name: 'Enjoy',
        description: 'Serve hot, with additional salt and pepper if needed.',
      },
    ],
    nutrition: {
      description:
        'The table below shows nutritional values per serving without the additional fillings.',
      nutritionItems: [
        {
          name: 'Calories',
          amount: 277,
          unit: 'kcal',
        },
        {
          name: 'Carb',
          amount: 0,
          unit: 'g',
        },
        {
          name: 'Protein',
          amount: 20,
          unit: 'g',
        },
        {
          name: 'Fat',
          amount: 22,
          unit: 'g',
        },
      ],
    },
  };
}
