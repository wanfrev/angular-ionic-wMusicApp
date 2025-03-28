import { Routes } from '@angular/router';
import { LoginPageComponent } from './login/login.page';
import { RegisterPageComponent } from './register/register.page';
import { ProfilePageComponent } from './profile/profile.page';
import { HomePageComponent } from './home/home.page';
import { SearchPageComponent } from './search/search.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'search', component: SearchPageComponent },
];
