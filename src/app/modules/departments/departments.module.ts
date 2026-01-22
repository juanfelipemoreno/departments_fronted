import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DepartmentsRoutingModule } from './departments-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
