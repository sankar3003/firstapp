import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [CustomersComponent,
    
  ],
  imports: [
    FormsModule,ReactiveFormsModule,
    CommonModule,
    CustomersRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ]
})
export class CustomersModule { }
