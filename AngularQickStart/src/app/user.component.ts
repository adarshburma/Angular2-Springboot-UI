import { Component } from '@angular/core';
import { AdvertiserService } from './services/advertiser.service';

@Component({
  selector: 'user-root',
  template: `
    <h3> Hello {{firstname}}</h3>
    <h4> Your Details: </h4>
    First Name: {{firstname}} <br>
    Last Name: {{lastname}} <br>
    Email: {{email}}<br><br>
    Address: <br>
      Street: {{address.streetname}} <br>
      City: {{address.city}} <br>
      Zipcode: {{address.zipcode}} <br>
      State: {{address.state}} <br>
    <br><br>

    <form>
      First Name: <input [(ngModel)]="firstname" name="firstname"> <br>
      Last Name: <input [(ngModel)]="lastname" name="lastname"><br>
      Email: <input [(ngModel)]="email" name="email"><br>
      Address: <br>
      Street: <input [(ngModel)]="address.streetname" name="address.streetname"><br>
      City:   <input [(ngModel)]="address.city" name="address.city"><br>
      Zipcode: <input [(ngModel)]="address.zipcode" name="address.zipcode"><br>
      State: <input [(ngModel)]="address.state" name="address.state"><br>
    </form>
  ` ,
  providers : [AdvertiserService]
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class UserComponent {
  firstname : String;
  lastname: String;
  email: String;
  address : Address;

  constructor(){
    this.firstname = 'Adarsh';
    this.lastname = 'Burma';
    this.email = 'burma.adarsh@gmail.com';
    this.address = {
      streetname : '1500 sparkman dr',
      city : 'Huntsville',
      zipcode : 35816,
      state : 'Alabama'
    };
  }


}

interface Address{
  streetname : string;
  city : string;
  zipcode : number;
  state : string
}
