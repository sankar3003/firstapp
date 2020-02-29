import { Component, OnInit, Input } from '@angular/core';

import { products } from '../products';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products = products;
  ngOnInit(): void {

  }


  share() {
    window.alert('The product has been shared!');
  }

  onNotify(product) {
    window.alert('You will be notified when the product goes on sale' +product);
  }
}
