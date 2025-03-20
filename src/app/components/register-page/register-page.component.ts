import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { CommonModule } from '@angular/common';
import { userDTO } from '../../interfaces/userDTO';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register-page',
  imports: [RegisterComponent, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private router: Router) { }

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
