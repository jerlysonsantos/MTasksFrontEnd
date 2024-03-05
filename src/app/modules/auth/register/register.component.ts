import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ValidateEmail } from 'src/app/validators/email.validator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    @Inject(AuthService)
    private readonly _authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required, ValidateEmail.valid],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;

    this._authService.register(name, username, email, password).subscribe({
      next: () => {
        this.snackBar.open('Resgistrado com sucesso!', 'Fechar', {
          duration: 500,
        });
        this.router.navigate(['autenticacao/entrar']);
      },
      error: () => {
        this.snackBar.open('Algum erro ocorreu!', 'Fechar', { duration: 500 });
      },
    });
  }
}
