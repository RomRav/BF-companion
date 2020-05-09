import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BfListPageRoutingModule } from './bf-list-routing.module';

import { BfListPage } from './bf-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BfListPageRoutingModule
  ],
  declarations: [BfListPage]
})
export class BfListPageModule {}
