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



  submitForm() {

    const { name, age, email } = this.userObj;


    if (this.userObj.name && this.userObj.age !== null && this.userObj.email) {
      this.userSubmitted.emit({name: name, age: age, email: email }); //eniva datos al padre appComponent
      this.userObj.name = '';
      this.userObj.age = null;
      this.userObj.email = '';
    }
  }
}
