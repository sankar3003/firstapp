import { Component, OnInit, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MyService } from '../my.service';
import { variable, ThrowStmt } from '@angular/compiler/src/output/output_ast';





@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
   form:FormGroup;
   products: FormArray;
   countries = ['', 'USA', 'Germany', 'Italy', 'France'];

   ngOnInit(): void {
    
   }
 
   constructor(
      private fb:FormBuilder,
   ){

this.form=this.fb.group({
   name:[null,Validators.required],
   products:new FormArray([this.createProduct()])
})

this.form.get('name').valueChanges.subscribe(res=>{
   console.log(res);

})

   }

   createProduct():FormGroup{
      return this.fb.group({
         item:['',Validators.required,Validators.minLength(3)],
         price:[null,Validators.required],
         description:[null,Validators.required],
         status:[null,Validators.required]
      })
   }
   getControls() {
      return (this.form.get('products') as FormArray).controls;
    }
    addproducts() {
      this.products = this.form.controls.products as FormArray;
       this.products.push(this.createProduct())
     }
   removeproduct(i){
      
      this.products.removeAt(i);
   }

   reset(){
      this.form.reset();
   }
  
submit(){
   this.validateAllFormFields(this.form);
   if(this.form.valid){
      console.log(this.form.value);
   }

else{
   console.log(this.form)
   console.log("The from is not valid");
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
