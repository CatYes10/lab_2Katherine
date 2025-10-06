import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

// Importar componentes standalone
import { CreacionOrden } from './creacionDeOrdenes/creacionDeOrdenes';
import { ActualizarOrden } from './actualizarOrden/actualizarOrden';
import { SeguirOrden } from './seguirOrden/seguirOrden';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    CreacionOrden,
    ActualizarOrden,
    SeguirOrden
  ],
})
export class AppModule { }
