import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../article";
import { ArticleDataService } from "../article-data.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  data: Article;
  constructor(
    private route: ActivatedRoute,
    private dataService: ArticleDataService
  ) {}
  ngOnInit() {
    this.data = this.dataService.getArtcileData();
  }
}
