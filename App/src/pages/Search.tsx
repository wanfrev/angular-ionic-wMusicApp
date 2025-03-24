import { IonContent, IonPage } from '@ionic/react';
import SearchBar from '../components/SearchBar/SearchBar';
import './Search.css';

const Search: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <SearchBar />
      </IonContent>
    </IonPage>
  );
};

export default Search;