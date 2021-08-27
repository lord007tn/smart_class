import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './authentification/signin/signin.component';
import { SignupComponent } from './authentification/signup/signup.component';
import { AuthService } from './services/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

 const appRoutes:Routes= [
{path:'auth/signup', component:SignupComponent},
{path:'auth/signin', component: SigninComponent},
{path:'courses',component:CoursesComponent},
{path:'home',component:HomeComponent},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'**',redirectTo:'home'} 
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    
    CoursesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
