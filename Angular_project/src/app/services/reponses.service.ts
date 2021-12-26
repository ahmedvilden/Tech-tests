import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Test } from '../models/Test';
import { Reponse } from '../models/Reponse';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ReponsesService {
  
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
  getReponses(): Observable<Reponse> {
    return this.http.get<Reponse>(this.apiURL + '/reponses')
    .pipe(
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getReponsesByQuestionId(idquestion: number): Observable<Reponse> {
    return this.http.get<Reponse>(this.apiURL + '/reponses?question=' + idquestion)
    .pipe(
      catchError(this.handleError)
    )
  }  
  getReponsesByQuestionIdandcorrectanswer(idquestion: number): Observable<Reponse> {
    return this.http.get<Reponse>(this.apiURL + '/reponses?question=' + idquestion+'&reponse_correcte=1')
    .pipe(
      catchError(this.handleError)
    )
  }  
  getTestsById(idtest): Observable<Test> {
    return this.http.get<Test>(this.apiURL + '/tests?id=' + idtest)
    .pipe(
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(Test): Observable<Test> {
    return this.http.post<Test>(this.apiURL + '/categorie', JSON.stringify(Test), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API put() method => Update employee
  updateEmployee(id, Test): Observable<Test> {
    return this.http.put<Test>(this.apiURL + '/employees/' + id, JSON.stringify(Test), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete employee
  deleteEmployee(id){
    return this.http.delete<Test>(this.apiURL + '/employees/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.apiURL}/reponsecreate/`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
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