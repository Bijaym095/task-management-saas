import {
  Activity,
  Bell,
  FolderKanban,
  ListTodo,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";

import { DASHBOARD_ROUTES } from "./dashboard-routes";

export type DashboardMenuItem = {
  name: string;
  link: string;
  icon: LucideIcon;
  submenu?: {
    name: string;
    link: string;
  }[];
};

export const DASHBOARD_MENUS: DashboardMenuItem[] = [
  {
    name: "Tasks",
    link: DASHBOARD_ROUTES.tasks.root,
    icon: ListTodo,
    submenu: [
      {
        name: "All Tasks",
        link: DASHBOARD_ROUTES.tasks.root,
      },
      {
        name: "Todo",
        link: DASHBOARD_ROUTES.tasks.todo,
      },
      {
        name: "In Progress",
        link: DASHBOARD_ROUTES.tasks.inProgress,
      },
      {
        name: "Completed",
        link: DASHBOARD_ROUTES.tasks.completed,
      },
      {
        name: "Overdue",
        link: DASHBOARD_ROUTES.tasks.overdue,
      },
    ],
  },
  {
    name: "Projects",
    link: DASHBOARD_ROUTES.projects.root,
    icon: FolderKanban,
    submenu: [
      {
        name: "All Projects",
        link: DASHBOARD_ROUTES.projects.root,
      },
      {
        name: "Active",
        link: DASHBOARD_ROUTES.projects.active,
      },
      {
        name: "Completed",
        link: DASHBOARD_ROUTES.projects.completed,
      },
      {
        name: "Archived",
        link: DASHBOARD_ROUTES.projects.archived,
      },
    ],
  },
  {
    name: "Team",
    link: DASHBOARD_ROUTES.team.root,
    icon: Users,
    submenu: [
      {
        name: "Members",
        link: DASHBOARD_ROUTES.team.members,
      },
      {
        name: "Invitations",
        link: DASHBOARD_ROUTES.team.invitations,
      },
      {
        name: "Roles",
        link: DASHBOARD_ROUTES.team.roles,
      },
    ],
  },
  {
    name: "Notifications",
    link: DASHBOARD_ROUTES.notifications,
    icon: Bell,
  },
  {
    name: "Activity",
    link: DASHBOARD_ROUTES.activity,
    icon: Activity,
  },
  {
    name: "Settings",
    link: DASHBOARD_ROUTES.settings.root,
    icon: Settings,
    submenu: [
      {
        name: "General",
        link: DASHBOARD_ROUTES.settings.general,
      },
      {
        name: "Notifications",
        link: DASHBOARD_ROUTES.settings.notifications,
      },
      {
        name: "Danger Zone",
        link: DASHBOARD_ROUTES.settings.dangerZone,
      },
    ],
  },
];
