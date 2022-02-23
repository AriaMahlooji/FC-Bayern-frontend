import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubstitutionsPage } from './substitutions.page';

const routes: Routes = [
  {
    path: '',
    component: SubstitutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubstitutionsPageRoutingModule {}
