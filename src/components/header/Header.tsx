"use client";

import { BellRing, MessageSquareText, User } from "lucide-react";
import { SidebarTrigger } from "@/components/sidebar/sidebarTrigger/SidebarTrigger";
import { useGlobalStore } from "@/store/store";

export const Header = () => {
  // hooks
  const { user } = useGlobalStore();

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

        <button className="flex h-9 items-center gap-3 rounded-3xl bg-white px-3">
          <User size={18} className="flex-shrink-0" />
          <p>{user?.email ?? "johndoe@mail.domain"}</p>
        </button>
      </div>
    </header>
  );
};
