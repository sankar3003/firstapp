import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-testformbuilder',
  templateUrl: './testformbuilder.component.html',
  styleUrls: ['./testformbuilder.component.scss']
})
export class TestformbuilderComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          title: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          acceptTerms: [false, Validators.requiredTrue]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(this.registerForm);
      this.validateAllFormFields(this.registerForm);
  }
  validateAllFormFields(formGroup: FormGroup) {   
    //{1}
Object.keys(formGroup.controls).forEach(field => {  //{2}
const control = formGroup.get(field);  

if (control instanceof FormControl) {             //{4}
  control.markAsTouched({ onlySelf: true });
} else if (control instanceof FormGroup) {        //{5}
  this.validateAllFormFields(control);            //{6}
}
});
}

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
