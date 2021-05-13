import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';
import { RoutingModule } from './routing.module';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { RootDefaultComponent } from './components/root-default/root-default.component';

@NgModule({
  declarations: [
    RootDefaultComponent,
    IntroductionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule
  ],
  bootstrap: [RootDefaultComponent]
})
export class RootModule { }
