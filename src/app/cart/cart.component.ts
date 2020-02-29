import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormGroup, FormBuilder} from "@angular/forms"
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any;

form: FormGroup;
  constructor(
    private service:CartService,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
this.form=this.fb.group({
  name:'',
  address:''
})

    this.getItems();
  }
getItems(){
this.items=this.service.getItems();
}

submit(){
 // this.items=this.service.clearCart();
console.log(this.form)
console.log("you Entered Values are" +'' + this.form)
}
reset(){
  this.form.reset();
}
}
