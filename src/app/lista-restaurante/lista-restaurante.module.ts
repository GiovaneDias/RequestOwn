import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRestaurantePageRoutingModule } from './lista-restaurante-routing.module';

import { ListaRestaurantePage } from './lista-restaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRestaurantePageRoutingModule
  ],
  declarations: [ListaRestaurantePage]
})
export class ListaRestaurantePageModule {}
