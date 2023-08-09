import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  @Output() close = new EventEmitter<void>();

  userName = 'Weronika s';
  name = 'Dynamiczna Mapa Jakości Powietrza';

  mobileNumber: string = '';
  landlineNumber: string = '';
  internalNumber: string = '';

  formatInputMobile(inputValue: string): void {
    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 9);
    this.mobileNumber = limitedValue.replace(/(\d{3})(?=\d)/g, '$1 ');
  }

  formatInputLandline(inputValue: string): void {
    const numericValue = inputValue.replace(/\D/g, '');
    const formattedGroups = numericValue.match(/^(\d{2})(\d{3})(\d{2})(\d{2})/);
    if (formattedGroups) {
      this.landlineNumber = formattedGroups.slice(1).join(' ');
    } else {
      this.landlineNumber = numericValue;
    }
  }

  formatInputInternal(inputValue: string): void {
    const numericValue = inputValue.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 9);
    this.internalNumber = limitedValue.replace(/(\d{3})(?=\d)/g, '$1 ');
  }


  closeModal() {
    this.close.emit();
  }
}
