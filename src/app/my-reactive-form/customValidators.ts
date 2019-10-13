import { AbstractControl } from '@angular/forms';

export function pincodeValidator(control: AbstractControl) {
    const pinReg = new RegExp(`^[0-9]{6}$`);

    if(!pinReg.test(control.value))
    {
      return { pinError: true };
    }

    return null;
}