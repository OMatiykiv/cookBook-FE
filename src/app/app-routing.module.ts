import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';
import { NewRecipeComponent } from './list/new-recipe/new-recipe.component';
import { ModifyComponent } from './list/recipe/modify/modify.component';
import { PreviousVersionsComponent } from './list/recipe/previous-versions/previous-versions.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'new', component: NewRecipeComponent },
  { path: 'modify/:id', component: ModifyComponent },
  { path: 'previous/:id', component: PreviousVersionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
