import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubstitutionsPageRoutingModule } from './substitutions-routing.module';

import { SubstitutionsPage } from './substitutions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubstitutionsPageRoutingModule
  ],
  declarations: [SubstitutionsPage]
})
export class SubstitutionsPageModule {}
