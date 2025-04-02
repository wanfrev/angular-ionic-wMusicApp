import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.page.html',
  styleUrls: ['./playlist-detail.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class PlaylistDetailPage implements OnInit {
  playlist: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const playlistId = this.route.snapshot.paramMap.get('id');

    // Simulación de datos locales
    this.playlist = {
      _id: playlistId,
      name: 'Mi Playlist Favorita',
      songs: [
        { _id: '1', title: 'Canción 1' },
        { _id: '2', title: 'Canción 2' },
      ]
    };
  }

  removeSong(songId: string) {
    this.playlist.songs = this.playlist.songs.filter((s: any) => s._id !== songId);
  }
}
