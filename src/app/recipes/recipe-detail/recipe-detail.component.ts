import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.recipe = this.recipeService.getRecipeById(+params['id']);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
