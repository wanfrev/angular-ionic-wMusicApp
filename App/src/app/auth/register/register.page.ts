import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicFeatureModule } from '../../ionic.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicFeatureModule, FormsModule]
})
export class RegisterPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  handleRegister() {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.authService.register({
      name: this.username,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        alert('Usuario registrado con éxito');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert(err.error?.message || 'Error al registrar');
      }
    });
  }

  // Nueva función para navegar a la página de inicio de sesión
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
