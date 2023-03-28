import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCol,
  IonItem,
  IonRow,
  IonInput,
} from "@ionic/react";

import { send } from "ionicons/icons";
import ExploreContainer from "../components/ExploreContainer";
import { Socket } from "socket.io-client";
import React, { useEffect, useState } from "react";
// import {socketclass} from '../service/socket'

import { Message } from "../interfaces/interface";
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import {
  findMessages,
  sendMessages,
  getChatId,
  findChat,
} from "../service/api";

import { io } from "socket.io-client";
import "./Tab2.css";

type StateType = {
  name: string;
  id1: number;
  id2: number;
};

const Tab2: React.FC = () => {
  const location = useLocation<StateType>();
  const name = location.state?.name;
  const id1 = location.state?.id1;
  const id2 = location.state?.id2; 




  const storageName: any = localStorage.getItem("nameChat");
  const storageIdChat: any = localStorage.getItem("idChat2");
  // const StringIdCtat: any  = storageIdChat.toString();

  const storageID: any = localStorage.getItem("userActive");
  // const storageString = storageID.toString();

  // console.log(storageString + " este es el id del local storage");
  // console.log(storageName + " este es el nombre del local storage");
  // console.log(StringIdCtat + " este es el id del chat del local storage");


  var integerStorageID = parseInt(storageID);


  const socket =  io("http://localhost:3000");

  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState(" ");
  const [items, setItems] = useState(0);

  const datos = async () => {
   

    findChat(storageID , storageIdChat).then((response) => {
        setMessages (response.data  )
      });
  };

  useEffect(()  =>  {   
    datos();
     const receiveMessage =  () => {
       findChat(storageID, storageIdChat).then(response => {
           setMessages([...response.data]);  
          console. log(response.data)   
  
       }) 
    } ;

    socket.on("message", receiveMessage); 

    return () => {
      socket.off("message", receiveMessage);
      socket.off("disconnect");
    };
  }, []);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const currentDate = new Date() ;

    const currentDateFormatted = currentDate.toLocaleDateString("en-US") ;

     const ChatId = await getChatId(storageID, storageIdChat)

    console.log("cht id" ,   ChatId)
    const newMessage: Message = {
      content: message,
      id_usuario_env : storageID,
      id_conversacion:   ChatId,  
      fecha: "12 DE MAYO",
    };
    console.log(message)
    // sendMessages(newMessage).then(response => {

    //     console.log(response.data)

    // }
    // ) 

    sendMessages(newMessage).then(Response=>{
       console.log(Response.data )
      socket.emit("message", newMessage.content);
      setMessage("") ;
 
    })

  };






  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={"/"} />
          </IonButtons>
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
                <IonCardTitle>{storageName.toUpperCase()}</IonCardTitle>
                <IonCardSubtitle>Ultima vez a las 12:00 PM</IonCardSubtitle>
              </div>
            </IonCardHeader>

            <IonCardContent>
              <ul id="chat">
                {/* <li className="you">
                  <div className="entete">
                    <span className="status blue"></span>
                    <h3>10:12AM, Hoy from Axel Ivan</h3>
                  </div>
                  <div className="triangle"></div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. 
                  </div>
                 </li> */}

                {messages.map((object, index) => (   
                   <li className={object.id_usuario_env === integerStorageID ? "me" : "you"} key={index}>
                    <div className="entete">
                      <h3>{object.id_usuario_env}</h3> 
                      <span className="status blue"></span>
                    </div>
                    <div className=""></div>
                    <div className="message">{object.content}</div>
                  </li>
                ))}

                {/* <li className="me">
                  <div className="entete">
                    <h3>10:12AM, Hoy</h3>
                    <span className="status blue"></span>
                  </div>
                  <div className=""></div>
                  <div className="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.
                  </div>
                </li> */}

                {/* <li className="me">
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
                </li> */}
              </ul>
              <div>
                <div onSubmit={handleSubmit}>
                  <IonItem>
                    <IonInput
                      placeholder="Mensaje"
                      type={"text"}
                      name={"message"}
                      value={message}
                      onIonChange={(event) =>
                        setMessage(
                          event.detail.value != undefined
                            ? event.detail.value
                            : " "
                        )
                      }
                      required
                    ></IonInput>

                    <IonButton
                      className="botontab2"
                      fill="clear"
                      slot={"end"}
                      type={"submit"}
                      onClick={(e) => handleSubmit(e)}
                    >
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
