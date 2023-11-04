import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CloudinaryModule } from '@cloudinary/ng';
import { AlertModule } from '@coreui/angular';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { EmployerNavComponent } from './employerComp/employer-nav/employer-nav.component';
import { EmployerLoginComponent } from './employerComp/employer-login/employer-login.component';
import { EmployerRegisComponent } from './employerComp/employer-regis/employer-regis.component';
import { EmployerDashboardComponent } from './employerComp/employer-dashboard/employer-dashboard.component';
import { CvManagementComponent } from './employerComp/cv-management/cv-management.component';
import { RecruitmentPostComponent } from './employerComp/recruitment-post/recruitment-post.component';
import { EmployerSettingComponent } from './employerComp/employer-setting/employer-setting.component';
import { EmployerInfoComponent } from './employerComp/employer-info/employer-info.component';
import { LicenseComponent } from './employerComp/license/license.component';
import { CompanyInfoComponent } from './employerComp/company-info/company-info.component';
import { CreatePostComponent } from './employerComp/create-post/create-post.component';
import { JobPostsComponent } from './employerComp/job-posts/job-posts.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageJobseekerComponent } from './admin/manage-jobseeker/manage-jobseeker.component';
import { ManageEmployerComponent } from './admin/manage-employer/manage-employer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { SearchModuleComponent } from './components/search-module/search-module.component';
import { RandomJobComponent } from './components/pageComponents/random-job/random-job.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserChangePassComponent } from './components/user-change-pass/user-change-pass.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageCvComponent } from './components/manage-cv/manage-cv.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { FindJobComponent } from './components/find-job/find-job.component';
import { JobComponent } from './components/find-job/job/job.component';
import { CompanyComponent } from './components/company-list/company/company.component';





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    PostsComponent,
    EmployerNavComponent,
    EmployerLoginComponent,
    EmployerRegisComponent,
    EmployerDashboardComponent,
    CvManagementComponent,
    RecruitmentPostComponent,
    EmployerSettingComponent,
    EmployerInfoComponent,
    LicenseComponent,
    CompanyInfoComponent,
    CreatePostComponent,
    JobPostsComponent,
    AdminDashboardComponent,
    ManageJobseekerComponent,
    ManageEmployerComponent,
    AdminLoginComponent,
    SearchModuleComponent,
    RandomJobComponent,
    UserInfoComponent,
    UserChangePassComponent,
    ManageCvComponent,
    CompanyListComponent,
    FindJobComponent,
    JobComponent,
    CompanyComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    CloudinaryModule,
    AlertModule,
    MatGridListModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
