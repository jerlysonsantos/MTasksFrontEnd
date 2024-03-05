import { Component, Inject, OnInit } from '@angular/core';
import { LaborService } from './services/labors.service';
import { BehaviorSubject, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LaborDialogComponent } from './labor-dialog/labor-dialog.component';
import { ILabor } from './interfaces/labor.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-labors',
  templateUrl: './labors.component.html',
  styleUrls: ['./labors.component.scss'],
})
export class LaborsComponent implements OnInit {
  currentPage = 0;
  size = 10;

  totalItens = 10;
  labors$: BehaviorSubject<ILabor[]> = new BehaviorSubject<ILabor[]>([]);

  constructor(
    @Inject(LaborService)
    private laborService: LaborService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getAllLabors();
  }

  getAllLabors(page: number = 0, size: number = 10) {
    this.currentPage = page;
    this.size = size;

    this.laborService.getAll(page, size).subscribe((response) => {
      this.totalItens = response.size;
      this.labors$.next(response.labors);
    });
  }

  openNewModal() {
    const dialogRef = this.dialog.open(LaborDialogComponent, {
      width: '40%',
      height: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.laborService.create(result).subscribe({
        next: () => {
          this.getAllLabors(this.currentPage, this.size);
        },
        error: () => {
          this.snackBar.open('Erro ao criar novo labor', 'Fechar', {
            duration: 2000,
          });
        },
      });
    });
  }

  openEditModal(labor: ILabor) {
    const dialogRef = this.dialog.open(LaborDialogComponent, {
      width: '40%',
      height: '35%',
      data: labor,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }

      this.laborService
        .update({ id: labor.id, isDone: labor.isDone, ...result })
        .subscribe({
          next: () => {
            this.getAllLabors(this.currentPage, this.size);
          },
          error: () => {
            this.snackBar.open('Erro ao editar labor', 'Fechar', {
              duration: 2000,
            });
          },
        });
    });
  }

  markAsDone(labor: ILabor) {
    this.laborService.update(labor).subscribe({
      next: () => {
        this.getAllLabors(this.currentPage, this.size);
      },
      error: () => {
        this.snackBar.open('Erro ao marcar labor como feito', 'Fechar', {
          duration: 2000,
        });
      },
    });
  }
}
