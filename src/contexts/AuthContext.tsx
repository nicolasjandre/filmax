import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser, UserGetById, UserLoginCadastro } from "../services/authApi";
import { parseJwt } from "../utils";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  authenticatedUser: UserGetById | UserLoginCadastro;
  setAuthenticatedUser: Dispatch<React.SetStateAction<UserGetById | UserLoginCadastro>>;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticatedUser, setAuthenticatedUser] = useState<UserGetById | UserLoginCadastro>({} as UserLoginCadastro);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("filmax@token");

      if (token) {
        const userId = parseJwt(token).sub;

        const fetchUser = async () => {
          const response = await getUser(userId);
          setAuthenticatedUser(response?.data);
        };

        fetchUser();
      }
    };

    getToken();
  }, []);

  return <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>{children}</AuthContext.Provider>;
}
