import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonTextarea,
  IonButton,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFooter,
  IonItem,
  IonLabel,
  IonInput
} from "@ionic/react";

import { send } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";

import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AChat</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="container-tab3">
          <div className="container2a">
            <IonCardHeader>
              <img
                src="https://www.clipartmax.com/png/small/344-3442642_clip-art-freeuse-library-profile-man-user-people-icon-icono-de-login.png"
                alt=""
              />
              <div className="titlediv">
                <IonCardTitle>Axel Iván</IonCardTitle>
                <IonCardSubtitle>Ultima vez a las 12:00 PM</IonCardSubtitle>
              </div>
            </IonCardHeader>

            <IonCardContent>
              <ul id="chat">
                <li className="you">
                  <div className="entete">
                    <span className="status blue"></span>
                    <h3>10:12AM, Hoy from Axel Ivan</h3>
                  </div>
                  <div className="triangle"></div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </li>
                
                <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Hoy</h3>
                    <span className="status blue"></span>
                  </div>
                  <div className=""></div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </li>
                <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Hoy</h3>
                    <span className="status blue"></span>
                  </div>
                  <div className=""></div>
                  <div className="message">OK</div>
                </li>
                <li className="you">
                  <div className="entete">
                    <span className="status blue"></span>
                    <h3>10:12AM, Hoy</h3>
                  </div>
                  <div className="triangle"></div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </li>
                <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Hoy</h3>
                    <span className="status blue"></span>
                  </div>
                  <div className=""></div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </li>
              </ul>
              <div>
              <div>
                <IonItem>
                  <IonInput placeholder="Mensaje"></IonInput>
                  <IonButton className="botontab2" fill="clear" href="#">
                 <IonIcon slot="icon-only" icon={send}></IonIcon>
               </IonButton>
                </IonItem>
              </div>
            </div>
            </IonCardContent>
            
          </div>
        </div>
      </IonContent>
      
    </IonPage>
  );
};

export default Tab2;