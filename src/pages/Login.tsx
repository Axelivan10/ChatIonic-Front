import {
  IonBackButton,
  IonCol,
  IonIcon,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  
} from "@ionic/react";
import {
  IonButtons,
  IonButton,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { peopleCircleSharp } from 'ionicons/icons';
import { IonRouterLink } from '@ionic/react';
import { login } from "../service/api";
import { useState } from "react";
import { Link } from 'react-router-dom';

import ExploreContainer from "../components/ExploreContainer";
import "./Login.css";
import * as firebase from "../firebase.js"
import { useHistory } from "react-router";
import { type } from "os";

type StateType = {
  id: number;
  online: String;
};

const Login: React.FC = () => {

  let navigate = useHistory();

  const [showAlert, setShowAlert] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  // const validate = (ev: Event) => {
  //   const value = (ev.target as HTMLInputElement).value;
  //   setIsValid(undefined);
  //   if (value === "") return;
  //   validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  // };

  // const markTouched = () => {
  //   setIsTouched(true);
  // };



  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = await login(formData);

    if (data) {
        // const activo = data.data.data.online
        // console.log(activo)
        // const state: StateType = {id: data.data.data.id, online: activo};
        const id = data.data.data.id
        localStorage.setItem("token", data.data.token )
        localStorage.setItem("userActive", id )
        navigate.push({pathname:'/tab3'/*,state:{data:id}*/})
        // console.log(id)
        
        setFormData({ email: "", password: "" });
    }
  }






  // const handleSubmit = (e: any) => {
  //   console.log(formData);

  //   console.log("entro al handle");
  //   e.preventDefault();

  //   login(formData)
  //     .then((response) => {
  //       console.log("LOGIN EXITOSO");
  //       navigate.push("/tab3/" + response.data.data.id);
  //       // navigate.push("/tab3/",{id: response.data.data.id})
  //       const { id } = response.data.data;
  //       console.log("Este es el ID del usuario :" + id);

  //       // console.log(typeof id);
  //       // const textoId = JSON.stringify(id);
  //       // console.log(typeof textoId);
  //       // console.log(textoId);

  //       console.log(response.data.token);
  //       localStorage.setItem("token", response.data.token);
  //       setIsLoggedin(true);
  //       setFormData({ email: "", password: "" });
  //     })
  //     .catch((e) => {
  //       if (e.message.includes("403")) {
  //         console.log("sin errores");
  //         setShowAlert(true);
  //       }
  //     });
  // };

  return (
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
          <div className="form">
            <div className="img">
              <img
                alt="login"
                src={peopleCircleSharp}
              />
            </div>
            <br />
            <div className="rectangulo">
              <IonItem lines="full">
                <IonLabel position="floating">Email</IonLabel>
                <IonInput
                  type="text"
                  required
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
              <IonItem lines="full">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput
                  type="text"
                  value={formData.password}
                  onIonChange={(event) =>
                    setFormData({
                      ...formData,
                      password:
                        event.detail.value != undefined
                          ? event.detail.value
                          : "",
                    })
                  }
                ></IonInput>
              </IonItem>
              <br />
              <IonRow>
                <IonCol>
                  <IonButton
                    type="submit"
                    color="danger"
                    expand="block"
                    onClick={(event) => handleSubmit(event)}
                  >
                    Iniciar Sesión
                  </IonButton>

                  <br />
                  
                  <p>
                    ¿No tienes cuenta? <IonRouterLink href="/registro">Registrarse</IonRouterLink>
                  </p>
                  <br />
                  <a className="small-text">Olvidé la contraseña</a>
                </IonCol>
              </IonRow>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
