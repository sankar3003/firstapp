import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  registerForm: FormGroup;
  addresses: any;
  snackBar: any;
  subForm: any;
  name: string='Angular User Reactive Form';
  addreses: FormArray;
  products: FormArray;
  val: any;
  
  
  

  constructor(
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    public snackbar:MatSnackBar,
  ) { 
    this.registerForm = this.fb.group({
      name: [null, Validators.required],
      age: [null,Validators.required],
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: [null, Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
      addresses:new FormArray([this.createProduct()]),
    mainArea:this.fb.group({
      mainAddress:[null,Validators.required],
      mainName:[null,Validators.required]
    })
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      },
    
    );
    this.registerForm.get('name').valueChanges.subscribe(res=>{
console.log(res)
    })
  }

  ngOnInit() {
 
  
  }
  getControls() {
    return (this.registerForm.get('addresses') as FormArray).controls;
  }
  addproducts() {
    this.addresses = this.registerForm.controls.addresses as FormArray;
     this.addresses.push(this.createProduct())
   }
 removeproduct(i){
    
    this.addresses.removeAt(i);
 }


  get registerFormControl() {
    return this.registerForm.controls;
  }


createProduct():FormGroup{
  return this.fb.group({
     address:[null,Validators.required],
     street:[null,Validators.required],
     city:[null,Validators.required],
     pincode:[null,Validators.required]
  })
}

 
   removeAdd(index){
    this.addresses.removeAt(index)
   }
  onSubmit() {
    this.validateAllFormFields(this.registerForm);
   this.subForm=this.registerForm.value;
     
     console.log(JSON.stringify(this.subForm));


    }
  
  

  validateAllFormFields(formGroup: FormGroup) {         //{1}
  Object.keys(formGroup.controls).forEach(field => {  //{2}
    const control = formGroup.get(field);             //{3}
    if (control instanceof FormControl) {             //{4}
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {        //{5}
      this.validateAllFormFields(control);            //{6}
    }

  });
}


}