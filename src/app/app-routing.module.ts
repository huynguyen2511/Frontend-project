import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { PostsComponent } from "./components/posts/posts.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { EmployerHomeComponent } from './employerComp/employer-home/employer-home.component';
import { EmployerLoginComponent } from './employerComp/employer-login/employer-login.component';
import { EmployerRegisComponent } from './employerComp/employer-regis/employer-regis.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "employer", component : EmployerHomeComponent},
  { path: "employerlogin", component: EmployerLoginComponent },
  { path: "employersignup", component: EmployerRegisComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
