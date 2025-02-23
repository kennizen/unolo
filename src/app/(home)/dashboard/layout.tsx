import { TopNav } from "@/components/topNav/TopNav";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const layout = ({ children }: IProps) => {
  return (
    <>
      <TopNav />
      {children}
    </>
  );
};

export default layout;
