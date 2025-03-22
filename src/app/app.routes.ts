import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


export const routes: Routes = [ 
    { path: 'register', component: RegisterPageComponent }, 
    { path: 'login', component: LoginComponent },            
    { path: 'dashboard', component: DashboardComponent },         
    { path: '', redirectTo: '/register', pathMatch: 'full' }    
  ];
