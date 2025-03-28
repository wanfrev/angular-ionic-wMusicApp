import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mymusic',
  templateUrl: './mymusic.page.html',
  styleUrls: ['./mymusic.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],
})
export class MyMusicPage {
  songForm = {
    title: '',
    artist: '',
    album: '',
    albumCover: '',
    audioUrl: ''
  };

  selectedAudioFile: File | null = null;
  message: string = '';

  constructor(private musicService: MusicService) {}

  onAudioFileSelected(event: any) {
    this.selectedAudioFile = event.target.files[0];
  }

  submitSong() {
    const formData = new FormData();
    formData.append('title', this.songForm.title);
    formData.append('artist', this.songForm.artist);
    formData.append('album', this.songForm.album);
    formData.append('albumCover', this.songForm.albumCover);

    if (this.selectedAudioFile) {
      formData.append('audio', this.selectedAudioFile);
    }

    this.musicService.createSong(formData).subscribe({
      next: () => {
        this.message = '¡Canción subida con éxito!';
        this.songForm = { title: '', artist: '', album: '', albumCover: '', audioUrl: '' };
        this.selectedAudioFile = null;
      },
      error: () => {
        this.message = 'Error al subir la canción.';
      }
    });
  }
}
