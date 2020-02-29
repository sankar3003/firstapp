import { Component, OnInit } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-mymodule',
  templateUrl: 'mymodule.component.html',
  styleUrls: ['./mymodule.component.scss']
})
export class MymoduleComponent implements OnInit {
  ngOnInit() {
    this.getTotalCost()
  }
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 1},
    {item: 'Towel', cost: 1},
    {item: 'Frisbee', cost: 1},
    {item: 'Sunscreen', cost: 1},
    {item: 'Cooler', cost: 1},
    {item: 'Swim suit', cost: 1},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost(){
    return this.transactions.map(t => t.cost).reduce((first_value, second_value) => first_value + second_value);
  }
}
