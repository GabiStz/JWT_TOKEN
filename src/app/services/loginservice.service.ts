import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class LoginserviceService {
  API: string = "http://localhost:8080/api/login"
  http = inject(HttpClient);


  constructor() { }

  logar(login : Login): Observable<User>{
    return this.http.post<User>(this.API,login)
  }
  deslogar(login : Login): Observable<any>{
    return this.http.get<any>(this.API + "/deslogar")

  }
  addToken(token: string){
    localStorage.setItem("token", token);

  }

  removeToken(){
    localStorage.removeItem("token");
  }

  getToken(){
  return localStorage.getItem("token");
  }
  
//hasPermission determina se o usuario ou sistema tem autorização necessaria para realizar uma especifica ação
  hasPermission(role: string){
    if(role == "ADMIN"){
      return true;
    }else{
      return false;
    }
  }

}
