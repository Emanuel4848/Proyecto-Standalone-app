import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstClassComponent } from './components/first-class/first-class.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormPrimeFlexComponent } from './components/user-form-prime-flex/user-form-prime-flex.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { CommonModule } from '@angular/common';
import { userDTO } from './interfaces/userDTO';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FirstClassComponent, UserFormComponent, UserFormPrimeFlexComponent, DisplayDataComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'standalone-app';

user: userDTO = {
  name: '',
  lastname: '',
  age: 0,
  email: '',
  password: '', 
  confirmPassword: '',  
  languages: [] 
};

  onUserSubmitted(userData: userDTO) {
    this.user = userData; //upd date reci
  }

}
