import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm {
  submitForm(form: any) {
    console.log(form); // form.value , form,status
    console.log(form.value); 
  }
}
