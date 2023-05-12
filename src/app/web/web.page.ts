import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-web',
  templateUrl: './web.page.html',
  styleUrls: ['./web.page.scss'],
})
export class WebPage  {

  constructor() { }
async openBrowser() {
await Browser.open({ url: 'http://capacitorjs.com/' });
};

}
