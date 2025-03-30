import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/userDTO';
import { Login } from '../interfaces/userDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/users'; //Mi API REST
  private http = inject(HttpClient); //inicializo el httpClient para poder hacer peticiones a la API REST
  constructor() { }

  getAll(): Observable<User[]> {  //esto lo regresa el finAll en backend(capaREPO)
    return this.http.get<User[]>(this.apiUrl); 
  }             //get podria ser put, delete, etc depende.


  save(user: User): Observable<User> {        //recibe un usuario
    return this.http.post<User>(this.apiUrl, user)
  }


  login(user: Login): Observable<any>{
    return this.http.post<any>(this.apiUrl + '/login', user);
  }
}