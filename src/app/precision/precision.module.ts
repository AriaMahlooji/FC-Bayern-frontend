import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrecisionPageRoutingModule } from './precision-routing.module';

import { PrecisionPage } from './precision.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrecisionPageRoutingModule
  ],
  declarations: [PrecisionPage]
})
export class PrecisionPageModule {}
