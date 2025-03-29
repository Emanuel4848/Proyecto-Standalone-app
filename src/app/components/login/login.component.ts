import { Component } from '@angular/core';
import { Router } from '@angular/router';  //para navegar entre rutas
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { loginDTO } from '../../interfaces/loginDTO';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: loginDTO = {
    username: '',
    password: ''
  };


  private readonly defauluser: loginDTO = {
    username: 'Ema',
    password: '123'
  };



  constructor(private router: Router) {}

  login() {
    if (this.userObj.username === this.defauluser.username && this.userObj.password === this.defauluser.password) {
      this.router.navigate(['dashboard']); 
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
