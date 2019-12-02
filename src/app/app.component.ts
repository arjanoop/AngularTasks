import { Component, OnInit } from "@angular/core";
import content from "../assets/content.json";
import { Article } from "./article.js";
import { ArticleListDataService } from "./article-list-data.service.js";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(public newsfeeds: ArticleListDataService) {}
  ngOnInit() {}
}
