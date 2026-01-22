import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentListComponent } from './page/department-list/department-list.component';

@NgModule({
  declarations: [DepartmentListComponent],
  imports: [
    CommonModule,
    RouterModule,
    DepartmentsRoutingModule
  ]
})
export class DepartmentsModule { }
