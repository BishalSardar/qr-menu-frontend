import { Icon } from "@iconify/react";

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  isAdmin?: boolean;
};

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/admin/home",
    icon: <Icon icon="lucide:home" width="26" height="26" />,
  },
  {
    title: "Stats",
    path: "/admin/stats",
    icon: <Icon icon="lucide:blocks" width="26" height="26" />,
  },
];
