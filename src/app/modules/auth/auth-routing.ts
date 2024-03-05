import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: 'registrar',
    component: AuthComponent,
    data: {
      isRegister: true,
    },
  },
  {
    path: 'entrar',
    component: AuthComponent,
    data: {
      isRegister: false,
    },
  },
  { path: '**', redirectTo: 'registrar' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
