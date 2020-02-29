import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestformbuilderComponent } from './testformbuilder/testformbuilder.component';

import { RouterModule } from '@angular/router';

import { AddformfbComponent } from './addformfb/addformfb.component';
import { DemoComponent } from './demo/demo.component';
import { Testcase1Component } from './testcase1/testcase1.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SkillsComponent } from './skills/skills.component';

import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms"
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzStepsModule } from 'ng-zorro-antd/steps';

import { MatFormFieldModule } from '@angular/material/form-field';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

registerLocaleData(en);
@NgModule({
   declarations: [
      AppComponent,
      TestformbuilderComponent,
      AddformfbComponent,
      DemoComponent,
      Testcase1Component,
      UserFormComponent,
      ReactiveFormComponent,
      NavBarComponent,
      SkillsComponent,
      ToolBarComponent,
      CartComponent,
      ShippingComponent
   ],
   imports: [
      BrowserModule,
      NzStepsModule,
      NzSliderModule,
      NzButtonModule,
      NzIconModule,
      RouterModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule,
      MatSnackBarModule,
      RxReactiveFormsModule,
      RxReactiveDynamicFormsModule,
      IconsProviderModule,
      NgZorroAntdModule,
      HttpClientModule,
      MatFormFieldModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
