import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { User, userDTO } from '../../interfaces/userDTO';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  private usersService = inject(UserService); //inyecta el comportamentiendo ed la clase UserService(osea getAll)
  users: any[] = [];

  constructor() {
    this.usersService.getAll().subscribe((data: User[]) => {
      console.log('data', data);
      this.users = data;
    });
  }





    userObj: userDTO = {
      name: '',
      lastname: '',
      age: 0,
      email: '',
      password: '',
      confirmPassword: '',
      languages: []
    };
    
    @Output() userSubmitted = new EventEmitter<userDTO>();
  
  
  
    submitForm() {
  
  
  
      if (this.userObj.name && this.userObj.age !== null && this.userObj.email) {
        this.userSubmitted.emit(this.userObj); //eniva datos al padre appComponent
        this.userObj = {
          name: '',
          lastname: '',
          age: 0,
          email: '',
          password: '',
          confirmPassword: '',
          languages: []
        };  
      }
    }
  }
