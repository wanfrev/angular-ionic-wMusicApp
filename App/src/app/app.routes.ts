import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { SearchPage } from './search/search.page';
import { ProfilePage } from './profile/profile.page';
import { PlaylistPage } from './playlists/playlist.page';
import { AuthGuard } from './guards/auth.guard';

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
    component: HomePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist',
    component: PlaylistPage,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfilePage,
    canActivate: [AuthGuard]
  },
  {
    path: 'song/:id', // ✅ corregido
    loadComponent: () => import('./detail-song/detail-song.page').then(m => m.DetailSongPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'mymusic', // ✅ corregido
    loadComponent: () => import('./mymusic/mymusic.page').then(m => m.MyMusicPage),
    canActivate: [AuthGuard]
  },
  {
    path: 'playlist-detail/:id', // ✅ corregido
    loadComponent: () => import('./playlist-detail/playlist-detail.page').then(m => m.PlaylistDetailPage),
    canActivate: [AuthGuard]
  }
];
