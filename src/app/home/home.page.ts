import { Component, OnInit  } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Geolocation } from '@capacitor/geolocation';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  myStatus: string | undefined;
  constructor(private storage: Storage) { }
  ngOnInit() {
  }
  async ionViewWillEnter() {
  await this.storage.create();
  this.myStatus = await this.storage.get('status');
  }
  
  
}
