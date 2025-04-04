import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { User } from '../../interfaces/userDTO';
import { UserService } from '../../services/user.service';
import { subscribeOn } from 'rxjs';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  displayedColumns: string[] = ['username', 'lastnames', 'age', 'gender', 'email'] 
  dataSource: User[] = [];                                                               


  constructor(private userService: UserService) {}                                       

  ngOnInit(): void {                                                                   
    this.cargarUsuarios();                                                               
  } 

  cargarUsuarios(): void{                                                            
    this.userService.getAll().subscribe(                                             
      (users) => {
        this.dataSource = users;                                                    
        console.log('Usuarios cargados:', users);                                    
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);                         
      } 
    );
  }
}