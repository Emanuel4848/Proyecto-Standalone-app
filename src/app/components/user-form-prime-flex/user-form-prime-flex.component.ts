import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-user-form-prime-flex',
    standalone: true,
    imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, FormsModule, MatCardModule],
    templateUrl: './user-form-prime-flex.component.html',
    styleUrl: './user-form-prime-flex.component.css'
})
export class UserFormPrimeFlexComponent {

    name: string = '';
    age: number | null = null;
    email: string = '';

    @Output() userSubmitted = new EventEmitter<{ name: string; age: number }>();

    submitForm() {
        if (this.name && this.age !== null) {
            this.userSubmitted.emit({ name: this.name, age: this.age });
            this.name = '';
            this.age = null;
        }
    }
    
}