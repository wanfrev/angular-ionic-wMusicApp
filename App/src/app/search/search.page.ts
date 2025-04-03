import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class SearchPage {
  searchQuery: string = '';
  searchResults: any[] = [];
  allSongs: any[] = [
    { id: '1', title: 'Canción 1', artist: 'Artista 1', albumCover: 'assets/images/cover1.jpg' },
    { id: '2', title: 'Canción 2', artist: 'Artista 2', albumCover: 'assets/images/cover2.jpg' },
    { id: '3', title: 'Canción 3', artist: 'Artista 3', albumCover: 'assets/images/cover3.jpg' },
    { id: '4', title: 'Canción 4', artist: 'Artista 4', albumCover: 'assets/images/cover4.jpg' },
  ];

  constructor(private router: Router, private spotifyService: SpotifyService) {}

onSearch() {
  if (this.searchQuery.trim() === '') {
    this.searchResults = [];
    return;
  }

  this.spotifyService.searchTracks(this.searchQuery).subscribe(
    data => {
      this.searchResults = data.tracks;
    },
    error => {
      console.error('Error al buscar:', error);
      this.searchResults = [];
    }
  );
}


  goToDetail(songId: string) {
    this.router.navigate(['/detail-song', songId]);
  }
}
