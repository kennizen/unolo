import {
  ChartNoAxesColumn,
  Info,
  MapPin,
  MapPinCheck,
  MapPinned,
  Rows2,
} from "lucide-react";
import { ReactNode } from "react";

type Items = {
  link: string;
  icon: ReactNode;
  path: string;
};

export const TOP_MENU_ITEMS: Items[] = [
  {
    link: "overview",
    icon: <ChartNoAxesColumn />,
    path: encodeURIComponent("overview"),
  },
  {
    link: "live location",
    icon: <MapPin />,
    path: encodeURIComponent("live location"),
  },
  {
    link: "timeline",
    icon: <MapPinned />,
    path: encodeURIComponent("timeline"),
  },
  { link: "card view", icon: <Rows2 />, path: encodeURIComponent("card view") },
  {
    link: "compliance status",
    icon: <Info />,
    path: encodeURIComponent("compliance status"),
  },
  {
    link: "site attendance",
    icon: <MapPinCheck />,
    path: encodeURIComponent("site attendance"),
  },
];
