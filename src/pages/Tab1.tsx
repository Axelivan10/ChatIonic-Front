import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonBadge,
  IonList,
} from "@ionic/react";

import { trashBin } from 'ionicons/icons';
import { useHistory } from "react-router";
import React, {useEffect, useState} from 'react' ;
import {findUser} from '../service/api'
import {getId, RegisterData } from "../interfaces/interface"
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

type StateType =  {
  name: string;
}

const Tab1: React.FC  <getId>= ({id}) => {

  let [ results, setResults ] = useState  ( [] )
  let navigate  = useHistory  ();
  
  
  const datos = () =>    {
    findUser() .then     (response =>  {
         setResults  (response.data.data)
   }  )
  }
  
  
  useEffect(()    => {
  datos( )   ;
  
  } ,    [results] );


  const handleChange = (  ev: Event)   =>  {
    let query =   "";
      const target  =  ev.target  as   HTMLIonSearchbarElement    ;
    if (target  )  query =   target.value!.toLowerCase();
    setResults  (results.filter ( (objects :    any   )  =>  objects.firstname.toLowerCase().indexOf(query) > -1))  ;

 }


const  handleSubmit   =  ( name  : string  ) =>   {
    const state: StateType = { name:   name    };
   navigate .push(   {
       pathname:   '/tab2/'  +  id   ,
       state:  state
   }) ;
}


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AChat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="nuevocontainer">
              <IonList className="list">
              <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)} animated={true} placeholder="Buscar..." show-clear-button="focus"></IonSearchbar>
              {/* <header className="busqueda"><input type="text" placeholder="Buscar chat" /> </header> */}

              {  results.map( (objects: any)      =>

                <IonItem  onClick={ () => handleSubmit  (objects.firstname) }   key =  {objects.id}>
                  <IonBadge slot="end">22</IonBadge>
                  <img
                    src={objects.imgperfil}
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>{objects.firstname} {objects.secondname}</IonLabel>
                    <h3>
                      <span className={`status ${objects.online}`} ></span>{objects.online}
                    </h3>
                  </div>
                </IonItem>

                )   }

                {/* <IonItem>
                <IonBadge slot="end">12</IonBadge>
                  <img
                    src="https://www.clipartmax.com/png/small/344-3442642_clip-art-freeuse-library-profile-man-user-people-icon-icono-de-login.png"
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>Hana Nicole</IonLabel>
                    <h3>
                      <span className="status orange"></span>offline
                    </h3>
                  </div>
                </IonItem>

                <IonItem>
                <IonBadge slot="end">2</IonBadge>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>Pokémon Yellow</IonLabel>
                    <h3>
                      <span className="status green"></span>offline
                    </h3>
                  </div>
                </IonItem>

                <IonItem>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>Pokémon Yellow</IonLabel>
                    <h3>
                      <span className="status orange"></span>offline
                    </h3>
                  </div>
                </IonItem>
                <IonItem>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>Pokémon Yellow</IonLabel>
                    <h3>
                      <span className="status green"></span>offline
                    </h3>
                  </div>
                </IonItem>
                <IonItem>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>Pokémon Yellow</IonLabel>
                    <h3>
                      <span className="status orange"></span>offline
                    </h3>
                  </div>
                </IonItem>
                <IonItem>
                  <img
                    src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>Pokémon Yellow</IonLabel>
                    <h3>
                      <span className="status orange"></span>offline
                    </h3>
                  </div>
                </IonItem> */}


              </IonList>
            </div>
          
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
