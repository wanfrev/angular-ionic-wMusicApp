import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {
  popularSongs: any[] = [];
  recommendedSongs: any[] = [];
  exploreSongs: any[] = [];
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs() {
    // Simulación de datos locales
    this.popularSongs = [
      { id: '1', title: 'Canción Popular 1', artist: 'Artista 1', albumCover: 'assets/images/cover1.jpg' },
      { id: '2', title: 'Canción Popular 2', artist: 'Artista 2', albumCover: 'assets/images/cover2.jpg' }
    ];

    this.recommendedSongs = [
      { id: '3', title: 'Canción Recomendada 1', artist: 'Artista 3', albumCover: 'assets/images/cover3.jpg' },
      { id: '4', title: 'Canción Recomendada 2', artist: 'Artista 4', albumCover: 'assets/images/cover4.jpg' }
    ];

    this.exploreSongs = [
      { id: '5', title: 'Canción Explorar 1', artist: 'Artista 5', albumCover: 'assets/images/cover5.jpg' },
      { id: '6', title: 'Canción Explorar 2', artist: 'Artista 6', albumCover: 'assets/images/cover6.jpg' }
    ];
  }

  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  navigateToDetail(songId: string) {
    this.router.navigate(['/detail-song', songId]);
  }
}
