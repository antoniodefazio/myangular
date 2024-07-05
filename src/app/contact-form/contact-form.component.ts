import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  private apiUrl = 'http://localhost:8081/contact'; 
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post(`${this.apiUrl}`, formData).subscribe(
        response => {
          console.log('Form submitted successfully', response);
        },
        error => {
          console.error('Error submitting form', error);
        }
      );
    }
  }
}

