import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public apiUrl = environment.urlApi;

  constructor(private httpClient: HttpClient) { }

  get(url:string) {
    return this.httpClient.get(`${url}`).pipe(
      catchError(this.handleError)
    )
  }

  post(url: string , body: Object) {
    return this.httpClient.post(`${this.apiUrl}${url}`, body).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Falha ao enviar resultado, tente novamente'));
  }
  
}
