import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstClassComponent } from './components/first-class/first-class.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserFormPrimeFlexComponent } from './components/user-form-prime-flex/user-form-prime-flex.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { CommonModule } from '@angular/common';
import { userDTO } from './interfaces/userDTO';
import { RegisterComponent } from './components/register/register.component';
import { Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
     FirstClassComponent,
     UserFormComponent,
     UserFormPrimeFlexComponent,
     DisplayDataComponent,
     CommonModule,
     RegisterComponent,
     LoginComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) { 

  }


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
    console.log(this.user);

    this.router.navigate(['login']).then(success => {
      if (success) {
        console.log('navigation success');
      } else {
        console.log('navigation failed');
      }
    });
  }

}
