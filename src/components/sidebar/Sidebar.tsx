"use client";

import logo from "@/assets/images/unolo.png";
import { SIDE_MENU_ITEMS } from "@/constants/sideMenuItems";
import { useSidebarCtx } from "@/providers/SidebarProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ChevronsUpDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

export const Sidebar = memo(() => {
  // hooks
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { handleToggleSidebar, isOpen } = useSidebarCtx();

  // methods
  function handleIsPathActive(path: string) {
    return pathname.includes(path);
  }

  if (isMobile)
    return (
      <>
        <nav
          className={cn(
            "fixed left-0 top-0 z-[2] flex h-full w-full max-w-[300px] flex-col bg-white transition-transform ease-out md:hidden",
            isOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-2 p-4">
            <div className="flex items-center gap-3">
              <Image src={logo} width={28} height={28} alt="logo" />
              <span className="text-2xl font-semibold">unolo</span>
            </div>
            <Button
              variant="secondary"
              className="h-9 w-9 rounded-full p-0"
              onClick={handleToggleSidebar}
            >
              <X />
            </Button>
          </div>

          <div className="mt-4 flex flex-col gap-3 px-4">
            {SIDE_MENU_ITEMS.map((item) => (
              <Link key={item.link} href={`/${item.path}`}>
                <Button
                  variant={
                    handleIsPathActive(`/${item.path}`) ? "secondary" : "ghost"
                  }
                  className="w-full justify-start capitalize"
                  onClick={handleToggleSidebar}
                >
                  {item.icon} <span>{item.link}</span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="mt-auto p-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="w-full">
                <Button variant="secondary">
                  <span>Professional</span>
                  <ChevronsUpDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[16.6rem]">
                <DropdownMenuItem className="cursor-pointer">
                  Free
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Classic
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {isOpen ? (
          <div
            className={cn(
              "fixed left-0 top-0 z-[1] h-[100dvh] w-full bg-black/40",
            )}
            onClick={handleToggleSidebar}
          ></div>
        ) : (
          <></>
        )}
      </>
    );

  return (
    <nav className="hidden h-full w-full max-w-[300px] bg-white md:block">
      <div className="flex items-center justify-between gap-2 p-4">
        <div className="flex items-center gap-3">
          <Image src={logo} width={28} height={28} alt="logo" />
          <span className="text-2xl font-semibold">unolo</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">
              <span>Professional</span>
              <ChevronsUpDown size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[9rem]">
            <DropdownMenuItem className="cursor-pointer">Free</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Classic
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col gap-3 px-4">
        {SIDE_MENU_ITEMS.map((item) => (
          <Link key={item.link} href={`/${item.path}`}>
            <Button
              variant={
                handleIsPathActive(`/${item.path}`) ? "secondary" : "ghost"
              }
              className="w-full justify-start capitalize"
            >
              {item.icon} <span>{item.link}</span>
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );
});
