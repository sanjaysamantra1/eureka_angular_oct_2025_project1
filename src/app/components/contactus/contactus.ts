import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [
    FormsModule
  ],
  templateUrl: './contactus.html',
  styleUrl: './contactus.css',
})
export class Contactus {
  hasChanges:boolean = true;

  submitForm(formData:any){
    this.hasChanges = false;
    console.log(formData)
  }
}
