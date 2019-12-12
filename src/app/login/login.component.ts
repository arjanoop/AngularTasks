import { Component, OnInit } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  userName: string = "";
  password: string = "";

  constructor(
    private channelService: UpdateDataService,
    private route: Router,
    private user: UserService
  ) {
    this.channelService.updateHeaderLabelFlag(0);
  }

  ngOnInit() {
    if (this.channelService.getUserRole() === "Admin") {
      this.route.navigate(["/dashboard"]);
      this.channelService.updateHeaderLabelFlag(0);
    }else if (this.channelService.getUserRole() !== "") {
      this.route.navigate(["/content"]);
      this.channelService.updateHeaderLabelFlag(1);
    }else{
      this.route.navigate(["/login"]);
    }
  }

  formActionlogin(loginForm: any) {
    if (loginForm.valid) {
      if (
        this.user.checkUser(loginForm.value.userName, loginForm.value.password)
      ) {
        this.channelService.updateUser(
          this.user.getUserRole(),
          this.user.getUserName()
        );
        if(this.user.getUserRole()==="Admin"){
          this.route.navigate(["/dashboard"]);
        }else{

          this.route.navigate(["/content"]);
          this.channelService.updateHeaderLabelFlag(1);
        }
      }
      loginForm.reset();
    }
  }

  formActionclear(loginForm: any) {
    loginForm.reset();
  }
}
