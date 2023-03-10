// export interface Registro2Propiedades{
//     titulo: string
//     subtitulo?: string
//     contenido: string
//     onPress: () => void
// }

import { IonBackButton, IonCol, IonIcon, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButtons, IonButton, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './Registro2.css';

export default function Registro2(/*props: Registro2Propiedades*/): JSX.Element{
    return(
        <>
             <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Crear Cuenta</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
      <div className="container">
        <form>
          <div className="img">
          <img alt="Silhouette of mountains" src="https://www.clipartmax.com/png/small/344-3442642_clip-art-freeuse-library-profile-man-user-people-icon-icono-de-login.png" />
          </div>
       
          <IonItem lines="full">
            <IonLabel position="floating">Primer nombre</IonLabel>
            <IonInput type="text" required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Segundo nombre</IonLabel>
            <IonInput type="text"></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" required></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput type="password" required></IonInput>
          </IonItem>
          <IonRow>
            <IonCol>
            <br />
              <IonButton type="submit" color="danger" expand="block">
                Crear cuenta
              </IonButton>
              <p>¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a></p>
            </IonCol>
          </IonRow>
        </form>
        </div>
      </IonContent>
      
    </IonPage>   



        </>
    )
}