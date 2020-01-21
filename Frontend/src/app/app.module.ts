import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material.module';
import { RouterModule} from '@angular/router';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetEmployeeDetailsComponent } from './get-employee-details/get-employee-details.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import{ HostListenerDirective} from './host-listener.directive'
import { HomeComponent } from './home/home.component';
import { ViewDetailsComponent } from './view-details/view-details.component';


@NgModule({
  declarations: [
    AppComponent,
    GetEmployeeDetailsComponent,
    AutocompleteComponent,
    HostListenerDirective,
    HomeComponent,
    ViewDetailsComponent

   
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    RouterModule.forRoot([
      { path: "home" , component: HomeComponent},
      { path: "view-detail/:id" , component : ViewDetailsComponent}
    ])
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
