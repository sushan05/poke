import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPincodeValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PincodeValidatorDirective, multi: true}]
})
export class PincodeValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl) {
    const pinReg = new RegExp(`^[0-9]{6}$`);

    if(!pinReg.test(control.value))
    {
      return { pinError: true };
    }

    return null;
  }
}
