import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
    {
        path: 'departments',
        component: MainLayoutComponent,
        loadChildren: () => import("./modules/departments/departments.module").then(m => m.DepartmentsModule)
    },
    { path: '**', redirectTo: 'departments' }
];
