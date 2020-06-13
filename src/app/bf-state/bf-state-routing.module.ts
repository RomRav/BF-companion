import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BfStatePage } from './bf-state.page';

const routes: Routes = [
  {
    path: '',
    component: BfStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BfStatePageRoutingModule {}
