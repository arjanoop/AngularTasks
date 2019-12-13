import { Component, OnInit } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"]
})
export class AdminDashboardComponent implements OnInit {
  constructor(
    private updateDataService: UpdateDataService,
    private route: Router
  ) {}

  ngOnInit() {
    this.updateDataService.updateHeaderLabelFlag(0);
  }

  logout() {
    this.updateDataService.updateUser("", "");
    this.route.navigate(["/login"]);
  }

  gotoContentPage() {
    this.updateDataService.updateHeaderLabelFlag(1);
    this.route.navigate(["/content"]);
  }

  gotoCreateArticlePage() {
    this.route.navigate(["/create-article"]);
  }
  gotoDashboardPage() {
    this.route.navigate(["/dashboard"]);
  }
}
