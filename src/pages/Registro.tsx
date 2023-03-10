import { IonBackButton, IonCol, IonIcon, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { IonButtons, IonButton, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import { createUser } from '../service/api' 
import { useState } from "react";
import { useHistory } from 'react-router';


import ExploreContainer from '../components/ExploreContainer';
import './Registro.css';
const Registro: React.FC = () => {
  let navigate = useHistory();
  
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    imgperfil:"",
    email:"",
    password:""
    });

const handleSubmit = (e:any)  =>  {

  console.log(formData)

  console.log("entro al handle")
  
    e.preventDefault();
    
    createUser(formData).then(response  =>  {
      console.log("REGISTRO EXITOSO")
       navigate.push("/login")
       
       localStorage.setItem("token", response.data.token)
       setFormData({firstname: "", secondname: "", imgperfil:"", email:"", password:""})

    }).catch(e =>{
      if(e.message.includes("403")){
        console.log("puros errores de registro")
      }
    })


  };


  

  return (
   
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
        <div className='form'>
          <div className="img">
          <img alt="Silhouette of mountains" src="https://www.clipartmax.com/png/small/344-3442642_clip-art-freeuse-library-profile-man-user-people-icon-icono-de-login.png" />
          </div>
       
          <IonItem lines="full">
            <IonLabel position="floating">Primer nombre</IonLabel>
            <IonInput type="text" required onIonChange={(event) => setFormData({...formData, firstname: event.detail.value != undefined ? event.detail.value : ""})}  value={formData.firstname}></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Segundo nombre</IonLabel>
            <IonInput type="text" onIonChange={(event) => setFormData({...formData, secondname: event.detail.value != undefined ? event.detail.value : ""})}  value={formData.secondname}></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="text" required onIonChange={(event) => setFormData({...formData, email: event.detail.value != undefined ? event.detail.value : ""})}  value={formData.email}></IonInput>
          </IonItem>
          <IonItem lines="full">
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput type="password" required onIonChange={(event) => setFormData({...formData, password: event.detail.value != undefined ? event.detail.value : ""})}  value={formData.password}></IonInput>
          </IonItem>
          <IonRow>
            <IonCol>
            <br />
              <IonButton type="submit" color="danger" expand="block" onClick={ (event) => handleSubmit(event )}>
                Crear cuenta
              </IonButton>
              <br />
              <p>¿Ya tienes cuenta? <a href="/login">Iniciar Sesión</a></p>
              <p><a href="/terminosycondiciones">Terminos y condiciones</a></p>
            </IonCol>
          </IonRow>
        </div>
        </div>
      </IonContent>
      
    </IonPage>   
  );
};

export default Registro;
