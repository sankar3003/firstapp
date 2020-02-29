import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymoduleRoutingModule } from './mymodule-routing.module';
import { MymoduleComponent } from './mymodule.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTableModule } from 'ng-zorro-antd/table';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [MymoduleComponent],
  imports: [
    CommonModule,
    MymoduleRoutingModule,NzMenuModule,NzSwitchModule,
    NzDividerModule,
    NzTabsModule,
    // add FormModule in import
     FormsModule,
     NzPageHeaderModule,
     NzRadioModule,
     NzTableModule,
     MatTableModule
  ]
})
export class MymoduleModule { }
