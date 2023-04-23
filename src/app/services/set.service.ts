import { Injectable } from '@angular/core';
import {environment} from "../../../environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SetService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http:HttpClient) { }

  public getAll(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get(`${this.apiUrl}/sets`, {headers})
  }
  public get(id:number): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get(`${this.apiUrl}/sets/${id}`, {headers})
  }
}
