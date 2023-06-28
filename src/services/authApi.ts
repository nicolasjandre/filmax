import axios, { AxiosResponse } from "axios";

const api = axios.create({
  
  baseURL:'https://heavy-cycles-nail.loca.lt'
});

export function login(email: string, senha: string) {
  return api.post("login", {
    email,
    password: senha,
  });
}

export function cadastrar(email: string, senha: string) {
  return api.post("users", {
    email,
    password: senha,
  });
}
