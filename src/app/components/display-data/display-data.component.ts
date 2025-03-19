import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { userDTO } from '../../interfaces/userDTO';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent {
  @Input() user: userDTO = {
    name: '',
    lastname: '',
    age: 0,
    email: '',
    password: '',
    confirmPassword: '',
    languages: []
  }


}
