import { Component, OnInit, Input, NgModule } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Article } from "../article";
import { Router } from "@angular/router";
import { ArticleListDataService } from "../article-list-data.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  headerLabel = "Welcome to NewsFeeds";
  filterLabel = "";
  sourcesSet = new Set();
  navbarHidingFlag: boolean = true;
  sources: Article[];

  constructor(
    private updateDataService: UpdateDataService,
    private articleDataService: ArticleListDataService
  ) {}

  ngOnInit() {
    this.articleDataService.getArticleCategoryList().subscribe(data => {
      data.forEach(element => {
        this.sourcesSet.add(element);
      });
    });
    this.updateDataService.updateHeading$.subscribe(value => {
      this.headerLabel = value;
    });
    this.updateDataService.updateHeaderLabelFlag$.subscribe(value => {
      if (value === 1) {
        this.navbarHidingFlag = true;
      } else {
        this.navbarHidingFlag = false;
      }
    });
  }

  onChangeUpdate(value: string) {
    if (value === "All Sources") {
      this.updateDataService.updateHeading("Welcome to NewsFeeds");
    } else {
      this.updateDataService.updateHeading(value);
    }
    this.updateDataService.updateSource(value);
  }

  filterArticles() {
    let filterPattern = this.filterLabel;
    this.filterLabel = "";
    this.updateDataService.filterArticles(filterPattern);
    if (filterPattern != "") {
      this.updateDataService.updateHeading(
        'Search Result for "${filterPattern}"'
      );
    } else {
      this.updateDataService.updateHeading("Welcome to NewsFeeds");
    }
  }

  navbarStatus() {
    this.updateDataService.updateHeading("Welcome to NewsFeeds");
    this.updateDataService.updateHeaderLabelFlag(1);
    this.updateDataService.updateSource("All Sources");
  }

  updateHeader() {
    this.updateDataService.updateHeading("Create Article");
  }
}
