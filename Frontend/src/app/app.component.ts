import { Component, OnInit } from '@angular/core';
import { AddemployeeService } from './addemployee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:any=[]
  getDataArrays:any =[];
  editdetails={
    _id:null,
    name:null,
    position:null,
    office:null,
    salary:null
  }

constructor( private service:AddemployeeService) {  this.getData()}

//geetting data from database
getData(){
  this.service.getData().subscribe(data=>{
    console.log(data, 'getting Service Data')
    this.getDataArrays= data;
    console.log(this.getDataArrays,'getdata');
  },err=>{
    console.log(err)
  },()=>{
    console.log("Data got Successfully")
  })
  
}


 //posting data in database
submitForm(form){
  this.service.postData(form).subscribe(data=>{
    console.log(data)
    this.getData()
  },err=>{
    console.log(err)
  },()=>{
    console.log("data sent successfully")
  })
}

//edit form data //
editEmployeeDetails(details){
  console.log(details)
  this.editdetails = details;
  
}
 

updateEmployeeDetails(data1){
  this.service.updateData(data1).subscribe(data=>{
    console.log(data , "updateService data")
    this.getData()
  },(err)=>{
    console.log(err)
  }, ()=>{
    console.log("Updated data successfully")

  })

}

deleteEmployees(id){
  this.service.deleteData(id).subscribe(data=>{
    console.log(data)
    this.getData()
  },(err)=>{
    console.log(err)
  },()=>{
    console.log("deleted successfully")
  })
}




  ngOnInit() {}

  
}
