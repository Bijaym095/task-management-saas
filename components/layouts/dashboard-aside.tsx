import { DASHBOARD_ROUTES } from "@/constants";
import { Sidebar, SidebarContent, SidebarFooter } from "../ui/sidebar";

const DashboardSidebar = () => {
  const DASHBOARD_MENUS = [
    {
      name: "Tasks",
      link: DASHBOARD_ROUTES.tasks.root,
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
    },
    {
      name: "Activity",
      link: DASHBOARD_ROUTES.activity,
    },
    {
      name: "Settings",
      link: DASHBOARD_ROUTES.settings.root,
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

  return (
    <Sidebar>
      <SidebarContent>
        <ul>
          {DASHBOARD_MENUS.map(({ name, link }) => (
            <li key={name}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </SidebarContent>
      <SidebarFooter>SidebarFooter</SidebarFooter>
    </Sidebar>
  );
};
export default DashboardSidebar;
