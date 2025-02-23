"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type SidebarCtx = {
  isOpen: boolean;
  handleToggleSidebar: () => void;
};

const sidebarCtx = createContext<SidebarCtx | null>(null);

export function useSidebarCtx() {
  const ctx = useContext(sidebarCtx);
  if (!ctx)
    throw new Error("Sidebar context must be used within sidebar provider");
  return ctx;
}

interface IProps {
  children: ReactNode;
}

export const SidebarProvider = ({ children }: IProps) => {
  // states
  const [open, setOpen] = useState(false);

  // methods
  const handleToggleSidebar = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <sidebarCtx.Provider
      value={{
        isOpen: open,
        handleToggleSidebar,
      }}
    >
      {children}
    </sidebarCtx.Provider>
  );
};
