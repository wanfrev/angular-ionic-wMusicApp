import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProfilePage implements OnInit {
  email: string = '';
  username: string = '';

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) {}

  ngOnInit() {
    console.log('ProfilePage initialized');
    this.loadUserProfile();
  }

  loadUserProfile() {
    const user = this.authService.getUser();
    if (user && user.email) {
      this.email = user.email;
      this.username = user.username;
    } else {
      this.router.navigate(['/auth/login']);
    }
  }


  signOut() {
    this.authService.logout(); // Usar el método de logout del AuthService
  }

  navigateBack() {
    this.location.back();
  }
}
