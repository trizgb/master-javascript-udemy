// Imports modulos del router
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Imports componentes
import { HomeComponent } from './components/home/home.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExternoComponent } from './components/externo/externo.component';
import { ContactoComponent } from './components/contacto/contacto.component';

// Array de rutas
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'zapatillas', component: ZapatillasComponent },
  { path: 'videojuegos', component: VideojuegoComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:nombre', component: CursosComponent },
  { path: 'cursos/:nombre/:followers', component: CursosComponent },
  { path: 'externo', component: ExternoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent }
]

// Export modulo router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
