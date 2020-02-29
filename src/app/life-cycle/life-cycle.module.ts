import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleRoutingModule } from './life-cycle-routing.module';
import { LifeCycleComponent } from './life-cycle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';


@NgModule({
  declarations: [LifeCycleComponent],
  imports: [
    CommonModule,
    LifeCycleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class LifeCycleModule { }
