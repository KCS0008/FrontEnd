import { Country } from './../country';

import { AnswerService } from './../answer.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(private answer: AnswerService) { }
  toplist: any[] = [];
  data: any
  poplimit = 65847000;
capital:any[]=[]
  ngOnInit(): void {
    this.top20(event);
    // this.main();
    this.getData();
  }


  getData() {
    this.toplist
console.log(this.capital);
    // for (const country of topl) {
    //   const { lat, lng } =  this.answer.getLatLng(country);
    //   console.log(`${country}: Latitude: ${lat}, Longitude: ${lng}`);
    // }
  };
  top20(event: any) {
    this.answer.countryList().subscribe(((res: any) => {
      this.data = res;
      // console.log(this.data)
      this.data.forEach((element: any) => {
        if (element.population >= this.poplimit && element.currencies[0])
          this.toplist.push(element);
      });
      this.toplist.sort((a, b) => a.population - b.population);
      this.toplist.splice(20);
      console.log(this.toplist)

    }));

  }
  EARTH_RADIUS: number = 6371;
  toRadians(degree: number) {
    return degree * Math.PI / 180
  }
  haversion(lat1: number, lon1: number, lat2: number, lon2: number) {
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    lat1 = this.toRadians(lat1);
    lat2 = this.toRadians(lat2);
    const a = Math.sin(dLat / 2) * Math.sin(dLon / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) + Math.sin(lat1 / 2) * Math.sin(lat2 / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return this.EARTH_RADIUS * c;

  }
  main() {
    const n = this.toplist.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const country1 = this.toplist[i];
        const country2 = this.toplist[j];
        if (country1.latitude && country1.longitude && country2.latitude && country2.longitude) {
          sum += this.haversion(country1.latitude, country1.longitude, country2.latitude, country2.longitude);
        }
      }
    }
    return sum.toFixed(2);

  }

}

