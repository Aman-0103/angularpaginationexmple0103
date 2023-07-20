import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-third-party-api',
  templateUrl: './third-party-api.component.html',
  styleUrls: ['./third-party-api.component.css']
})



export class ThirdPartyAPIComponent {

  obj:Employee | any
  data=[]


  constructor(private serv: MyserviceService) {}
  p: number = 1;
  count: number = 5;
    getdata() {
      this.serv.getAllRecords().subscribe(
        resp => {
          this.obj = resp
          // console.log("Subscriber  got called")
          console.log(this.obj.data)
      }
            ,err => {console.log(err)}
      )
      console.log();
    }

}

class Employee {
  id?: number
  employee_name?: string
  employee_salary?: number
  employee_age?: number
  profile_image?: string
}
// function getdata() {
//   throw new Error('Function not implemented.');
// }

