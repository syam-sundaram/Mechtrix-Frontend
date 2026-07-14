import { AbstractControl, ValidationErrors } from '@angular/forms';

export function PasswordValidator(
  control: AbstractControl
): ValidationErrors | null {

  const password = control.get('password');
  const confirmPassword = control.get('confirm_password');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value !== confirmPassword.value
    ? { misMatch: true }
    : null;
}