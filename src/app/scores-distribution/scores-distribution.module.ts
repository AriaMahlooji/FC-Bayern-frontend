import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScoresDistributionPageRoutingModule } from './scores-distribution-routing.module';

import { ScoresDistributionPage } from './scores-distribution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScoresDistributionPageRoutingModule
  ],
  declarations: [ScoresDistributionPage]
})
export class ScoresDistributionPageModule {}
