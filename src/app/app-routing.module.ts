import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

import { EmployerLoginComponent } from './employerComp/employer-login/employer-login.component';
import { EmployerRegisComponent } from './employerComp/employer-regis/employer-regis.component';
import { EmployerDashboardComponent } from './employerComp/employer-dashboard/employer-dashboard.component';
import { EmployerSettingComponent } from './employerComp/employer-setting/employer-setting.component';
import { CvManagementComponent } from './employerComp/cv-management/cv-management.component';
import { RecruitmentPostComponent } from './employerComp/recruitment-post/recruitment-post.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "dashboard", component: EmployerDashboardComponent },
  { path: "employerlogin", component: EmployerLoginComponent },
  { path: "employersignup", component: EmployerRegisComponent },
  { path: "account-setting", component: EmployerSettingComponent },
  { path: "cv-management", component: CvManagementComponent },
  { path: "recruitment-post", component: RecruitmentPostComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
