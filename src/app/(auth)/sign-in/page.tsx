import { AuthForm } from "@/components/auth/AuthForm";

const page = () => {
  return (
    <div className="flex h-full items-center justify-center md:justify-start px-4 md:pl-20">
      <AuthForm authType="sign-in" />
    </div>
  );
};

export default page;
