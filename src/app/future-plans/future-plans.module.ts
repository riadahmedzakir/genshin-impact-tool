import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FuturePlansDefaultComponent } from './future-plans-default/future-plans-default.component';
import { MaterialModule } from '../shared/material.module';

const routes = [
  {
    path: '',
    component: FuturePlansDefaultComponent,
  }
];

@NgModule({
  declarations: [FuturePlansDefaultComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class FuturePlansModule { }
