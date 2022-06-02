import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { BackEndResponse } from '../models/backEndResponse.model';
import { Regle } from '../models/regle.model';


type EntityResponseType = HttpResponse<Regle>;
@Injectable({
  providedIn: 'root'
})
export class RegleService {
  resourceUrl = SERVER_API_URL + 'array/';
  constructor(protected http: HttpClient){ }
  
  Add(name: string, values : string[]  ): Observable<HttpResponse<BackEndResponse>> {
    return this.http
      .post<BackEndResponse>(this.resourceUrl + "Add", { name: name, values: values}, { observe: 'response' })
  }
}
