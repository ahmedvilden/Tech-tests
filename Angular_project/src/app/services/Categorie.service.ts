import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categorie } from '../models/Categorie';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  
  // Define API
  apiURL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getCategorie(): Observable<Categorie> {
    return this.http.get<Categorie>(this.apiURL + '/categories')
    .pipe(
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getCategorieByID(id): Observable<Categorie> {
    return this.http.get<Categorie>(this.apiURL + '/categories/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURL + '/categorie', JSON.stringify(categorie), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  } 
  
  createCategorie(categorie: Categorie) {
    return this.http.post(`${this.apiURL}/categories/`, categorie);
  }

  // HttpClient API put() method => Update employee
  updateEmployee(id, employee): Observable<Categorie> {
    return this.http.put<Categorie>(this.apiURL + '/employees/' + id, JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    return this.http.delete<Categorie>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
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