import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChurrascoPageRoutingModule } from './churrasco-routing.module';

import { ChurrascoPage } from './churrasco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChurrascoPageRoutingModule
  ],
  declarations: [ChurrascoPage]
})
export class ChurrascoPageModule {}
