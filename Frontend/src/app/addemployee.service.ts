import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddemployeeService {
  url='http://localhost:4000';
  constructor( private http:HttpClient) {
    this.getData()
    
   }
   

  getData(){
    return this.http.get(`${this.url}/getemployee`)
  }

  postData(emp){
    console.log(emp, 'service')
    return this.http.post(`${this.url}/employee`,emp)
  }

  updateData(empDetails){
    console.log(empDetails , "updateservice")
    return this.http.post(`${this.url}/editemployee`,empDetails)
  }

  deleteData(id){
    return this.http.delete(`${this.url}/deleteuser/${id}`)

  }

 
}
