export  interface LoginData  {
    correo : string  ,
    pass: string
}


export    interface   Message {
    id? : number, 
    content : string ,
    id_usuario_env: number,
    id_conversacion: number,
    fecha: string
 }
 
export   interface  RegisterData   {
        id?:  string     ,
        firstname?:  string ,
        secondname?: string  ,
        imgperfil?: string,
        email?:  string   ,
        password?:    string  ,
}

   
 export interface  getId  {
     id  : string
 }

 export interface storageId {
    id : string
 }
 