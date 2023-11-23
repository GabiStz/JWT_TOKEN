import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, of, throwError } from 'rxjs';


//injectable é uma classe que pode ser injetada em outra classe ela pode ser fornecida como dependencia para outra classe
Injectable({
  providedIn: 'root'
})

export class httpInterceptorService implements httpInterceptorService{
        router = inject(Router);

      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let token = localStorage.getItem('token');

        if(token){
          request = request.clone({
            setHeaders: {Authorization : 'Bearer' + token}
          });
        }
        return next.handle(request).pipe(catchError(e => this.errorHandler(e)));
      }


      private errorHandler(err:HttpErrorResponse): Observable<any>{
        if(err.status === 401){
          alert('401-Você não está autenticado para acessar o recurso solicitado');
          this.router.navigateByUrl(`/login`);
          return of(err.message);
        }else if(err.status === 403){
          alert('403-Você não tem permissão para acessar o recurso solicitado')
          return of(err.message);
        }
          return throwError(()=> err);

      }
}


export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, userClass: httpInterceptorService, multi: true}
]