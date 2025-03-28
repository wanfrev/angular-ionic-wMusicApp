import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicFeatureModule } from '../../ionic.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicFeatureModule, FormsModule]
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  handleLogin() {
    if (!this.username || !this.password) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    this.authService.login({
      email: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert(err.error?.message || 'Error al iniciar sesión');
      }
    });
  }

  // Nueva función para navegar a la página de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
