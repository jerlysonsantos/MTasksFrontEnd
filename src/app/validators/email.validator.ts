import { AbstractControl } from '@angular/forms';
import { Observable, of } from 'rxjs';

interface IValidateReturn {
  valid: boolean;
  message: string;
}

export class ValidateEmail {
  static valid(control: AbstractControl): Observable<IValidateReturn | null> {
    if (!control.value) {
      return of(null);
    }

    if (ValidateEmail.validEmail(control.value)) {
      return of(null);
    }

    return of({
      valid: false,
      message: 'Email inválido',
    });
  }

  static validEmail(value: string): boolean {
    const REG_EMAIL =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const testEmail = REG_EMAIL.test(value.toLowerCase());

    if (testEmail) {
      return !!testEmail;
    } else {
      return false;
    }
  }
}
