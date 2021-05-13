import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { WeaponListComponent } from './components/weapon-list/weapon-list.component';

const routes = [
  {
    path: '',
    component: WeaponListComponent,
  }
];

@NgModule({
  declarations: [WeaponListComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class WeaponModule { }
