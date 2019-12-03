import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../article";
import { UpdateDataService } from "../update-data.service";
import { ArticleListDataService } from "../article-list-data.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  articleListData: Article[];
  filteredArticles: Article[];

  constructor(
    private updateDataService: UpdateDataService,
    private articleDataSource: ArticleListDataService
  ) {}

  ngOnInit() {
    this.articleListData = this.articleDataSource.getArticleList();
    this.filteredArticles = this.articleListData.slice();
    this.updateDataService.updateSource$.subscribe(value => {
      if (value === "All Sources") {
        this.articleListData = this.filteredArticles;
        return;
      }
      this.articleListData = this.filteredArticles.filter(
        source => source.category === value
      );
    });
    this.updateDataService.filterArticles$.subscribe(pattern => {
      if (pattern === "All Sources") {
        this.articleListData = this.filteredArticles;
        return;
      }
      this.articleListData = this.filteredArticles.filter(
        source =>
          source.category.includes(pattern) ||
          source.content.includes(pattern) ||
          source.title.includes(pattern)
      );
    });
  }
}
