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
  RefresherEventDetail,
  IonRefresher,
  IonRefresherContent,
  IonButton
} from "@ionic/react";

import { trashBin } from 'ionicons/icons';
import { useHistory, useLocation } from "react-router";
import React, {useEffect, useState} from 'react' ;
import {findUser} from '../service/api'
import {getId, RegisterData } from "../interfaces/interface"
import ExploreContainer from "../components/ExploreContainer";
import { RouteComponentProps } from "react-router-dom";
import "./Tab1.css";

type StateType =  {
  name: string;
  id1: string
  id2: string;
}
interface Props extends RouteComponentProps<{ id: string }> {}

function Tab1() {

  const receiveid = useLocation();
  let [ results, setResults ] = useState  ( [] )
  let [users, setUsers] = useState([])
  let navigate  = useHistory  ();
  
  // const funcioncheck = ()=>{
  //   console.log(receiveid)
  //   const secondid: any = receiveid;
  //   console.log(secondid.state.data.state.data + " este es el id")
  //   console.log("que pedo")
  // }

  const storageID :any = localStorage.getItem("userActive")
  const storageString = storageID.toString();
  // console.log(storageString + " este es el id del local storage")


  const datos = async () => {
    const data = await findUser();
    setUsers(data);
    setResults(data);
  };
  
  
  useEffect(() => {
    datos()
}, []);


  const handleChange = (  ev: Event)   =>  {
    let query =   "";
      const target  =  ev.target  as   HTMLIonSearchbarElement    ;
    if (target  )  query =   target.value!.toLowerCase();
    setResults  (results.filter ( (objects :    any   )  =>  objects.firstname.toLowerCase().indexOf(query) > -1))  ;

 }

//SECONDID ES MI ID PARA PODER MACHEAR QUE NO SOY YO MISMO VA

const  handleSubmit   =  ( name  : string, id2: string  ) =>   {
  // const secondid: any = receiveid;
  const state: StateType = { 
    name: name ? name : "out", 
    id1: storageString ? "0" : "", 
    id2: id2 ? "0" : ""
  };

    localStorage.setItem("nameChat", name )
    localStorage.setItem("idChat2", id2 )
    console.log(name, storageString, id2)
    navigate.push(   {
       pathname:   '/tab2/',
        state:  state
   }) ;
}

const randomNum = Math.floor(Math.random() * 100) + 1;

function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
  setTimeout(() => {
    event.detail.complete();
    datos();
  }, 2000);
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AChat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div className="nuevocontainer">
              <IonList className="list">
              <IonSearchbar debounce={1000} onIonChange={(ev) => handleChange(ev)}  placeholder="Buscar..." show-clear-button="focus"></IonSearchbar>
              {/* <header className="busqueda"><input type="text" placeholder="Buscar chat" /> </header> */}

              {results.filter((user: any) => user.id != storageString).map((objects: any)  =>
                
                <IonItem  onClick={ () => handleSubmit (objects.firstname, objects.id) }   key =  {objects.id}>
                  <IonBadge slot="end">{randomNum}</IonBadge>
                  <img
                    src={objects.imgperfil}
                    alt=""
                  ></img>
                  <div>
                    <IonLabel>{objects.firstname.toUpperCase()} {objects.secondname.toUpperCase()}</IonLabel>
                    <h3>
                      <span className={`status ${objects.online}`} ></span>{objects.online}
                    </h3>
                  </div>
                  {/* <IonButton onClick={funcioncheck}>vamo a checar</IonButton> */}
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
