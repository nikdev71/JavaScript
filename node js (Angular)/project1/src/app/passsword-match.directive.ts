import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchDirective, multi: true }]
})
export class PasswordMatchDirective implements Validator {
  @Input('appPasswordMatch') passwordToMatch!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    const confirmPassword = control.root.get(this.passwordToMatch)?.value;

    return password === confirmPassword ? null : { passwordMatch: true };
  }
}