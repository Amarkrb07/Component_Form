import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    student = {
      name: '',
      rollNo: '',
      course: '',
      email: '',
      contact: ''
    };
  
    submitForm() {
      console.log('Student Data:', this.student);
      alert('Form submitted successfully!');
      // Reset form if needed:
      this.student = {
        name: '',
        rollNo: '',
        course: '',
        email: '',
        contact: ''
      };
    }

}
