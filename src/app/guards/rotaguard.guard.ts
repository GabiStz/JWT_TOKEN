import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

export const rotaguardGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginserviceService);
  let roteador = inject(Router);


  if (loginService.getToken() == null){
    roteador.navigate(["/login"])
    return false;
  }else{
    return true;

  }   
  
};
