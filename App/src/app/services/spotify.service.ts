import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpotifyService {
  private apiUrl = 'http://localhost:5000/api/music'; // Asegúrate de que coincida con tu backend

  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  searchTracks(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, {
      headers: this.getAuthHeaders(),
      params: { query }
    });
  }

  getTrack(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/track/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  getPreviewStream(url: string): Observable<Blob> {
    return this.http.get(url, { responseType: 'blob' });
  }

  getFeaturedPlaylists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/featured-playlists`, {
      headers: this.getAuthHeaders()
    });
  }

  getPopularTracks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/popular-tracks`, {
      headers: this.getAuthHeaders()
    });
  }

  getNewReleases(): Observable<any> {
    return this.http.get(`${this.apiUrl}/new-releases`, {
      headers: this.getAuthHeaders()
    });
  }

}
