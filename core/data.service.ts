import { Injectable } from '@angular/core';
export interface PackageUpdate {
  fecha: Date;
  estado: string;
  comentario: string;
  responsable: string;
}

export interface Package {
  id: string;
  packageNumber: string;
  name: string;
  email: string;
  deliveryAddress: string;
  description: string;
  estado?: string;
  comentario?: string;
  responsable?: string;
  historial?: PackageUpdate[]; 
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private packages: Package[] = [];
  private nextId = 1;

  constructor() {}

  createPackage(data: Omit<Package, 'id' | 'packageNumber' | 'estado'>): Package {
  const newPackage: Package = {
    id: (this.nextId++).toString(),  
    packageNumber: 'PKG' + Math.floor(100000 + Math.random() * 900000).toString(),
    estado: 'En preparación',
    ...data
  };
  this.packages.push(newPackage);
  return newPackage;
}


  getAllPackages(): Package[] {
    return [...this.packages];
  }


  getPackageByNumber(number: string): Package | null {
  return this.packages.find(p => p.packageNumber === number) || null;
}

updatePackageStatus(packageNumber: string, estado: string, comentario: string, responsable: string): void {
  const pkg = this.packages.find(p => p.packageNumber === packageNumber);
  if (pkg) {
    pkg.estado = estado;
    pkg.comentario = comentario;
    pkg.responsable = responsable;

    // Guardar en historial
    if (!pkg.historial) pkg.historial = [];
    pkg.historial.push({
      fecha: new Date(),
      estado,
      comentario,
      responsable
    });
  }
}

  // Busqueda
  getPackageById(id: number): Package | undefined {
  return this.packages.find(p => p.id === id.toString());
}

  getPackageByPackageNumber(packageNumber: string): Package | undefined {
    return this.packages.find(p => p.packageNumber === packageNumber);
  }

  getPackageByTracking(tracking: string): Package | undefined {
    if (!tracking) return undefined;

    // Primero intenta como packageNumber exacto
    const byPkg = this.getPackageByPackageNumber(tracking);
    if (byPkg) return byPkg;

    const n = Number(tracking);
    if (!isNaN(n)) {
      return this.getPackageById(n);
    }

    return undefined;
  }

  updatePackageByPackageNumber(packageNumber: string, changes: Partial<Package>): Package | null {
    const idx = this.packages.findIndex(p => p.packageNumber === packageNumber);
    if (idx === -1) return null;
    this.packages[idx] = { ...this.packages[idx], ...changes };
    return this.packages[idx];
  }

  updatePackage(updated: Package): void {
    const idx = this.packages.findIndex(p => p.id === updated.id);
    if (idx !== -1) this.packages[idx] = updated;
  }

  
  resetPackages(): void {
    this.packages = [];
    this.nextId = 1;
  }
}
