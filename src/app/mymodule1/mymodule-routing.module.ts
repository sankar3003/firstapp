import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MymoduleComponent } from './mymodule.component';

const routes: Routes = [{ path: '', component: MymoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MymoduleRoutingModule { }
