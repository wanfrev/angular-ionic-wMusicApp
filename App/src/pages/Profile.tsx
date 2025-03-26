import { IonContent, IonPage, IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API_BASE_URL } from '../config';

const Profile: React.FC = () => {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      if (!token || !userId) {
        history.push('/login');
        return;
      }

      try {
        const res = await fetch(`${API_BASE_URL}/users/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setUser(data);
        } else {
          alert(data.msg || 'Sesión expirada');
          history.push('/login');
        }
      } catch (err) {
        console.error(err);
        alert('Error del servidor');
        history.push('/login');
      }
    };

    fetchUser();
  }, [history]);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    history.push('/login');
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <h1>Perfil del Usuario</h1>
        {user ? (
          <>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <IonButton color="danger" onClick={handleSignOut}>Sign Out</IonButton>
          </>
        ) : (
          <p>Cargando perfil...</p>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
