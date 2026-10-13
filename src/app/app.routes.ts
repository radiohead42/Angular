import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Hero } from './pages/hero/hero';
import { Dragon } from './pages/dragon/dragon';

export const routes: Routes = [

  { path: '', component: Counter },
  { path: 'hero', component: Hero },
  { path: 'dragonball', component: Dragon },
  { path: '**', redirectTo: '' }
];
