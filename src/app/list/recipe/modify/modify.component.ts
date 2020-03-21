import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  id: string;
  recipe: {} = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    if(!this.recipe) {
      this.getRecipe(this.id)
    }
  }

  getRecipe(id) {
    this.http.get(
      `https://simple-cookbook-app.herokuapp.com/api/recipe/${id}`
    ).subscribe(getRecipe => {
      this.recipe = getRecipe
    })
  }

  goToList(){
    this.router.navigate(['/list']);
  }

  updateRecipe(putData : {name: string, author: string, description: string}) {    
    this.http.put(
      `https://simple-cookbook-app.herokuapp.com/api/recipe/${this.id}`, 
      putData
    ).subscribe(responseData => {
      alert(`Your recipe of ${responseData['name']} was successfully updated`)
    })
    setTimeout(() => { this.goToList() }, 1000);
  }
}
