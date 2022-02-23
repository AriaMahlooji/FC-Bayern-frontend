import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopScorersPageRoutingModule } from './top-scorers-routing.module';

import { TopScorersPage } from './top-scorers.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopScorersPageRoutingModule
  ],
  declarations: [TopScorersPage]
})
export class TopScorersPageModule {}
