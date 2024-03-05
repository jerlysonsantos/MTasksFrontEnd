import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaborsComponent } from './labors.component';

const routes: Routes = [
  {
    path: '',
    component: LaborsComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaborRoutingModule {}
