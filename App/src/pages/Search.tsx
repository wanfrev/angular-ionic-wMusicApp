import { IonContent, IonPage } from '@ionic/react';
import SearchBar from '../components/SearchBar';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <h1>Search</h1>
        <SearchBar />
      </IonContent>
    </IonPage>
  );
};

export default Search;