import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:5000/api/songs';

  constructor(private http: HttpClient) {}

  getPopularSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/popular`);
  }

  getRecommendedSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recommended`);
  }

  getExploreSongs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/explore`);
  }

  getSongById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createSong(songData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, songData);
  }

  searchSongs(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?query=${query}`);
  }

}
