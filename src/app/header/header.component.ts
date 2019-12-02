import { Component, OnInit, Input, NgModule } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Article } from "../article";
import { Router } from "@angular/router";

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

  @Input() sources: Article[];

  constructor(
    private updateDataService: UpdateDataService,
    private route: Router
  ) {}

  ngOnInit() {
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
    this.sources.forEach(Element => {
      this.sourcesSet.add(Element.category);
    });
  }

  onChangeUpdate(value: string) {
    const selectedSource = this.sources.find(
      source => source.category === value
    );
    this.headerLabel = selectedSource
      ? selectedSource.category
      : "Welcome to NewsFeeds";
    this.updateDataService.updateSource(value);
  }

  filterArticles() {
    let filterPattern = this.filterLabel;
    this.filterLabel = "";
    if (filterPattern != "") {
      this.headerLabel = 'Search Result for "' + filterPattern + '"';
    } else {
      this.headerLabel = "Welcome to NewsFeeds";
    }
    this.updateDataService.filterArticles(filterPattern);
  }

  navbarStatus() {
    this.updateDataService.updateHeading("Welcome to NewsFeeds");
    this.updateDataService.updateHeaderLabelFlag(1);
  }

  updateHeader() {
    this.updateDataService.updateHeading("Create Article");
  }
}
