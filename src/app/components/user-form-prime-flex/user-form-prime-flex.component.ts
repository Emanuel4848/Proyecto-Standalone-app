import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { userDTO } from '../../interfaces/userDTO';
@Component({
    selector: 'app-user-form-prime-flex',
    standalone: true,
    imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule,],
    templateUrl: './user-form-prime-flex.component.html',
    styleUrl: './user-form-prime-flex.component.css'
})
export class UserFormPrimeFlexComponent {

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
        if (this.userObj.name && this.userObj.age !== null && this.userObj.email && this.userObj.lastname && this.userObj.password && this.userObj.confirmPassword) {
            this.userSubmitted.emit( this.userObj );
            this.userObj = {
                name: '',
                lastname: '',
                age: 0,
                email: '',
                password: '',
                confirmPassword: '',
                languages: []
            }
        }
    } 
}