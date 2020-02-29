import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { Testcase1Component } from './testcase1/testcase1.component';
import { AddformfbComponent } from './addformfb/addformfb.component';
import { DemoComponent } from './demo/demo.component';

import { UserFormComponent } from './user-form/user-form.component';
import { TestformbuilderComponent } from './testformbuilder/testformbuilder.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/reactiveFrom' },
  {path:'skills',component:SkillsComponent},
  {path:'testcase',component:Testcase1Component},
  {path:'testform',component:TestformbuilderComponent},
  {path:'addfbform',component:AddformfbComponent},
  {path:'demoform',component:DemoComponent},
  {path:'userForm',component:UserFormComponent},
  {path:'cart',component:CartComponent},
  {path:'shipping',component:ShippingComponent},
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'prime', loadChildren: () => import('./prime/prime.module').then(m => m.PrimeModule) },
  { path: 'life-cycle', loadChildren: () => import('./life-cycle/life-cycle.module').then(m => m.LifeCycleModule) },

  { path: 'product_list', loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListModule) },
  { path: 'products/:productId', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
