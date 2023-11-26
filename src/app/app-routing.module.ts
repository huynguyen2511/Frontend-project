import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
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
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageJobseekerComponent } from './admin/manage-jobseeker/manage-jobseeker.component';
import { ManageEmployerComponent } from './admin/manage-employer/manage-employer.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserChangePassComponent } from './components/user-change-pass/user-change-pass.component';
import { FindJobComponent } from './components/find-job/find-job.component';
import { ManageCvComponent } from './components/manage-cv/manage-cv.component';
import { CompanyListComponent } from './components/company-list/company-list.component';
import { JobComponent } from './components/find-job/job/job.component';
import { CompanyComponent } from './components/company-list/company/company.component';
import { UploadCvComponent } from './components/upload-cv/upload-cv.component';
import { UpdateDemandJobComponent } from './components/update-demand-job/update-demand-job.component';
import { AppliedJobComponent } from './components/applied-job/applied-job.component';
import { FindCvComponent } from './employerComp/cv-management/find-cv/find-cv.component';
import { AppliedCvComponent } from './employerComp/cv-management/applied-cv/applied-cv.component';
import { PostComponent } from './employerComp/job-posts/post/post.component';
import { CandidateCvComponent } from './employerComp/cv-management/candidate-cv/candidate-cv.component';
import { EmployerNavComponent } from './employerComp/employer-nav/employer-nav.component';
import { userGuard } from './shared/user.guard';
import { employerGuard } from './shared/employer.guard';
import { JobQueryComponent } from './components/find-job/job-query/job-query.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'account-setting',
    component: UserInfoComponent,
    canActivate: [userGuard],
  },
  {
    path: 'password',
    component: UserChangePassComponent,
    canActivate: [userGuard],
  },
  { path: 'manage-Cv', component: ManageCvComponent, canActivate: [userGuard] },
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-list/company', component: CompanyComponent },
  { path: 'upload-Cv', component: UploadCvComponent, canActivate: [userGuard] },
  {
    path: 'update-demand-job',
    component: UpdateDemandJobComponent,
    canActivate: [userGuard],
  },
  {
    path: 'job-applied-for',
    component: AppliedJobComponent,
    canActivate: [userGuard],
  },

  { path: 'find-job', component: FindJobComponent },
  { path: 'find-job/job', component: JobComponent },
  { path: 'find-query', component: JobQueryComponent },

  {
    path: 'dashboard',
    canActivate: [employerGuard],
    component: EmployerNavComponent,
    children: [
      { path: 'news', component: EmployerDashboardComponent },
      {
        path: 'account-setting',
        component: EmployerSettingComponent,
        children: [
          { path: 'employer-info', component: EmployerInfoComponent },
          { path: 'license', component: LicenseComponent },
          { path: 'company-info', component: CompanyInfoComponent },
        ],
      },
      {
        path: 'cv-management',
        component: CvManagementComponent,
        children: [
          { path: 'find-cv', component: FindCvComponent },
          { path: 'applied-cv', component: AppliedCvComponent },
          { path: 'candidate-cv', component: CandidateCvComponent },
        ],
      },
      {
        path: 'recruitment-post',
        component: RecruitmentPostComponent,
        children: [
          { path: 'posts', component: JobPostsComponent },
          { path: 'create-post', component: CreatePostComponent },
          { path: 'post/:id', component: PostComponent },
        ],
      },
    ],
  },
  { path: 'employerlogin', component: EmployerLoginComponent },
  { path: 'employersignup', component: EmployerRegisComponent },

  { path: 'adminlogin', component: AdminLoginComponent },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      { path: 'manage-Jobseeker', component: ManageJobseekerComponent },
      { path: 'manage-Employer', component: ManageEmployerComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
