import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//injectable é uma classe que pode ser injetada em outra classe ela pode ser fornecida como dependencia para outra classe
Injectable({
  providedIn: 'root'
})

export class httpInterceptorService implements httpInterceptorService{
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
      }
}



/*export const rotaguardGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginserviceService);
  let roteador = inject(Router);


  if (loginService.getToken() == null){
    roteador.navigate(["/login"])
    return false;
  }else{
    return true;

  }   
  
};*/
