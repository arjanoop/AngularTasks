import { Component, OnInit } from "@angular/core";
import { UpdateDataService } from "../update-data.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;

  constructor(
    private channelService: UpdateDataService,
    private route: Router
  ) {
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
      if(this.loginForm.value.userName === "admin" && this.loginForm.value.password === "admin"){
        this.channelService.updateHeaderLabelFlag(1);
        this.route.navigate(["/content"]);
      }
      this.loginForm.reset();
    }
  }

  formActionclear() {
    this.channelService.updateHeaderLabelFlag(0);
    this.route.navigate(["/login"]);
  }
}
