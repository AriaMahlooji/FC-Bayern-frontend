import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



import { PerformanceAgainstOppoPageRoutingModule } from './performance-against-oppo-routing.module';

import { PerformanceAgainstOppoPage } from './performance-against-oppo.page';

@NgModule({
  declarations: [PerformanceAgainstOppoPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceAgainstOppoPageRoutingModule
  ]
})
export class PerformanceAgainstOppoPageModule {}
