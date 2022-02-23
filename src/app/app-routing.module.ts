import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./places/places.module').then( m =>m.PlacesPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule),
    canLoad:[AuthGuard]
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule),
    canLoad:[AuthGuard]
  },
  {
    path: 'top-scorers',
    loadChildren: () => import('./top-scorers/top-scorers.module').then( m => m.TopScorersPageModule)
  },
  {
    path: 'performance-against-oppo',
    loadChildren: () => import('./performance-against-oppo/performance-against-oppo.module').then( m => m.PerformanceAgainstOppoPageModule)
  },
  {
    path: 'scores-distribution',
    loadChildren: () => import('./scores-distribution/scores-distribution.module').then( m => m.ScoresDistributionPageModule)
  },
  {
    path: 'substitutions',
    loadChildren: () => import('./substitutions/substitutions.module').then( m => m.SubstitutionsPageModule)
  },
  {
    path: 'precision',
    loadChildren: () => import('./precision/precision.module').then( m => m.PrecisionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
