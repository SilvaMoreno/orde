import React, { createContext, useContext, useState, ReactNode } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function signIn(email: string, password: string) {
    if (!email || !password) {
      return Alert.alert("Informe seu email e senha");
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((account) => {
        console.log(account);
      })
      .catch((error) => {
        const { code } = error;

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          Alert.alert("Email ou Senha incorreta");
        } else {
          Alert.alert("Erro ao fazer login");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <AuthContext.Provider value={{ signIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
