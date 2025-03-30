import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../user-list/user-list.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UserListComponent, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

 // Inyección del servicio Router para realizar la navegación
 private router = inject(Router);

 // Método para redirigir a la pantalla de usuarios
 verUsuarios() {
   this.router.navigate(['/users']);  // Esto redirige a la ruta '/users'
 }
}