import { createContext, Dispatch, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser, User } from "../services/authApi";
import { parseJwt } from "../utils";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  authenticatedUser: User;
  setAuthenticatedUser: Dispatch<React.SetStateAction<User>>;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticatedUser, setAuthenticatedUser] = useState<User>({} as User);

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem("filmax@token");

      if (token) {
        const userId = parseJwt(token).sub;

        const fetchUser = async () => {
          const response = await getUser(userId);
          setAuthenticatedUser(response?.data);
        };

        fetchUser().catch((e) => console.log(e));
      }
    };

    getToken().catch((e) => console.log(e));
  }, []);

  return <AuthContext.Provider value={{ authenticatedUser, setAuthenticatedUser }}>{children}</AuthContext.Provider>;
}
