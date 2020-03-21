import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipes: {}

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRecipes()
  }

  getRecipes() {
    this.http.get(
      'https://simple-cookbook-app.herokuapp.com/api/recipe'
    ).subscribe(getRecipes => {
      this.recipes = getRecipes
    })
  }
}
