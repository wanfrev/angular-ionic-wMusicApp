import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, SearchBarComponent],
  templateUrl: './search.page.html',
})
export class SearchPageComponent {
  query = '';
  results: string[] = [];

  realizarBusqueda() {
    this.results = this.query
      ? [`Resultado 1 para "${this.query}"`, `Resultado 2 para "${this.query}"`]
      : [];
  }
}
