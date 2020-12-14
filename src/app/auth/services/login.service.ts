import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SendRequestLogin } from '../models/sendRequestLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  readonly PATH_LOGIN: string = 'http://localhost:8080/api/login'; 

  constructor(private httpClient: HttpClient) { }

  login(request: SendRequestLogin): Observable<any> {
    return this.httpClient.post<any>(this.PATH_LOGIN,request);
  }

  

}
