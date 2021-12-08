import { Component } from '@angular/core';
import { WeatherService } from '../provider/weather.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  weather: any;
  location: {city: string}
  data: any;

  constructor(private oruPrognoze: WeatherService) {}


// ionViewWillEnter() {
//   this.storage.get('location').then((val)=> {if (val !=null) {
//     this.location = JSON.parse(val);
//   }
// else {
//   this.location = {
//     city: 'vilnius'
//   }
// }})
// }
ngOnInit() {
  this.oruPrognoze.getData().subscribe(data => {console.log(data); this.data = data});
}
doRefresh(event) {
  console.log('Begin async operation');
  this.oruPrognoze.getData().subscribe(data => {console.log(data); this.data = data});

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}
}



