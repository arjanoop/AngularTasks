import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { ArticleComponent } from "./article/article.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "content", component: ContentComponent },
  { path: "article", component: ArticleComponent },
  { path: "create-article", component: CreateArticleComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
