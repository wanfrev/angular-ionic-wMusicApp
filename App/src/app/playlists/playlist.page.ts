import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class PlaylistPage implements OnInit {
  playlists: any[] = [];
  newPlaylistName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadPlaylists();
  }

  loadPlaylists() {
    // Simular carga local
    this.playlists = [
      { _id: '1', name: 'Favoritas' },
      { _id: '2', name: 'Estudio' }
    ];
  }

  createPlaylist() {
    if (this.newPlaylistName.trim() !== '') {
      const newPlaylist = {
        _id: Math.random().toString(36).substr(2, 9),
        name: this.newPlaylistName
      };
      this.playlists.push(newPlaylist);
      this.newPlaylistName = '';
    }
  }

  openPlaylist(playlistId: string) {
    this.router.navigate(['/playlist-detail', playlistId]);
  }
}
