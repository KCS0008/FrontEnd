import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  sendAnswers(answers: any) {
    return this.http.post('http://localhost:8080/answers', answers);
  }
  countryList(){
    return this.http.get('https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json');
  }
  getLatLng(address:any) {
    const response = this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY`);
    const lat = response.subscribe((res:any)=>res.results[0].geometry.location.lat);
    const lng = response.subscribe((res:any)=>res.results[0].geometry.location.lng);
    return { lat, lng };
  }
}

