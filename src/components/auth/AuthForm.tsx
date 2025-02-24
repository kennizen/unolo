"use client";

import googleIcon from "@/assets/icons/google.svg";
import { cn } from "@/lib/utils";
import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader } from "lucide-react";

interface IProps {
  authType: "sign-in" | "sign-up";
}

export const AuthForm = ({ authType }: IProps) => {
  // states
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      setLoading(true);

      const res = await fetch("/api/auth/google-login", {
        method: "POST",
        body: JSON.stringify({ code: codeResponse.code }),
      });

      const userInfo = await res.json();

      if (userInfo) {
        router.replace("/dashboard/overview");
      }

      setLoading(false);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <form
      className={cn("flex flex-col gap-6")}
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">
          {authType === "sign-up"
            ? "Make a new account"
            : "Login to your account"}
        </h1>
        <p className="text-balance text-sm text-muted-foreground">
          {authType === "sign-up"
            ? "Enter your details below to create a new account"
            : "Enter your email below to login to your account"}
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" disabled />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            {authType === "sign-in" && (
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            )}
          </div>
          <Input id="password" type="password" disabled />
        </div>
        {authType === "sign-up" && (
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" disabled />
          </div>
        )}
        <Button type="submit" className="w-full" disabled>
          {authType === "sign-up" ? "Sign Up" : "Login"}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
        <Button
          onClick={() => googleLogin()}
          variant="outline"
          className="w-full"
          disabled={loading}
        >
          {loading ? (
            <Loader className="animate-spin" />
          ) : (
            <>
              <Image src={googleIcon} alt="google" width={24} height={24} />
              Login with Google
            </>
          )}
        </Button>
      </div>
      {authType === "sign-in" ? (
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      ) : (
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      )}
    </form>
  );
};
