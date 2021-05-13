import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { MaterialModule } from '../shared/material.module';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

const routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailsComponent,
  }
];

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
})
export class CharacterModule { }
