import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { authGuard } from '../services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', loadComponent: () => import('../login/login.page').then(m => m.LoginPageComponent) },
  { path: 'register', loadComponent: () => import('../register/register.page').then(m => m.RegisterPageComponent) },

  {
    path: 'tabs',
    canActivate: [authGuard],
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../home/home.page').then((m) => m.HomePageComponent),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../search/search.page').then((m) => m.SearchPageComponent),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../profile/profile.page').then((m) => m.ProfilePageComponent),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  }
];
