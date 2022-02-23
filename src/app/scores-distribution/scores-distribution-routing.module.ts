import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoresDistributionPage } from './scores-distribution.page';

const routes: Routes = [
  {
    path: '',
    component: ScoresDistributionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScoresDistributionPageRoutingModule {}
