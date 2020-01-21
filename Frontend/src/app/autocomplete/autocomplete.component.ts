import { Component, OnInit, ViewChild } from '@angular/core';
import { GetEmployeeDetailsComponent } from '../get-employee-details/get-employee-details.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild(GetEmployeeDetailsComponent, { static: false }) counterComponent:GetEmployeeDetailsComponent;
  increase(){
    this.counterComponent.increaseByOne();
  }

  displayVariable = false;
  
  constructor() { }






  ngOnInit() {
  }

}
