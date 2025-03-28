import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class PlaylistPage implements OnInit {
  playlists: any[] = [];
  newPlaylistName: string = '';

  constructor(private playlistService: PlaylistService, private router: Router) {}

  ngOnInit() {
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.playlistService.getPlaylists().subscribe({
      next: (data) => this.playlists = data,
      error: () => console.error('Error al cargar playlists')
    });
  }

  createPlaylist() {
    if (this.newPlaylistName.trim() !== '') {
      this.playlistService.createPlaylist({ name: this.newPlaylistName }).subscribe({
        next: () => {
          this.newPlaylistName = '';
          this.loadPlaylists();
        },
        error: () => console.error('Error al crear playlist')
      });
    }
  }

  openPlaylist(playlistId: string) {
    this.router.navigate(['/playlist-detail', playlistId]);
  }
}
