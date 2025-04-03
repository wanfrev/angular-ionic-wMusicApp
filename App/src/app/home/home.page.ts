import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule
import { Router } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule], // Importar módulos necesarios
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Permitir componentes personalizados de Ionic
})
export class HomePage implements OnInit {
  exploreSongs: any[] = [];
  popularTracks: any[] = [];
  newReleases: any[] = [];
  recommendedTracks: any[] = [];

  constructor(private spotifyService: SpotifyService, private router: Router) {}

  ngOnInit() {
    this.spotifyService.getFeaturedPlaylists().subscribe({
      next: (res) => (this.exploreSongs = res.playlists),
      error: (err) => console.error('Error en featured:', err),
    });

    this.spotifyService.getPopularTracks().subscribe({
      next: (res) => (this.popularTracks = res.tracks),
      error: (err) => console.error('Error en populares:', err),
    });

    this.spotifyService.getNewReleases().subscribe({
      next: (res) => (this.newReleases = res.releases),
      error: (err) => console.error('Error en lanzamientos:', err),
    });

    this.spotifyService.getRecommendations().subscribe({
      next: (res) => (this.recommendedTracks = res.recommendations),
      error: (err) => console.error('Error en recomendaciones:', err),
    });
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  navigateToDetail(id: string) {
    this.router.navigate([`/detail-song`, id]);
  }
}
