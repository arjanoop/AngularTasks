import { Component, OnInit, Input, NgModule } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Article } from "../article";
import { ArticleListDataService } from "../article-list-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userLoginStatus: boolean = false;
  userRole: string = "";
  adminLoginFlag: boolean = false;
  loginFlag: boolean = false;
  userNameLabel: string = "";
  headerLabel: string = "Welcome to NewsFeeds";
  filterLabel: string = "";
  sourcesSet = new Set();
  navbarHidingFlag: boolean = true;
  sources: Article[];

  constructor(
    private updateDataService: UpdateDataService,
    private articleDataService: ArticleListDataService,
    private route: Router
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
    this.updateDataService.updateUserRole$.subscribe(role => {
      if (role !== "") {
        this.userLoginStatus = true;
        this.loginFlag = true;
        if (role === "Admin") {
          this.adminLoginFlag = true;
        }
      } else {
        this.userLoginStatus = false;
        this.adminLoginFlag = false;
        this.loginFlag = false;
      }
    });
    this.updateDataService.updateUserName$.subscribe(name => {
      this.userNameLabel = name;
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
        `Search Result for ${filterPattern}`
      );
    } else {
      this.updateDataService.updateHeading("Welcome to NewsFeeds");
    }
  }

  navbarStatus() {
    if (this.updateDataService.getUserRole() === "Admin") {
      this.updateDataService.updateHeading("Welcome to NewsFeeds");
      this.updateDataService.updateHeaderLabelFlag(0);
      this.route.navigate(["/dashboard"]);
    } else if (this.userLoginStatus === true) {
      this.updateDataService.updateHeading("Welcome to NewsFeeds");
      this.updateDataService.updateHeaderLabelFlag(1);
      this.updateDataService.updateSource("All Sources");
      this.route.navigate(["/content"]);
    } else {
      this.updateDataService.updateHeaderLabelFlag(0);
      this.route.navigate(["/login"]);
    }
  }

  updateHeader() {
    this.updateDataService.updateHeading("Create Article");
  }

  logout() {
    this.updateDataService.updateUser("", "");
    this.route.navigate(["/login"]);
  }

  gotoDashboardPage() {
    this.route.navigate(["/dashboard"]);
  }
}
