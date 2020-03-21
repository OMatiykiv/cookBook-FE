import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-versions',
  templateUrl: './previous-versions.component.html',
  styleUrls: ['./previous-versions.component.css']
})
export class PreviousVersionsComponent implements OnInit {
  id: string;
  recipes: {};

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    this.getPreviousRecipe(this.id)
  }

  getPreviousRecipe(id: string) {
    this.http.get(
      `https://simple-cookbook-app.herokuapp.com/api/previous/${id}`
    ).subscribe(getRecipes => {
      this.recipes = getRecipes
    })
  }

}
