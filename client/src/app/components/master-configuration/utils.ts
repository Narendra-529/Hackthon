import { FormArray, FormControl, FormGroup } from "@angular/forms";

import { AbstractControl, ValidatorFn } from '@angular/forms';

export const getFormErrors = (formGroup: FormGroup | FormArray): any => {
    const errors = {};
  
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
  
      if (control instanceof FormGroup || control instanceof FormArray) {
        const nestedErrors = getFormErrors(control);
        if (Object.keys(nestedErrors).length > 0) {
          errors[key] = nestedErrors;
        }
      }
  
      if (control instanceof FormControl && control.errors) {
        errors[key] = control.errors;
      }
    });
  
    return errors;
  };
  


export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    return isNaN(value) ? { 'notNumber': { value } } : null;
  };
}

export function rangeValidator(): ValidatorFn {
  return (formGroup: FormGroup): { [key: string]: any } | null => {
    const aboveRange = formGroup.get('aboveRange');
    const belowRange = formGroup.get('belowRange');

    if (aboveRange && belowRange) {
      const aboveValue = aboveRange.value;
      const belowValue = belowRange.value;

      return aboveValue !== null && belowValue !== null && belowValue > aboveValue
        ? null
        : { 'rangeInvalid': true };
    }
    return null;
  };
}