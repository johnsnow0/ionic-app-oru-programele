import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
miestas;
url;

  
constructor(private http: HttpClient) {
  this.url = 'https://api.openweathermap.org/data/2.5/weather?q=vilnius&units=metric&appid=35ac972ed30a9ed3e6ad8d09a895abf1'
 }


  getData() {
console.log(this.miestas);

return this.http.get(this.url);
// sitame servise ir jam subsribint tab1 puslapi.  event emitter panaudoti.
}

nustatytiMiesta(city: any) {
  this.url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=35ac972ed30a9ed3e6ad8d09a895abf1';
}  

}
