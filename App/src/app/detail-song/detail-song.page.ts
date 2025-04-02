import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.page.html',
  styleUrls: ['./detail-song.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule]
})
export class DetailSongPage implements OnInit {
  song: any;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const songId = this.route.snapshot.paramMap.get('id');

    // Simulación de carga local de datos
    this.song = {
      id: songId,
      title: 'Canción de ejemplo',
      artist: 'Artista desconocido'
    };
  }
}
