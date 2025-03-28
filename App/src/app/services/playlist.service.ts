import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private apiUrl = 'http://localhost:5000/api/playlists'; // Ajusta esta URL a tu backend real

  constructor(private http: HttpClient) {}

  // Obtener todas las playlists del usuario
  getPlaylists(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Crear una nueva playlist
  createPlaylist(playlistData: { name: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, playlistData);
  }

  // Obtener los detalles de una playlist por su ID
  getPlaylistById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar una canción a una playlist
  addSongToPlaylist(playlistId: string, songId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${playlistId}/songs`, { songId });
  }

  // Eliminar una canción de una playlist
  removeSongFromPlaylist(playlistId: string, songId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${playlistId}/songs/${songId}`);
  }

  // Eliminar una playlist completa
  deletePlaylist(playlistId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${playlistId}`);
  }
}
