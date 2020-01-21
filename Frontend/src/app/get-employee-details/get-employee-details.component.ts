import { Component, OnInit,  HostListener } from '@angular/core';
import * as $ from 'jquery';




@Component({
  selector: 'app-get-employee-details',
  templateUrl: './get-employee-details.component.html',
  styleUrls: ['./get-employee-details.component.css']
})
export class GetEmployeeDetailsComponent implements OnInit {
message : string = "";
count : number = 0;
  constructor( ) { }

increaseByOne(){
  this.count = this.count + 1;
  this.message = "Counter : " +this.count
}

@HostListener('click') myClick(){
  console.log('Welcome to testyantra')
 
}


@HostListener('window:scroll',['$event']) myScroll(){
  console.log('Welcome to angularapp')
 

}

  ngOnInit() {
  //   var num =1;
  //   $(window) .scroll(function(){ 
  //     num = num +1
  //     console.log(num)
  //   })

  }
 
}
