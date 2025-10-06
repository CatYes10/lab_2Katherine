import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService, Package } from '../core/data.service';
import { ModalService } from '../modal/modal';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-actualizar-orden',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './actualizarOrden.html',
    styleUrls: ['./actualizarOrden.css'] 

})
export class ActualizarOrden implements OnInit {

  updateForm: FormGroup;
  packageToUpdate: Package | null = null;
  formSubmitted = false;

  estados = ['En preparación', 'En tránsito', 'Entregado', 'Cancelado'];
ordenActualizada: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalService: ModalService
  ) {
    this.updateForm = this.fb.group({
      packageNumber: ['', [Validators.required]],
      estado: ['', [Validators.required]],
      comentario: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(40)]],
      responsable: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)
        ]
      ]
    });
  }

  ngOnInit(): void {}

  buscarOrden(): void {
    const numero = this.updateForm.get('packageNumber')?.value;
    if (!numero) return;

    this.packageToUpdate = this.dataService.getPackageByNumber(numero);

    if (!this.packageToUpdate) {
      this.modalService.open(
        '❌ Orden no encontrada',
        `No se encontró ninguna orden con el número ${numero}.`,
        'error'
      );
    }
  }

  submitUpdate(): void {
    this.formSubmitted = true;

    if (this.updateForm.invalid) {
      this.modalService.open(
        'Error de Validación',
        'Corrige los errores antes de actualizar la orden.',
        'error'
      );
      return;
    }

    if (!this.packageToUpdate) {
      this.modalService.open(
        'Error',
        'Debe buscar una orden válida antes de actualizar.',
        'error'
      );
      return;
    }

    // Actualizamos el estado en el servicio
    this.dataService.updatePackageStatus(
      this.packageToUpdate.packageNumber,
      this.updateForm.get('estado')?.value,
      this.updateForm.get('comentario')?.value,
      this.updateForm.get('responsable')?.value
    );

    this.modalService.open(
      '✅ Orden Actualizada',
      `La orden ${this.packageToUpdate.packageNumber} fue actualizada correctamente.`,
      'success'
    );

    this.updateForm.reset();
    this.packageToUpdate = null;
    this.formSubmitted = false;
  }
}
