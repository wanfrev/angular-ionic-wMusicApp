import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SearchPage } from './search/search.page';
import { ProfilePage } from './profile/profile.page';
import { PlaylistPage } from './playlists/playlist.page';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./auth/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/register/register.page').then(m => m.RegisterPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'search',
    component: SearchPage
  },
  {
    path: 'playlist',
    component: PlaylistPage
  },
  {
    path: 'profile',
    component: ProfilePage
  },
  {
    path: 'detail-movie/:id',
    loadComponent: () => import('./detail-song/detail-song.page').then(m => m.DetailSongPage)
  },
  {
    path: 'mymovies',
    loadComponent: () => import('./mymusic/mymusic.page').then( m => m.MyMusicPage)
  },
  {
    path: 'library-detail',
    loadComponent: () => import('./playlist-detail/playlist-detail.page').then( m => m.PlaylistDetailPage)
  }
];
