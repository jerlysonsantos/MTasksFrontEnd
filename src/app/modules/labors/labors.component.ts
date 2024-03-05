import { Component, Inject, OnInit } from '@angular/core';
import { LaborService } from './services/labors.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { LaborDialogComponent } from './labor-dialog/labor-dialog.component';
import { ILabor } from './interfaces/labor.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderFeedbackService } from '../shared/loader-feedback';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/services/auth.service';

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
    @Inject(AuthService)
    private authService: AuthService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private loaderFeedbackService: LoaderFeedbackService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getAllLabors();
  }

  getAllLabors(page: number = 0, size: number = 10) {
    this.currentPage = page;
    this.size = size;

    this.loaderFeedbackService.addLoad('gettAllLabors');

    this.laborService.getAll(page, size).subscribe({
      next: (response) => {
        this.totalItens = response.size;
        this.labors$.next(response.labors);
      },
      error: () => {
        this.snackBar.open('Erro ao buscar tarefas', 'Fechar', {
          duration: 2000,
        });
      },
      complete: () => {
        this.loaderFeedbackService.removeLoad('gettAllLabors');
      },
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

      this.loaderFeedbackService.addLoad('newLabor');

      this.laborService.create(result).subscribe({
        next: () => {
          this.getAllLabors(this.currentPage, this.size);
        },
        error: () => {
          this.snackBar.open('Erro ao criar novo labor', 'Fechar', {
            duration: 2000,
          });
        },
        complete: () => {
          this.loaderFeedbackService.removeLoad('newLabor');
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

      this.loaderFeedbackService.addLoad('editLabor');

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
          complete: () => {
            this.loaderFeedbackService.removeLoad('editLabor');
          },
        });
    });
  }

  markAsDone(labor: ILabor) {
    this.loaderFeedbackService.addLoad('markAsDone');

    this.laborService.update(labor).subscribe({
      next: () => {
        this.getAllLabors(this.currentPage, this.size);
      },
      error: () => {
        this.snackBar.open('Erro ao marcar labor como feito', 'Fechar', {
          duration: 2000,
        });
      },
      complete: () => {
        this.loaderFeedbackService.removeLoad('markAsDone');
      },
    });
  }

  remove(labor: ILabor) {
    if (!labor.id) {
      return;
    }

    this.loaderFeedbackService.addLoad('removeLabor');

    this.laborService.remove(labor.id).subscribe({
      next: () => {
        this.getAllLabors(this.currentPage, this.size);
      },
      error: () => {
        this.snackBar.open('Erro ao remover labor', 'Fechar', {
          duration: 2000,
        });
      },
      complete: () => {
        this.loaderFeedbackService.removeLoad('removeLabor');
      },
    });
  }

  logOut() {
    this.loaderFeedbackService.addLoad('logout');
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/autenticacao']);
      },
      complete: () => {
        this.loaderFeedbackService.removeLoad('logout');
      },
    });
  }

  get laborIsEmpty(): boolean {
    return this.labors$.value.length === 0;
  }
}
