import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { User } from '../models/user.model';


type EntityResponseType = HttpResponse<any>;
@Injectable({
  providedIn: 'root'
})
export class FileService {
  resourceUrl = SERVER_API_URL + 'file/';
  constructor(protected http: HttpClient) { }


  uploadfile(file: string): Observable<EntityResponseType> {
    return this.http
      .post<User>(this.resourceUrl + "saveFile", { file: file}, { observe: 'response' })
  }
  savemethode(methode: string): Observable<EntityResponseType> {
    return this.http
      .post<User>(this.resourceUrl + "saveMethode", { methode: methode}, { observe: 'response' })
  }
}
