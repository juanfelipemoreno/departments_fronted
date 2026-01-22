import { Component, OnInit } from '@angular/core';
import { Department } from '../../models/department.model';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  
  departments: Department[] = [];
  allDepartments: Department[] = [];
  showModal = false;
  isEdit = false;
  form: FormGroup;
  editingId: number | null = null;

  constructor(private service: DepartmentService, private fb: FormBuilder){
    this.form = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      status: [true]
    });
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(){
    this.service.getAll().subscribe({
      next: (data) => this.departments = data,
      error: () => alert('Error cargando departamentos')
    });
  }

  openCreateModal(): void {
    this.isEdit = false;
    this.form.reset({ code: '', name: '', status: true });
    this.showModal = true;
  }

  openEditModal(dept: Department): void {
    this.isEdit = true;
    this.editingId = dept.id!;

    this.form.patchValue(dept);
      this.form.patchValue({
      code: dept.code,
      name: dept.name,
      status: dept.status
    });

    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
    this.form.reset();
  }

  save(): void {
    if (this.form.invalid) return;

    const data = this.form.value;

    if (this.isEdit && this.editingId !== null) {
      this.service.update(this.editingId, data).subscribe({
        next: () => {
          alert('Actualizado');
          this.closeModal();
          this.loadDepartments();
        },
        error: () => alert('Error')
      });
    } else {
      this.service.create(data).subscribe({
        next: () => {
          alert('Creado');
          this.closeModal();
          this.loadDepartments();
        },
        error: () => alert('Error')
      });
    }
  }

  deleteDepartment(id?: number): void {
    if (!id || !confirm('¿Eliminar?')) return;
    
    this.service.delete(id).subscribe({
      next: () => {
        alert('Eliminado');
        this.loadDepartments();
      },
      error: () => alert('Error')
    });
  }
}
