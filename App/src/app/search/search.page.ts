import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

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

  constructor(
    private musicService: MusicService,
    private router: Router
  ) {}

  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }

    this.musicService.searchSongs(this.searchQuery).subscribe({
      next: (results) => this.searchResults = results,
      error: () => console.error('Error al buscar canciones'),
    });
  }

  goToDetail(songId: string) {
    this.router.navigate(['/detail-song', songId]);
  }
}
