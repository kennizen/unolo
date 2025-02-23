import { MainLayout } from "@/layouts/MainLayout";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const layout = ({ children }: IProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default layout;
