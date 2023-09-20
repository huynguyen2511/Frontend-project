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

import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { EmployerNavComponent } from './employerComp/employer-nav/employer-nav.component';
import { EmployerLoginComponent } from './employerComp/employer-login/employer-login.component';
import { EmployerRegisComponent } from './employerComp/employer-regis/employer-regis.component';
import { EmployerHomeComponent } from './employerComp/employer-home/employer-home.component';


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
    EmployerHomeComponent,
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
