import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { greaterThanValidatorExtension } from '@rxweb/reactive-form-validators/validators-extension';
import { MyService } from '../my.service';


@Component({
  selector: 'app-testcase1',
  templateUrl: './testcase1.component.html',
  styleUrls: ['./testcase1.component.scss']
})
export class Testcase1Component implements OnInit {
    addressForm: FormGroup;
    countries: { id: string; name: string; }[];
    states: ({ id: string; name: string; code: string; } | { id: string; name: string; code?: undefined; })[];
  count: number;
    
    
  constructor(public fb:FormBuilder ,
    public service:MyService 
    ){
        this.countries = [{id: 'IND', name: 'India'}, {id: 'UK', name: 'United Kingdom'}, {id: 'FR', name: 'France'}];
        this.states = [{ id: "1", name: "Tamil Nadu", code:'12' }, { id: "2", name: "Andra Pradesh" ,code:'1234345'}, { id: "3", name: "Maharastra" ,code:'121321' }, { id: "4", name: "Karnataga" ,code:"21321" }];
  }


  ngOnInit(): void {

this.service.count.subscribe(res=>{
  this.count=res
})

    this.initAddressForm();
this.onChanges();
}

nextCount(){
  this.service.nextCount();
}

initAddressForm() {
    this.addressForm = this.fb.group({
        addressLine1: ['', Validators.required],
        addressLine2: [''],
        city: ['', Validators.required],
        state: ['',],
        postalCode: ['', Validators.required,],
        country: ['', Validators.required]
    });
  }
  onChanges() {
    this.addressForm.get('country').valueChanges
    .subscribe(selectedCountry => {
        
        this.addressForm.get('state').setValidators([Validators.required]);
        if (selectedCountry != 'IND') {
   
            this.addressForm.get('state').reset();
            this.addressForm.get('state').disable();
         
        }
        else {
          this.addressForm.get('state').enable();
        
        }
    });
}

submit(){
  console.log(this.addressForm)
       this.validateAllFormFields(this.addressForm)
        if(this.addressForm.valid){
            console.log(this.addressForm.value)
            console.log(this.addressForm)
     }
    }
validateAllFormFields(formGroup: FormGroup) {         //{1}
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