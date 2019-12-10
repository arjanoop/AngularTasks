import { Component, OnInit } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(
    private channelService: UpdateDataService,
    private route: Router,
    private user:UserService
  ) {
    this.channelService.updateUser("","");
    this.channelService.updateHeaderLabelFlag(0);
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    });
    console.log()
  }

  formActionlogin() {
    if (this.loginForm.valid) {
      if(this.user.checkUser(this.loginForm.value.userName,this.loginForm.value.password)){
        this.channelService.updateUser(this.user.getUserRole(),this.user.getUserName());
        this.channelService.updateHeaderLabelFlag(1);
        this.route.navigate(["/content"]);
      }
      this.loginForm.reset();
    }
  }

  formActionclear() {
    this.loginForm.reset();
  }
}
