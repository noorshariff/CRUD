import { Injectable } from '@angular/core';
import { Book} from './book'


import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

Books : Book[] = [
  { "id": 1, "name": "Javascript", "price": 1000, "description":"Javascript tutorials" },
  { "id": 1, "name": "Agular", "price": 1000, "description":"Agular tutorials" },
  { "id": 1, "name": "Node", "price": 1000, "description":"Node tutorials" },
  { "id": 1, "name": "Mongodb", "price": 1000, "description":"Mongodb tutorials" }
];

getData(){
  return this.http.get('this.Books')
  console.log(this.Books)
}



  constructor( private http: HttpClient) { this.getData()}
}
