import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './model-driven-form.html',
  styleUrl: './model-driven-form.css',
})
export class ModelDrivenForm {
  signupForm!: FormGroup;
  formBuilder = inject(FormBuilder);

  constructor() {
    // this.usingFormGroup();
    this.usingFormBuilder();
  }
  usingFormGroup() {
    this.signupForm = new FormGroup({
      firstName: new FormControl('Virat', [Validators.required, Validators.minLength(5)]),
      lastName: new FormControl('Kohli'),
      email: new FormControl(),
      address: new FormGroup({
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      })
    }, { updateOn: 'blur' }); // change/blur/submit
  }

  usingFormBuilder() {
    this.signupForm = this.formBuilder.group({
      firstName: ['Virat', [Validators.required, Validators.minLength(5)]],
      lastName: ['Kohli'],
      email: [''],
      address: this.formBuilder.group({
        city: [''],
        state: [''],
        pincode: ['']
      })
    });
  }

  submitMyForm() {
    console.log(this.signupForm);
    console.log(this.signupForm.value);
  }
}
