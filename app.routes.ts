import { Routes } from '@angular/router';
import { CreacionOrden } from './creacionDeOrdenes/creacionDeOrdenes';
import { ActualizarOrden } from './actualizarOrden/actualizarOrden';
import { SeguirOrden } from './seguirOrden/seguirOrden';

export const routes: Routes = [
  { path: '', redirectTo: 'creacionDeOrdenes', pathMatch: 'full' },

  { path: 'creacionDeOrdenes', component: CreacionOrden },
  { path: 'actualizarOrden', component: ActualizarOrden },
  { path: 'seguirOrden', component: SeguirOrden },

  { path: '**', redirectTo: 'creacionDeOrdenes' }
];
