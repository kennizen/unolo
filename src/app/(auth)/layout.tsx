import Image from "next/image";
import { ReactNode } from "react";
import logo from "@/assets/images/unolo.png";
import { GoogleProvider } from "@/providers/GoogleProvider";

interface IProps {
  children: ReactNode;
}

const layout = ({ children }: IProps) => {
  return (
    <GoogleProvider>
      <main className="flex h-screen">
        <section className="relative hidden flex-1 grid-cols-1 bg-[#0f45ff] text-white md:grid">
          <div>
            <header className="flex items-center gap-3 px-[150px] py-4">
              <Image
                src={logo}
                width={28}
                height={28}
                alt="logo"
                className="flex-shrink-0"
              />
              <span className="text-2xl font-semibold">unolo</span>
            </header>
            <Image
              src="https://panel.unolo.com/images/login/1.jpg"
              alt="img"
              width={900}
              height={650}
              unoptimized
              className="w-full"
            />
            <div className="mt-6 flex flex-col gap-3 px-14 lg:px-[150px]">
              <h1 className="text-left text-2xl font-medium">
                Meet real time tracking software
              </h1>
              <h3 className="textba text-left">
                Real-time location tracking, attendance & task management tool
                to manage your field force.
              </h3>
            </div>
          </div>
        </section>
        <section className="flex-1">{children}</section>
      </main>
    </GoogleProvider>
  );
};

export default layout;
