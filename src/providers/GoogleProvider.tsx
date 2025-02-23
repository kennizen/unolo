import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const GoogleProvider = ({ children }: IProps) => {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID ?? ""}>
      {children}
    </GoogleOAuthProvider>
  );
};
