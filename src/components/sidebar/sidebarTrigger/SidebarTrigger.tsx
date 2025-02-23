"use client";

import { useSidebarCtx } from "@/providers/SidebarProvider";
import { Menu } from "lucide-react";
import { memo } from "react";

export const SidebarTrigger = memo(() => {
  // hooks
  const { handleToggleSidebar } = useSidebarCtx();

  return (
    <button
      className="block pb-1 pr-1 pt-1 md:hidden"
      onClick={handleToggleSidebar}
    >
      <Menu size={30} />
    </button>
  );
});
