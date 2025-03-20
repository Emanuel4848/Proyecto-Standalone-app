import { Routes } from '@angular/router';
//imports
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

//constante llamada routers de tipo Routes:
export const routes: Routes = [    //array de objetos
    {path: 'register', component: RegisterPageComponent},   //path:ruta register,  que componete va a 
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/register', pathMatch: 'full'}                                // resolver la ruta register: RegisterComponent
];
