import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { Lazy1Component } from './lazy1.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [LazyComponent, Lazy1Component],
  imports: [
    CommonModule,
    LazyRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class LazyModule { }
