import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { ArticleListService } from './article-list.service';
import { DataSourceComponent } from './data-source/data-source.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CreateArticleComponent,
    ArticleComponent,
    ArticleListComponent,
    MainComponent,
    DataSourceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
