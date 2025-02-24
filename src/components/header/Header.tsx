"use client";

import { SidebarTrigger } from "@/components/sidebar/sidebarTrigger/SidebarTrigger";
import { useAuthContext } from "@/providers/AuthProvider";
import { BellRing, LogOut, MessageSquareText } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";

export const Header = () => {
  // hooks
  const { user } = useAuthContext();
  const router = useRouter();

  // methods
  async function handleLogout() {
    await fetch("/api/logout");
    router.replace("/sign-in");
  }

  return (
    <header className="flex items-center justify-between px-4 py-3">
      <SidebarTrigger />

      <div className="ml-auto flex items-center gap-3">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <MessageSquareText size={18} />
        </button>

        <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white text-[11px] after:absolute after:-right-1 after:-top-1 after:flex after:h-[18px] after:w-[18px] after:items-center after:justify-center after:rounded-full after:bg-gray-800 after:text-white after:content-['99']">
          <BellRing size={18} />
        </button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex cursor-pointer items-center gap-2 rounded-3xl bg-white py-1 pl-1 pr-3">
              {user && (
                <>
                  <Image
                    src={user.picture}
                    alt="user-image"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <p>{user.name}</p>
                </>
              )}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[9rem]">
            <DropdownMenuItem className="cursor-pointer">
              <button
                className="flex items-center gap-2"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
