import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'autenticacao',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tarefas',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/labors/labors.module').then((m) => m.LaborsModule),
  },
  { path: '**', redirectTo: 'autenticacao' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
