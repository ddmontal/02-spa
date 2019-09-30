import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { FiltroHeroesComponent } from './components/filtro-heroes/filtro-heroes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'filtro-heroe/:termino', component: FiltroHeroesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
