import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaborRoutingModule } from './labors-routing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { LaborsComponent } from './labors.component';
import { LaborCardComponent } from './labor-card/labor-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LaborDialogComponent } from './labor-dialog/labor-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [LaborsComponent, LaborCardComponent, LaborDialogComponent],
  imports: [
    CommonModule,
    LaborRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatSlideToggleModule,
    SharedModule,
  ],
})
export class LaborsModule {}
