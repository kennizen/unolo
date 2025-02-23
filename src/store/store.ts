import { create } from "zustand";

type States = {
  user: {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    name: string;
    picture: string;
    sub: string;
  } | null;
};

type Actions = {
  setUser: (user: States["user"] | null) => void;
};

type Store = States & Actions;

export const useGlobalStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set((prevState) => ({ ...prevState, user })),
}));
