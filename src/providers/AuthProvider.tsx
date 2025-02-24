"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type User = {
  name: string;
  email: string;
  given_name: string;
  family_name: string;
  picture: string;
};

type AuthCtx = {
  user: User | null;
  setUser: (user: User) => void;
};

const authCtx = createContext<AuthCtx | null>(null);

export function useAuthContext() {
  const ctx = useContext(authCtx);
  if (!ctx) throw new Error("Auth context must be used within auth provider");
  return ctx;
}

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  // states
  const [user, setUser] = useState<User | null>(null);

  // mthods
  const handleSetUser = useCallback((user: User) => {
    setUser(user);
  }, []);

  async function handleGetUserData() {
    const res = await fetch("/api/user", {
      method: "GET",
      next: { revalidate: 10 },
    });
    const data = (await res.json()) as User;
    setUser(data);
  }

  // effects
  useEffect(() => {
    handleGetUserData();
  }, []);

  return (
    <authCtx.Provider
      value={{
        user,
        setUser: handleSetUser,
      }}
    >
      {children}
    </authCtx.Provider>
  );
};
