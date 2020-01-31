import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info} from './info';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
   configUrl = 'https://jsonplaceholder.typicode.com/users';


   getConfig():Observable<Info[]>{
     return this.http.get<Info[]>(this.configUrl);
   }




}
