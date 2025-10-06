import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { DataService, Package } from '../core/data.service';
import { ModalService } from '../modal/modal';
import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-creacion-orden',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './creacionDeOrdenes.html',
  styleUrls: ['./creacionDeOrdenes.css']
})
export class CreacionOrden implements OnInit {

  creationForm: FormGroup;
  formSubmitted: boolean = false;
  newPackage: Package | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalService: ModalService,
    private router:Router
  ) {
    this.creationForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          this.domainValidator(['gmail.com', 'outlook.com'])
        ]
      ],
      deliveryAddress: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(100)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(40),
          Validators.maxLength(120)
        ]
      ]
    });
  }

  ngOnInit(): void { }

  domainValidator(allowedDomains: string[]): (control: AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value as string;
      if (!email || !Validators.email(control)) return null;

      const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
      return allowedDomains.includes(domain) ? null : { restrictedDomain: true };
    };
  }

  goToTracking(): void {
    if (!this.newPackage) return;
    this.router.navigate(['/seguirOrden'], { queryParams: { pkg: this.newPackage.packageNumber } });
  }
  submitOrder(): void {
    this.formSubmitted = true;

    if (this.creationForm.invalid) {
      this.modalService.open(
        'Error de Validación',
        'Por favor, corrija todos los errores del formulario antes de enviar la orden.',
        'error'
      );
      return;
    }

    const formData = this.creationForm.value;
    this.newPackage = this.dataService.createPackage(formData);

    const successMessage = `La orden ha sido creada con éxito. Número de paquete: ${this.newPackage.packageNumber}. ID de Rastreo: ${this.newPackage.id}`;
    this.modalService.open(
      '🎉 Orden Creada con Éxito',
      successMessage,
      'success'
    );

    this.creationForm.reset();
    this.formSubmitted = false;
  }
}
