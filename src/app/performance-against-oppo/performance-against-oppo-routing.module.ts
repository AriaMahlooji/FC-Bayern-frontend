import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceAgainstOppoPage } from './performance-against-oppo.page';

const routes: Routes = [
  {
    path: '',
    component: PerformanceAgainstOppoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceAgainstOppoPageRoutingModule {}
