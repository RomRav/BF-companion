import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BfListPage } from './bf-list.page';

const routes: Routes = [
  {
    path: '',
    component: BfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BfListPageRoutingModule {}
