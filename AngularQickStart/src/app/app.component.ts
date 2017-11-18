import { Component } from '@angular/core';
import {AdvertiserService} from './services/advertiser.service';
@Component({
  selector: 'app-root',
  template: `
  <h1>Angular Router</h1>
  <nav>
    <a routerLink="route/index" routerLinkActive="active">Index</a>
    <a routerLink="route/user" routerLinkActive="active">User</a>
  </nav>
  <router-outlet></router-outlet>
  <hr /> 
  <h3> Advertisers </h3>
  <hr />
  <table style="width:100%">
  <tr>
    <th> Name </th> Contact Name <th> </th> <th> Credit </th>
  </tr>

  <div *ngFor="let post of advertisers"> 
  <tr>
    <td><p> {{post.name}} </p></td>
    <td><p> {{post.contactName}} </p></td>
    <td><p> {{post.credit}} </p></td>
  </tr>  
  </div>
  
   <table>
`,
providers : [AdvertiserService]

})
export class AppComponent {
  advertisers : Advertiser[];
  advertise : Advertiser;
  private advertiser : Advertiser;
  constructor(private advertiserService : AdvertiserService){
    this.advertiser = {
      name : 'Symphony',
      contactName : 'Adarsh',
      credit : 200.00
    };
    advertiserService.postAdvertiser(this.advertiser).subscribe(advertise => {
      this.advertise = advertise;
      this.advertisers.push(this.advertise);
    });
    advertiserService.getAdvertisers().subscribe(advertisers => {
      this.advertisers = advertisers
    });
    
    advertiserService.getAdvertiser('IHeartFlow').subscribe( advertiser => {
       console.log(advertiser);
    });

    advertiserService.deleteAdvertiser('IHeartFlow').subscribe( advertiser => {
      console.log(advertiser);
   });

   this.advertiser = {
    name : 'Symphony',
    contactName : 'Adarsha Burma',
    credit : 500.00
  };

   advertiserService.updateAdvertiser(this.advertiser).subscribe(advertise => {
    this.advertise = advertise;
    this.advertisers.push(this.advertise);
  });

  }
}

interface Advertiser{
  name : string,
  contactName : string,
  credit : number
}