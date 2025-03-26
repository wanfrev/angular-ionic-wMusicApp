// src/app/pages/profile/profile.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './profile.page.html',
})
export class ProfilePageComponent {
  userId = localStorage.getItem('userId');
  token = localStorage.getItem('token');

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }
}
