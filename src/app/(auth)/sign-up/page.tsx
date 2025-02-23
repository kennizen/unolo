import { AuthForm } from "@/components/auth/AuthForm";

const page = () => {
  return (
    <div className="flex h-full items-center pl-20">
      <AuthForm authType="sign-up"/>
    </div>
  );
};

export default page;
