import { Component } from '@angular/core';
import { WeatherService } from '../provider/weather.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

city: string;


  constructor(private oruServisas: WeatherService) {
    
      
  }

  
saveForm() {
  let location = {
    city: this.city
  }
  console.log(this.city);
  
}
grazintiMiesta() {
  this.oruServisas.miestas = this.city;
  return this.oruServisas.miestas;
}
}
