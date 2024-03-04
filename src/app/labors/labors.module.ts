import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaborRoutingModule } from './labors-routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LaborsComponent } from './labors.component';

@NgModule({
  declarations: [LaborsComponent],
  imports: [CommonModule, LaborRoutingModule, MatPaginatorModule],
})
export class LaborsModule {}
