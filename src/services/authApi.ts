import axios, { AxiosResponse } from "axios";

export type UserLoginCadastro = {
  email: string;
  id: number;
};

export type UserGetById = {
  nome: string;
  email: string;
  password: string;
  id: number;
};

type LoginCadastroResponse = {
  accessToken: string;
  user: UserLoginCadastro;
};

const api = axios.create({
  baseURL: "https://shiny-buckets-tickle.loca.lt",
});

export function login(email: string, senha: string): Promise<AxiosResponse<LoginCadastroResponse, any>> {
  return api.post("login", {
    email,
    password: senha,
  });
}

export function cadastrar(email: string, senha: string): Promise<AxiosResponse<LoginCadastroResponse, any>> {
  return api.post("users", {
    email,
    password: senha,
  });
}

export function getUser(userId: string): Promise<AxiosResponse<UserGetById, any>> {
  return api.get(`users/${userId}`);
}
