import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-mood',
  templateUrl: './mood.page.html',
  styleUrls: ['./mood.page.scss'],
})
export class MoodPage implements OnInit {

  
    myStatus: string | undefined;
    constructor(private storage: Storage, private navCtrl: NavController) { }
    ngOnInit() {
    }
    async ionViewWillEnter() {
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
    }
    async saveStatus() {
    await this.storage.set('status', this.myStatus)
    .then(
    ()=>{
    this.navCtrl.navigateBack('/home')
    })
    .catch();
    }
    
}
