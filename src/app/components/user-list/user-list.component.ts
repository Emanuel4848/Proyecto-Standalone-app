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

  displayedColumns: string[] = ['username', 'lastnames', 'age', 'gender', 'email'] // Se define un arreglo con los nombres de las columnas que se van a mostrar en la tabla.
  dataSource: User[] = [];                                                               // Se inicializa el arreglo de datos que se mostrará en la tabla (vacío al principio).


  constructor(private userService: UserService) {}                                       // Se inyecta el servicio UserService para poder usarlo en esta clase.

  ngOnInit(): void {                                                                    // ngOnInit se ejecuta al iniciar el componente, se usa para cargar datos.
    this.cargarUsuarios();                                                               // Llama al método para cargar los usuarios desde el servicio.
  } 

  cargarUsuarios(): void{                                                             // Método para obtener los usuarios a través del servicio UserService.
    this.userService.getAll().subscribe(                                              // Se hace una solicitud HTTP para obtener los usuarios.
      (users) => {
        this.dataSource = users;                                                    // Si la solicitud es exitosa, asigna los usuarios a dataSource.
        console.log('Usuarios cargados:', users);                                    // Muestra los datos en consola para verificar.
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);                          // Si ocurre un error, muestra el error en la consola.
      } 
    );
  }
}