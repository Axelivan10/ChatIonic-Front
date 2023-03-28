import axios from "axios";
import { LoginData, Message, RegisterData } from "../interfaces/interface";

const API = axios.create({ baseURL: "http://localhost:3000" });

export const login = (formData: any) => {
  return API.post("/login", formData);
};

export const createUser = (formData: any) => {
  return API.post("/user", formData);
};

export const findUser = async () => {
  const query = await API.get("/user");
  return query.data.data;
};

export const get = (id: string) => {
  return API.get("/user/" + id);
};

export const update = (id: string, formData: any) => {
  return API.put("/user/" + id, formData);
};

export const deleted = (formData: any) => {
  return API.delete("/user/:id", formData);
};

export const findMessages = () => {
  return API.get("/find_message");
};




export const sendMessages = async (messages: Message) => {
  return await API.post('/create_messages', messages);
}; 




export const getChatId = async (id1: number, id2: number) => {
  const query = await API.get("/findChat/" + id1 + "/" + id2);
  const id = query.data.id_conversacion ;
  console.log(id);
  return id;
};

export const findChat = async (id1: number, id2: number) => {
  const query = await API.get("/findChat/" + id1 + "/" + id2);
  return query.data;
};
