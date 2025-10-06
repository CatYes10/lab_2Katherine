import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  open(title: string, message: string, type: 'success' | 'error' | 'info' = 'info'): void {
    let fullMessage = `${title}\n\n${message}`;
    
    switch (type) {
      case 'success':
        console.log('✅ Success:', fullMessage);
        alert(fullMessage); 
        break;
      case 'error':
        console.error('❌ Error:', fullMessage);
        alert(fullMessage);
        break;
      default:
        console.log('ℹ️ Info:', fullMessage);
        alert(fullMessage);
        break;
    }
  }
}
