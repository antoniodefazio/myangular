import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'; // Import the environment configuration
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  private readonly apiUrl = environment.apiUrl; // Use the API URL from environment variables
  contactColumns = [
    { name: 'name', type: 'name',  displayType: 'text' },
    { name: 'email', type: 'email' ,displayType: 'text'  },
    { name: 'message', type: 'name', displayType: 'checkbox' }
  ];
  contactData: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userService.getContacts().subscribe(data => {
      this.contactData = data;
    });
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      this.http.post(`${this.apiUrl}/contact`, formData).subscribe(
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

