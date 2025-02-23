"use client";

import { TOP_MENU_ITEMS } from "@/constants/topMenuItems";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPathActive } from "@/utils/helpers";

export const TopNav = () => {
  // hooks
  const pathname = usePathname();

  return (
    <div className="w-full mt-4">
      <div className="flex w-full items-center gap-4 overflow-auto px-4 md:hidden">
        {TOP_MENU_ITEMS.map((item) => (
          <Link key={item.link} href={`/dashboard/${item.link}`}>
            <Button
              variant={
                isCurrentPathActive(`/${item.path}`, pathname)
                  ? "secondary"
                  : "ghost"
              }
              className="justify-start rounded-3xl"
            >
              {item.icon}
              <span>{item.link}</span>
            </Button>
          </Link>
        ))}
      </div>
      <div className="hidden w-full items-center gap-4 overflow-auto border-b px-4 md:flex">
        {TOP_MENU_ITEMS.map((item) => (
          <Link key={item.link} href={`/dashboard/${item.path}`}>
            <Button
              className="justify-start rounded-bl-none rounded-br-none"
              variant={
                isCurrentPathActive(`/${item.path}`, pathname)
                  ? "secondary"
                  : "ghost"
              }
            >
              {item.icon}
              <span>{item.link}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
