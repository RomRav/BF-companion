import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BfStatePageRoutingModule } from './bf-state-routing.module';

import { BfStatePage } from './bf-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BfStatePageRoutingModule
  ],
  declarations: [BfStatePage]
})
export class BfStatePageModule {}
