import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      RouterModule
    ]
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.email, this.password).subscribe({
      next: (res) => {
        this.router.navigate(['/home']); // Redirige después de registrarse
      },
      error: (err) => {
        this.errorMessage = err.error?.error || 'Error al registrar';
      }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
