import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLandingComponent } from './landing/app-landing.component';
import { AppSignupComponent } from './signup/app-signup.component';

const routes: Routes = [  
    {path:'landing',component:AppLandingComponent},  
    {path:'signup',component:AppSignupComponent},
    {path:'',redirectTo:'signup', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
