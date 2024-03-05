import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formErrors',
})
export class FormErrorsPipe implements PipeTransform {
  requiredError(): string {
    return 'Campo obrigatório.';
  }

  minLengthError(options: {
    requiredLength: number;
    actualLength: number;
  }): string | void {
    const { actualLength, requiredLength } = options;

    if (actualLength < requiredLength) {
      return `São necessários pelo menos ${requiredLength} caracteres.`;
    }
  }

  maxLengthError(options: {
    requiredLength: number;
    actualLength: number;
  }): string | void {
    const { actualLength, requiredLength } = options;

    if (actualLength > requiredLength) {
      return `São necessários no máximo ${requiredLength} caracteres.`;
    }
  }

  matDatepickerMin(options: { actual: Date; min: Date }): string | void {
    const { actual, min } = options;

    if (actual < min) {
      return `A data escolhida está menor que a data mínima: "${min.toLocaleDateString(
        'pt-BR'
      )}".`;
    }
  }

  email(): string | void {
    return 'O e-mail possui um formato inválido';
  }

  transform(errors: ValidationErrors | null | undefined): string {
    const errorsReturn: (string | void)[] = [];

    if (!errors) {
      return '';
    }

    Object.keys(errors).forEach((error) => {
      const options: any = errors[error];

      switch (error) {
        case 'message':
          errorsReturn.push(options);
          break;

        case 'required':
          errorsReturn.push(this.requiredError());
          break;

        case 'minlength':
          errorsReturn.push(this.minLengthError(options));
          break;

        case 'maxlength':
          errorsReturn.push(this.maxLengthError(options));
          break;

        case 'matDatepickerMin':
          errorsReturn.push(this.matDatepickerMin(options));
          break;

        case 'email':
          errorsReturn.push(this.email());
          break;

        default:
          return;
      }
    });

    return errorsReturn.join(' ');
  }
}
