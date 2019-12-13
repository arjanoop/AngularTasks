import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { ArticleComponent } from "./article/article.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { LoginComponent } from "./login/login.component";
import { AuthenticUserGuardService } from "./authentic-user-guard.service";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AuthenticateAdminGuardService } from "./authenticate-admin-guard.service";

const appRoutes: Routes = [
  {
    path: "",
    redirectTo: "content",
    canActivate: [AuthenticUserGuardService],
    pathMatch: "full"
  },
  { path: "login", component: LoginComponent },
  {
    path: "content",
    canActivate: [AuthenticUserGuardService],
    component: ContentComponent
  },
  {
    path: "dashboard",
    canActivate: [AuthenticUserGuardService, AuthenticateAdminGuardService],
    component: AdminDashboardComponent
  },
  {
    path: "article",
    canActivate: [AuthenticUserGuardService],
    component: ArticleComponent
  },
  {
    path: "create-article",
    canActivate: [AuthenticUserGuardService, AuthenticateAdminGuardService],
    component: CreateArticleComponent
  },
  {
    path: "**",
    canActivate: [AuthenticUserGuardService],
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
