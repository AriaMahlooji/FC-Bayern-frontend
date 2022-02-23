import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrecisionPage } from './precision.page';

const routes: Routes = [
  {
    path: '',
    component: PrecisionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrecisionPageRoutingModule {}
