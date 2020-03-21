import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListComponent } from './list/list.component';
import { RecipeComponent } from './list/recipe/recipe.component';
import { NewRecipeComponent } from './list/new-recipe/new-recipe.component';
import { ModifyComponent } from './list/recipe/modify/modify.component';
import { PreviousVersionsComponent } from './list/recipe/previous-versions/previous-versions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ListComponent,
    RecipeComponent,
    NewRecipeComponent,
    ModifyComponent,
    PreviousVersionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
