import { Component } from '@angular/core';
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

  constructor() {}

  onAudioFileSelected(event: any) {
    this.selectedAudioFile = event.target.files[0];
  }

  submitSong() {
    // Simular éxito sin servicio
    this.message = '¡Canción subida con éxito!';
    this.songForm = { title: '', artist: '', album: '', albumCover: '', audioUrl: '' };
    this.selectedAudioFile = null;
  }
}
