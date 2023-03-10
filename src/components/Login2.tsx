// export interface Login2Propiedades{
//     titulo: string
//     subtitulo?: string
//     contenido: string
//     onPress: () => void
// }

import { IonBackButton, IonCol, IonIcon, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButtons, IonButton, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Login2.css';

export default function Login2(/*props: Login2Propiedades*/): JSX.Element{
    return(
        <>
       
       <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Iniciar Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <div className="container">

        <form>
          <div className='img'>
          <img alt="Silhouette of mountains" src="https://www.clipartmax.com/png/small/344-3442642_clip-art-freeuse-library-profile-man-user-people-icon-icono-de-login.png" />
          </div>
       
          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <br/>
          <IonRow>
          <IonCol>
             <IonButton type="submit" color="danger" expand="block"> 
              Iniciar Sesión
            </IonButton>
            <br/>
            <p>¿No tienes cuenta? <a href="/registro">Registrarse</a></p>
            <br/>
            <a className="small-text">Olvidé la contraseña</a>
          </IonCol>
        </IonRow>
        </form>
        </div>
      </IonContent>
    </IonPage>    


        </>
    )
}