import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const CardHeader = ({ children }: IProps) => {
  return <div>{children}</div>;
};

const CardContent = ({ children }: IProps) => {
  return <div className="flex-1">{children}</div>;
};

export const Card = ({ children }: IProps) => {
  return <div className="rounded-md bg-white p-3 flex flex-col gap-4">{children}</div>;
};

Card.CardHeader = CardHeader;
Card.CardContent = CardContent;
