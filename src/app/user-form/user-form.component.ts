import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {


  form: FormGroup;
  addresses: any;
  submitted: boolean=false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      userName:['',Validators.required],
      age:['',Validators.required],
      addresses: this.fb.array([]),
    });
  }
  ngOnInit() {
   
  }
  addaddress() {
   this.addresses = this.form.controls.addresses as FormArray;
    this.addresses.push(this.fb.group({
      street: ['',Validators.required],
      city:['',Validators.required],
      state: ['',Validators.required],
      country:['',Validators.required]
    }));
  }

  removeAdd(index){
this.addresses.removeAt(index)
  }
  submit(){

    this.validateAllFormFields(this.form);
    if(this.form.valid){
      console.log(this.form)
    }
    else{
      console.log("error occured")
    }
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
}