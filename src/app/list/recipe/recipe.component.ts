import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input('recipeElement') recipe: {}

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToModify(recipe){
    this.router.navigate(['/modify', recipe._id]);
  }

  goToPrevious(recipe){
    this.router.navigate(['/previous', recipe._id]);
  }
}
