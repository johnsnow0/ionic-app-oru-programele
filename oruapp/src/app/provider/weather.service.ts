import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  
// miestas;
// url; 
  
constructor(private http: HttpClient) { }


  getData() {

return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=vilnius&units=metric&appid=35ac972ed30a9ed3e6ad8d09a895abf1')

}

  

}
