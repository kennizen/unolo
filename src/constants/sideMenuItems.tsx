import {
  Cable,
  Calendar,
  CalendarDays,
  ClipboardCheck,
  FileText,
  HandCoins,
  LayoutGrid,
  ScrollText,
  Target,
  Truck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { ReactNode } from "react";

type Items = {
  link: string;
  icon: ReactNode;
  path: string;
};

export const SIDE_MENU_ITEMS: Items[] = [
  { link: "dashboard", icon: <LayoutGrid />, path: encodeURIComponent("dashboard") },
  {
    link: "attendance",
    icon: <CalendarDays />,
    path: encodeURIComponent("attendance"),
  },
  { link: "leaves", icon: <Calendar />, path: encodeURIComponent("leaves") },
  {
    link: "organization",
    icon: <UserRound />,
    path: encodeURIComponent("organization"),
  },
  {
    link: "tasks",
    icon: <ClipboardCheck />,
    path: encodeURIComponent("tasks"),
  },
  { link: "beat", icon: <Cable />, path: encodeURIComponent("beat") },
  { link: "targets", icon: <Target />, path: encodeURIComponent("targets") },
  { link: "form", icon: <FileText />, path: encodeURIComponent("form") },
  { link: "order", icon: <Truck />, path: encodeURIComponent("order") },
  {
    link: "expenses",
    icon: <HandCoins />,
    path: encodeURIComponent("expenses"),
  },
  {
    link: "clients & sites",
    icon: <UsersRound />,
    path: encodeURIComponent("clients & sites"),
  },
  {
    link: "reports",
    icon: <ScrollText />,
    path: encodeURIComponent("reports"),
  },
];
