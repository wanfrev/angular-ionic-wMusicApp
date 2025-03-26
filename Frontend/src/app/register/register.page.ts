import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './register.page.html',
})
export class RegisterPageComponent {
  email = '';
  password = '';
  confirmPassword = '';

  private API_BASE_URL = 'https://tu-api.com'; // cambia esta URL por la real

  constructor(private http: HttpClient, private router: Router) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await this.http.post<any>(`${this.API_BASE_URL}/users/register`, {
        email: this.email,
        password: this.password,
      }).toPromise();

      alert('Registro exitoso. Inicia sesión.');
      this.router.navigate(['/login']);
    } catch (err: any) {
      alert(err?.error?.msg || 'Error en el registro');
    }
  }
}
