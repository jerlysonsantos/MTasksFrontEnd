import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'autenticacao',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tarefas',
    loadChildren: () =>
      import('./labors/labors.module').then((m) => m.LaborsModule),
  },
  { path: '**', redirectTo: 'autenticacao' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
