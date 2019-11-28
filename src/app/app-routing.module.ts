import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';


const appRoutes: Routes = [
    { path:'', component : ContentComponent},
    { path:'content', component : ContentComponent},
    { path:'article', component : ArticleComponent},
    { path:'create-article', component : CreateArticleComponent}
  ];

  @NgModule({
      imports : [RouterModule.forRoot(appRoutes)],
      exports : [RouterModule]
  })

  export class AppRoutingModule{

  }