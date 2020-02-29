import { Component, OnInit, createPlatform } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray, MinLengthValidator } from '@angular/forms';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';




@Component({
  selector: 'app-addformfb',
  templateUrl: './addformfb.component.html',
  styleUrls: ['./addformfb.component.scss']
})
export class AddformfbComponent implements OnInit {

  
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;
  submitted: boolean=false;


constructor(){

}
get names():FormArray {
  return this.myform.get('names') as FormArray;
}
  ngOnInit() {
    
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
   // this.email=new FormControl( '', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
  //email:this.email, 
      
      password: this.password,
      language: this.language,
      emails: new FormArray([
        new FormControl('', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
        
      ]),
    });

  }
  get emails(): FormArray {
    return this.myform.get('emails') as FormArray;
  }

  addNameField() { 
    this.emails.push(new FormControl('', Validators.required)); 
  }
  
  deleteNameField(index: number) {
    
    if (this.emails.length !== 1) {
      this.emails.removeAt(index);
    }

  }
  
  
submit(){
  this.submitted=true;

 console.log(this.myform.value) ;
}

  }

