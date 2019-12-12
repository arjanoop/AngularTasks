import { Injectable } from "@angular/core";
import {
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { UpdateDataService } from "./update-data.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticateAdminGuardService {
  constructor(
    private route: Router,
    private updateDataService: UpdateDataService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.updateDataService.getUserRole() === "Admin") {
      return true;
    } else {
      this.route.navigate(["/login"]);
      return false;
    }
  }
}
