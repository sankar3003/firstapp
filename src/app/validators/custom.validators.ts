import { AbstractControl } from '@angular/forms';


export function nameValidation(control: AbstractControl) {
  if (!control.value.startsWith('m') || !control.value.includes('n')) {
    return { urlValid: true };
  }
  return null;
}