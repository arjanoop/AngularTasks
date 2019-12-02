import { Component, OnInit } from "@angular/core";
import content from "../assets/content.json";
import { Article } from "./article.js";
import { ArticleListService } from "./article-list.service.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  static refrenceObject: ArticleListService;
  articleListData: Article[];

  constructor(public newsfeeds: ArticleListService) {
    this.articleListData = content;
    this.newsfeeds.setArticleList(this.articleListData);
  }

  ngOnInit() {
    AppComponent.refrenceObject = this.newsfeeds;
  }
}
