import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService, Package, PackageUpdate } from '../core/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seguir-orden',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './seguirOrden.html',
  styleUrls: ['./seguirOrden.css']
})
export class SeguirOrden implements OnInit {

  trackingForm: FormGroup;
  packageInfo: Package | null = null;
  historial: PackageUpdate[] = [];

  constructor(
    private fb: FormBuilder,
    private dataService: DataService
  ) {
    this.trackingForm = this.fb.group({
      trackingId: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  buscarPaquete(): void {
    const trackingId = this.trackingForm.get('trackingId')?.value;
    if (!trackingId) return;

    const pkg = this.dataService.getPackageByTracking(trackingId);
    if (pkg) {
      this.packageInfo = pkg;

      this.historial = (pkg.historial || []).sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
    } else {
      this.packageInfo = null;
      this.historial = [];
      alert('No se encontró el paquete con ese número de rastreo');
    }
  }
}
