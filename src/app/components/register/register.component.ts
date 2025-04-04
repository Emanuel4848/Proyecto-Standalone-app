import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { User, userDTO } from '../../interfaces/userDTO';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule, MatSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private usersService = inject(UserService); //iny
  private router = inject(Router);
  users: any[] = [];

  constructor() {
    this.usersService.getAll().subscribe((data: User[]) => {
      console.log('Usuarios obtenidos', data);
      this.users = data;
    });
  }





  userObj: userDTO = {
    username: '',
    name: '',
    lastname: '',
    age: 0,
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    languages: []
  };

  //datos que envio al backend(User)
  userSave: User = {
    username: '',
    names: '',
    lastnames: '',
    age: 0,
    gender: '',
    password: '',
    email: ''
  }

  @Output() userSubmitted = new EventEmitter<userDTO>(); //

  submitForm() {
    if (this.userObj.password !== this.userObj.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    

    if (this.userObj.username && this.userObj.name && this.userObj.age !== null && this.userObj.email && this.userObj.password) {
      this.userSave.username = this.userObj.username;
      this.userSave.names = this.userObj.name;
      this.userSave.lastnames = this.userObj.lastname!;
      this.userSave.age = this.userObj.age;
      this.userSave.gender = this.userObj.gender!;
      this.userSave.password = this.userObj.password!;
      this.userSave.email = this.userObj.email;
      console.log('Datos que se enviarán al backend:', this.userSave);

      this.usersService.save(this.userSave).subscribe((data: User) => {
        console.log('data', data);
      
      });
      this.userSubmitted.emit(this.userObj); //eniva datos al padre register.page
      this.userObj = {
        username: '',
        name: '',
        lastname: '',
        age: 0,
        email: '',
        password: '',
        confirmPassword: '',
        languages: [],
        gender: ''
      };
    } else {
      console.log('Por favor completa todos los campos requeridos.');
    }
  }
}
