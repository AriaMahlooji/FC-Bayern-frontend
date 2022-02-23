import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage,
    canLoad:[AuthGuard]
  },
  {
    path: ':placeId',
    loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule),
    canLoad:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
