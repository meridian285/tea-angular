import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[formExists]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => FormExistsDirective), multi: true}
  ]
})
export class FormExistsDirective implements AsyncValidator{

  constructor() { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
        // resolve({formExists: {value: control.value}});
      }, 3000)
    })

  }

}
