import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRestaurantePage } from './lista-restaurante.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRestaurantePageRoutingModule {}
