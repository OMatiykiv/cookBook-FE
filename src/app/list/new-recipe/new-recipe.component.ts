import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToList(){
    this.router.navigate(['/list']);
  }

  createNewRecipe(postData : {name: string, author: string, description: string}) {
    this.http.post(
      'https://simple-cookbook-app.herokuapp.com/api/recipe', 
      postData
    ).subscribe(responseData => {
      alert(`Your recipe of ${responseData['name']} was successfully created`)
    })
    setTimeout(() => { this.goToList() }, 1000);
  }
}
