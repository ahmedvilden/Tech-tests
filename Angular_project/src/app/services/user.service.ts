import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    apiUrl ='http://127.0.0.1:8000';
    getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }
    getUsers(id:number): Observable<any> {
        return this.http.get<any>('http://127.0.0.1:8000/users?id='+id)
        .pipe(
          catchError(this.handleError)
        )
      }
      getTestUtisateursById(iduser): Observable<any> {
        return this.http.get<any>('http://127.0.0.1:8000' + '/utilisateur_testread?utilisateur='+ iduser)
        .pipe(
          catchError(this.handleError)
        )
      }
    
      getChoixTestUtisateursById(iduser): Observable<any> {
        return this.http.get<any>('http://127.0.0.1:8000' + '/utilisateur_test?utilisateur='+ iduser)
        .pipe(
          catchError(this.handleError)
        )
      }
    getById(id: number) {
        return this.http.get(`${this.apiUrl}/users/${id}`);
    }

    register(user: User):any {
        return this.http.post(`${this.apiUrl}/api/v1/auth/freelance-registration/`, user);
    }

    registerEntreprise(user: User) {
        return this.http.post(`${this.apiUrl}/api/v1/auth/registration/`, user);
    }

    update(user: User) {
        return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
      // Error handling 
      handleError(error) {
        let errorMessage = '';
        if(error.error instanceof ErrorEvent) {
          // Get client-side error
          errorMessage = error.error.message;
        } else {
          // Get server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
     }
}