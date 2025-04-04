import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { userDTO } from '../../interfaces/userDTO';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

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
  passnoCoinciden: boolean = false;

  validatePasswords() {
    this.passnoCoinciden = this.userObj.password !== this.userObj.confirmPassword;
  }



  submitForm() {

    if (this.passnoCoinciden) {
      return;
    }
    


    if (this.userObj.name && this.userObj.age !== null && this.userObj.email) {
      this.userSubmitted.emit(this.userObj); //env dat fat app.com
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
