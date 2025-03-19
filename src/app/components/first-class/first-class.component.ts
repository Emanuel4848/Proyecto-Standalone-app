import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-first-class',
  imports: [MatButtonModule],
  standalone: true,
  templateUrl: './first-class.component.html',
  styleUrl: './first-class.component.css'
})
export class FirstClassComponent {
  
  name: string = 'Emanuel Gonzalez'

  constructor() { }

  helloWord(): string {
    return 'Hello Word!';
  }

  changeName(): void{
    this.name = 'Ema'
  }

}


