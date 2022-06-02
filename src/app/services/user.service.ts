import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { BackEndResponse } from '../models/backEndResponse.model';
import { User } from '../models/user.model';


type EntityResponseType = HttpResponse<User>;
@Injectable({
  providedIn: 'root'
})
export class UserService {
  resourceUrl = SERVER_API_URL + 'users/';
  constructor(protected http: HttpClient) { }
  login(email: string, password: string): Observable<EntityResponseType> {
    return this.http
      .post<User>(this.resourceUrl + "login", { email: email, password: password }, { observe: 'response' })
  }
  register(name: string, email: string, password: string , role : string): Observable<HttpResponse<BackEndResponse>> {
    return this.http
      .post<BackEndResponse>(this.resourceUrl + "register", { name: name, email: email, password: password ,role : role}, { observe: 'response' })
  }
}
