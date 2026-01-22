import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { DepartmentService } from '../../services/department.service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  
  departments: Department[] = [];

  constructor(private service: DepartmentService){}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(){
    this.service.getAll().subscribe({
      next: (data) => this.departments = data,
      error: () => alert('Error cargando departamentos')
    });
  }
}
