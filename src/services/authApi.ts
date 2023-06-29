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

export type UserLoginAtualizar = {
  id: number;
  nome: string;
  sobrenome: string; 
  telefone: string;
}

type LoginCadastroResponse = {
  accessToken: string;
  user: UserLoginCadastro;
};

const api = axios.create({
  baseURL: "https://ready-roses-sin.loca.lt",
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

export function atualizarUsuario(userId: string, nome: string, sobrenome: string, telefone: string): Promise<AxiosResponse<LoginCadastroResponse, any>> {
  return api.patch(`users/${userId}`, {
    nome,
    sobrenome,
    telefone,
  });
}