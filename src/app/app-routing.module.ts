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
import { EmployerInfoComponent } from './employerComp/employer-info/employer-info.component';
import { LicenseComponent } from './employerComp/license/license.component';
import { CompanyInfoComponent } from './employerComp/company-info/company-info.component';
import { CreatePostComponent } from './employerComp/create-post/create-post.component';
import { JobPostsComponent } from './employerComp/job-posts/job-posts.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "posts", component: PostsComponent},
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },


  
  { path: "dashboard", component: EmployerDashboardComponent , 
    children:[
      { path: "account-setting", component: EmployerSettingComponent,
        children:[
          {path: "employer-info" , component: EmployerInfoComponent},
          {path: "license" , component: LicenseComponent},
          {path: "company-info" , component: CompanyInfoComponent}
        ] },
      { path: "cv-management", component: CvManagementComponent },
      { path: "recruitment-post", component: RecruitmentPostComponent,
        children:[
          {path: "posts" , component: JobPostsComponent},
          {path: "create-post" , component: CreatePostComponent},
        ] }
    ]
  },
  { path: "employerlogin", component: EmployerLoginComponent },
  { path: "employersignup", component: EmployerRegisComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
