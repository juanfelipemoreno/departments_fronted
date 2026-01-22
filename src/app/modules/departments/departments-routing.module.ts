import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentFormComponent } from './page/department-form/department-form.component';
import { DepartmentListComponent } from './page/department-list/department-list.component';

const routes: Routes = [
  { path : '', component: DepartmentListComponent},
  { path : 'create', component: DepartmentFormComponent},
  { path : 'edit/:id', component: DepartmentFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
