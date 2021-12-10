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
  this.oruServisas.nustatytiMiesta(this.city);
  console.log(this.oruServisas.miestas);
  
  return this.oruServisas.miestas;
  
}

}
