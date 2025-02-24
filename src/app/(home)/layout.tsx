import { MainLayout } from "@/layouts/MainLayout";
import { AuthProvider } from "@/providers/AuthProvider";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const layout = ({ children }: IProps) => {
  return (
    <AuthProvider>
      <MainLayout>{children}</MainLayout>
    </AuthProvider>
  );
};

export default layout;
