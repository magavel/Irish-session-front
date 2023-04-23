import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class TuneService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;
  constructor(private http:HttpClient) { }

  public getAll(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get(`${this.apiUrl}/tunes`, {headers})
  }
  public get(id:number): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`
    });
    return this.http.get(`${this.apiUrl}/tunes/${id}`, {headers})
  }
}
