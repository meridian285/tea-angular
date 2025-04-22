import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn} from "@angular/forms";

export function nameValidator(pattern: string): ValidatorFn {
  return   (control: AbstractControl): ValidationErrors | null => {
    const result = new RegExp(pattern).test(control.value);
    return result ? null : {pattern: {value: control.value}};
  }
}

@Directive({
  selector: '[appNameValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}
  ]
})
export class NameValidatorDirective {

  @Input('lastNameValidator')pattern = '';

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return nameValidator(this.pattern)(control);
  }
}
