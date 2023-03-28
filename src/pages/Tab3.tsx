import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCardSubtitle,
  IonCardTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonInput,
  useIonLoading,
  IonRefresher,
  IonRefresherContent,
  RefresherEventDetail,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import { useHistory, useLocation } from "react-router";
import React, { useEffect, useState } from "react";
import { update, get } from "../service/api";
import { getId, RegisterData } from "../interfaces/interface";
import { RouteComponentProps } from "react-router-dom";
// import { useLocation } from 'react-router-dom';
import "./Tab3.css";

interface Props extends RouteComponentProps<{ id: string }> {}

function Tab3() {
  let navigate = useHistory();
  const receiveid = useLocation();
  const [present, dismiss] = useIonLoading();

  // const funcioncheck = ()=>{
  //   const secondid: any = receiveid;
  //   console.log(secondid.state.data)
  // }

  const storageID :any = localStorage.getItem("userActive")
  const storageString = storageID.toString();
  //  console.log(storageString + " este es el id del local storage")      //CAMBIOS QUE SE REALIZARON

  const enviarid = ()=>{
    const secondid: any = receiveid;
    console.log(secondid.state.data);
    navigate.push({pathname:'/tab1',state:{data:secondid}})
  }

  useEffect(() => {
      getFuncion()
  }, []);

  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      event.detail.complete();
      getFuncion();
    }, 2000);
  }

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [formData, setFormData] = useState<RegisterData>({
    id: "",
    firstname: "",
    secondname: "",
    imgperfil: "",
    email: "",
    password: "",
  });

  const logout = () => {
     localStorage.removeItem("token");
     //localStorage.removeItem("userActive");
    //localStorage.clear();
    navigate.push("/login");
  };

  const getFuncion = () => { 
    // const secondid: any = receiveid;
    // console.log(secondid.state.data);
    
    get(storageString) // secondid.state.data
      .then((response) => {
        setFormData({
          id: response.data.data.id,
          firstname: response.data.data.firstname,
          secondname: response.data.data.secondname,
          imgperfil: response.data.data.imgperfil,
          email: response.data.data.email,
          password: response.data.data.password,
        });
        
      })
      .catch((e) => {
        if (e.message.includes("403")) {
          console.log("error en el " + e);
        }
      });
  }; 



  const updateFuncion = (event: any) => {
    event.preventDefault();

    // const secondid: any = storageString;
    // console.log(secondid.state.data);

    update(storageString, formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("tuvimos un error: " + error);
      });

      console.log(formData)
  };

  

  return (
    <IonPage>
      <IonHeader>
      {/* <IonButton onClick={funcioncheck}>vamo a checar</IonButton> */}

        <IonToolbar>
          <IonButtons slot="start">
          <IonButton fill="clear" onClick={(event) => {
              present({
                message: "Cerrando sesión...",
                duration: 3000,
                cssClass: "custom-loading",
              });
              logout();
            }}> Salir</IonButton>
          </IonButtons>
          <IonTitle>AChat</IonTitle>
          <IonButton slot="end" fill="clear" onClick={enviarid}>Contacto</IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <div className="container-tab3">
          <div className="container3a">
            <div className="div11">
              <img src={formData.imgperfil} alt="" />
              <div className="titledivtab3">
                <IonCardTitle>
                  {`${formData.firstname} ${formData.secondname}`.toUpperCase()}
                </IonCardTitle>
                <IonCardSubtitle>Ultima vez a las 12:00 PM</IonCardSubtitle>
              </div>
              {/* <IonButton
                  className="botontab3"
                  shape="round"
                  fill="clear"
                  size="large"
                  href="#">
                  <IonIcon slot="icon-only" icon={chatbox}></IonIcon>
                </IonButton> */}
            </div>
            <br />
            <IonCardSubtitle class="cuenta">Cuenta</IonCardSubtitle>
            <div className="div22">
              <IonList className="listtab3">
                <IonItem>
                  <IonLabel>Primer nombre:</IonLabel>
                  <IonInput
                    placeholder="Enter text"
                    onIonChange={(event) =>
                      setFormData({
                        ...formData,
                        firstname:
                          event.detail.value != undefined
                            ? event.detail.value
                            : "",
                      })
                    }
                    value={formData.firstname}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Segundo nombre:</IonLabel>
                  <IonInput
                    placeholder="Enter text"
                    onIonChange={(event) =>
                      setFormData({
                        ...formData,
                        secondname:
                          event.detail.value != undefined
                            ? event.detail.value
                            : "",
                      })
                    }
                    value={formData.secondname}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Perfil:</IonLabel>
                  <IonInput
                    placeholder="Enter text"
                    onIonChange={(event) =>
                      setFormData({
                        ...formData,
                        imgperfil:
                          event.detail.value != undefined
                            ? event.detail.value
                            : "",
                      })
                    }
                    value={formData.imgperfil}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Email:</IonLabel>
                  <IonInput
                    type="email"
                    placeholder="email@domain.com"
                    onIonChange={(event) =>
                      setFormData({
                        ...formData,
                        email:
                          event.detail.value != undefined
                            ? event.detail.value
                            : "",
                      })
                    }
                    value={formData.email}
                  ></IonInput>
                </IonItem>
                <IonItem>
                  <IonLabel>Password:</IonLabel>
                  <IonInput
                    type="password"
                    maxlength={20}
                    onIonChange={(event) =>
                      setFormData({
                        ...formData,
                        password:
                          event.detail.value != undefined
                            ? event.detail.value
                            : "",
                      })
                    }
                    value={formData.password}
                  ></IonInput>
                </IonItem>
              </IonList>
              <br />
              <IonButton
                color="danger"
                className="botonGuardar"
                onClick={(event) => {
                  present({
                    message: "Guardando...",
                    duration: 3000,
                    cssClass: "custom-loading",
                  });
                  updateFuncion(event);
                }}
                // onClick={(event) => updateFuncion(event)}
              >
                Guardar
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
}

export default Tab3;
