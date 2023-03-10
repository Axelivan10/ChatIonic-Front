import axios from 'axios';
import {LoginData, Message, RegisterData} from "../interfaces/interface";

 const API = axios.create({baseURL:'http://localhost:3000'})

 export const login = (formData: any)=> {
    return API.post('/login', formData);    
}

export const createUser = (formData: any) => {
    return API.post ('/user', formData);
}

export    const findUser  = ()   => {
    return  API.get( '/user'  )
}

export const get = (id:string) => {
    return API.get ('/user/'+id);
}

export    const   update  = ( id: string , formData  : any) => {
    return   API.put  ('/user/'+ id , formData    )
}

export const deleted = (formData: any) => {
    return API.delete ('/user/:id', formData);
}

export const findMessages = ( ) =>  {
    return  API.get ('/find_message')
}

export const sendMessagess  =  (messages : Message) => {
    return  API.post  ('/create_messages', messages)
  }
