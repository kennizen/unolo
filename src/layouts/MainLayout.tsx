import { ReactNode } from "react";
import { Header } from "../components/header/Header";
import { Sidebar } from "../components/sidebar/Sidebar";
import { SidebarProvider } from "../providers/SidebarProvider";

interface IProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: IProps) => {
  return (
    <main className="h-[100dvh] bg-gray-300">
      <section className="flex h-full">
        <SidebarProvider>
          <Sidebar />
          <div className="h-full flex-1 overflow-auto">
            <Header />
            {children}
          </div>
        </SidebarProvider>
      </section>
    </main>
  );
};
