import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../services/playlist.service';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.page.html',
  styleUrls: ['./playlist-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class PlaylistDetailPage implements OnInit {
  playlist: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private playlistService: PlaylistService
  ) {}

  ngOnInit() {
    const playlistId = this.route.snapshot.paramMap.get('id');
    if (playlistId) {
      this.playlistService.getPlaylistById(playlistId).subscribe({
        next: (data) => this.playlist = data,
        error: () => this.errorMessage = 'No se pudo cargar la playlist'
      });
    }
  }

  // Eliminar canción (opcional)
  removeSong(songId: string) {
    if (!this.playlist || !this.playlist._id) return;

    this.playlistService.removeSongFromPlaylist(this.playlist._id, songId).subscribe({
      next: () => {
        this.playlist.songs = this.playlist.songs.filter((s: any) => s._id !== songId);
      },
      error: () => console.error('Error al eliminar canción de la playlist')
    });
  }
}
