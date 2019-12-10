import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UpdateDataService } from "./update-data.service";

@Injectable({
  providedIn: "root"
})
export class AuthenticUserGuardService {
  constructor(
    private route: Router,
    private updateDataService: UpdateDataService
  ) {}
}
