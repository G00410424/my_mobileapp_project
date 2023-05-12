import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'feijoada',
    loadChildren: () => import('./feijoada/feijoada.module').then( m => m.FeijoadaPageModule)
  },
  {
    path: 'pastel',
    loadChildren: () => import('./pastel/pastel.module').then( m => m.PastelPageModule)
  },
  {
    path: 'caipirinha',
    loadChildren: () => import('./caipirinha/caipirinha.module').then( m => m.CaipirinhaPageModule)
  },
  {
    path: 'churrasco',
    loadChildren: () => import('./churrasco/churrasco.module').then( m => m.ChurrascoPageModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then( m => m.MoviePageModule)
  },
  {
    path: 'mood',
    loadChildren: () => import('./mood/mood.module').then( m => m.MoodPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'web',
    loadChildren: () => import('./web/web.module').then( m => m.WebPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
