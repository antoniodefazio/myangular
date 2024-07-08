import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'; // Import the environment configuration

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl = environment.apiUrl; // Use the API URL from environment variables

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/users');
  }

  getContacts(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'/contacts');
  }
}

