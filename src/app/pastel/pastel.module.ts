import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastelPageRoutingModule } from './pastel-routing.module';

import { PastelPage } from './pastel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastelPageRoutingModule
  ],
  declarations: [PastelPage]
})
export class PastelPageModule {}
