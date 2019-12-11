import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { UpdateDataService } from "./update-data.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticUserGuardService implements CanActivate {
  constructor(
    private route: Router,
    private updateDataService: UpdateDataService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.updateDataService.getUserRole());

    if((this.updateDataService.getUserRole()!=="")){
      return true;
    }else{
      this.route.navigate(["/login"]);
      return false;
    }
  }
}
