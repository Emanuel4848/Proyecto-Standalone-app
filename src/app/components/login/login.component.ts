import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service'; 
import { Login } from '../../interfaces/userDTO';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: Login = {
    username: '',
    password: ''
  };


  constructor(private router: Router, private userService: UserService) {}

  login(){
 
    this.userService.login(this.userObj).subscribe({
      next: (data) => {
        console.log('Login exitoso', data);
        //pal dashboard
        this.router.navigate (['dashboard'])
      },
      error: (err) => {
        console.error('Error en el login: ', err);
        alert('Usuario o contraseña incocrrectos')
      }
    });
  }
}










  //private readonly defauluser: loginDTO = {
    //username: 'Ema',
   // password: '123'
  //};



  //constructor(private router: Router) {}

  //login() {
    //if (this.userObj.username === this.defauluser.username && this.userObj.password === this.defauluser.password) {
      //this.router.navigate(['dashboard']); 
    //} else {
      //alert('Usuario o contraseña incorrectos');
    //}
 // }
//}
