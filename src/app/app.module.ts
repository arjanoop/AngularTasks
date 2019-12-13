import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContentComponent } from "./content/content.component";
import { FooterComponent } from "./footer/footer.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { ArticleComponent } from "./article/article.component";
import { ArticleListComponent } from "./article-list/article-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { ArticleListDataService } from "./article-list-data.service";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { ArticleCommentComponent } from "./article-comment/article-comment.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CreateArticleComponent,
    ArticleComponent,
    ArticleListComponent,
    LoginComponent,
    ArticleCommentComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ArticleListDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
