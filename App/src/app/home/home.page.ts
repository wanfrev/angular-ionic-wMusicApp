import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, HttpClientModule]
})
export class HomePage implements OnInit {
  popularSongs: any[] = [];
  recommendedSongs: any[] = [];
  exploreSongs: any[] = [];
  errorMessage: string = '';

  constructor(
    private router: Router,
    private musicService: MusicService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.verifySession();
    this.loadSongs();
  }

  verifySession() {
    this.http.get('http://localhost:5000/api/user/session').subscribe({
      next: () => {},
      error: () => this.router.navigate(['/login']),
    });
  }

  loadSongs() {
    this.musicService.getPopularSongs().subscribe({
      next: (data) => this.popularSongs = data,
      error: () => this.errorMessage = 'Error al cargar canciones populares'
    });

    this.musicService.getRecommendedSongs().subscribe({
      next: (data) => this.recommendedSongs = data,
      error: () => this.errorMessage = 'Error al cargar recomendaciones'
    });

    this.musicService.getExploreSongs().subscribe({
      next: (data) => this.exploreSongs = data,
      error: () => this.errorMessage = 'Error al cargar el catálogo'
    });
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  navigateToDetail(songId: string) {
    this.router.navigate(['/detail-song', songId]);
  }
}
