import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage  {

  coordinates: any = "";
lat: string = "";
long: String = "";
constructor() { }
async getGPS() {
this.coordinates = await Geolocation.getCurrentPosition();
this.lat = this.coordinates.coords.latitude;
this.long = this.coordinates.coords.longitude;
}

}
