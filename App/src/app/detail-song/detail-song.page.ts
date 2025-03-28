import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../services/music.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.page.html',
  styleUrls: ['./detail-song.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class DetailSongPage implements OnInit {
  song: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) {}

  ngOnInit() {
    const songId = this.route.snapshot.paramMap.get('id');
    if (songId) {
      this.musicService.getSongById(songId).subscribe({
        next: (data) => this.song = data,
        error: () => this.errorMessage = 'No se pudo cargar la canción'
      });
    }
  }
}
