


import { io } from "socket.io-client";

export class socketclass {

    socket = io("https://localhost:3000");
    
    // client-side
       inicializiar  = ()  => {
        this.socket.on("connect", () => {
            console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
          });
     }
}
