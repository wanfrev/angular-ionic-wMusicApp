import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPageComponent {
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  idRol = '2'; // 1 para artista, 2 para usuario normal

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await this.authService
        .register(this.username, this.email, this.password, this.idRol)
        .toPromise();

      alert('Registro exitoso. Inicia sesión.');
      this.router.navigate(['/login']);
    } catch (err: any) {
      alert(err?.error?.message || 'Error en el registro');
    }
  }
}
