// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API_BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.API_BASE_URL}/users/login`, { email, password });
  }

  register(username: string, email: string, password: string, idRol: string) {
    return this.http.post<any>(`${this.API_BASE_URL}/users/register`, { username, email, password, idRol });
  }

  guardarSesion(data: { token: string; userId: string; roleDescription: string }) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('role', data.roleDescription);
  }

  cerrarSesion() {
    localStorage.clear();
  }
}
