import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(AuthService)
    private readonly authSerive: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this.authSerive.login(username, password).subscribe({
      next: () => {
        this.snackBar.open('Logado com sucesso!', 'Fechar', { duration: 500 });
        this.router.navigate(['tarefas']);
      },
      error: () => {
        this.snackBar.open('Algum erro ocorreu!', 'Fechar', { duration: 500 });
      },
    });
  }
}
