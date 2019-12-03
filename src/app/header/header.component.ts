import { Component, OnInit, Input, NgModule } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Article } from "../article";
import { Router } from "@angular/router";
import { ArticleListDataService } from "../article-list-data.service";
import { element } from "protractor";

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
    private route: Router,
    private articleDataSource: ArticleListDataService
  ) {}

  ngOnInit() {
    //Fetching the categoryList and strong it in sourceSet
    this.articleDataSource.getArticleCategoryList().subscribe(data => {
      data.forEach(element => {
        this.sourcesSet.add(element);
      });
    });
    //updating hadding
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
    this.updateDataService.updateHeading(value);
    this.updateDataService.updateSource(value);
  }

  filterArticles() {
    let filterPattern = this.filterLabel;
    this.filterLabel = "";
    this.updateDataService.filterArticles(filterPattern);
    if (filterPattern != "") {
      this.updateDataService.updateHeading('Search Result for "' + filterPattern + '"');
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
