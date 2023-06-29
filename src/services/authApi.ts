import axios, { AxiosResponse } from "axios";

export type User = {
  nome: string;
  email: string;
  password: string;
  id: string;
  sobrenome: string;
  telefone: string;
  avatar: string;
};

type LoginCadastroResponse = {
  accessToken: string;
  user: User;
};

type InformacoesPerfil = {
  nome: string;
  sobrenome: string;
  telefone: string;
  avatar: string;
};

const api = axios.create({
  baseURL: "https://legal-feet-hang.loca.lt",
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
    nome: "",
    sobrenome: "",
    telefone: "",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
  });
}

export function getUser(userId: string): Promise<AxiosResponse<User, any>> {
  return api.get(`users/${userId}`);
}

export function atualizarUsuario(
  userId: string,
  InformacoesPerfil: InformacoesPerfil
): Promise<AxiosResponse<User, any>> {
  return api.patch(`users/${userId}`, {
    ...InformacoesPerfil,
  });
}
