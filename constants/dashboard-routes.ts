export const DASHBOARD_ROUTES = {

  tasks: {
    root: "/tasks",
    todo: "/tasks?status=TODO",
    inProgress: "/tasks?status=IN_PROGRESS",
    completed: "/tasks?status=COMPLETED",
    overdue: "/tasks?status=OVERDUE",
  },

  projects: {
    root: "/projects",
    active: "/projects?status=IN_PROGRESS",
    completed: "/projects?status=COMPLETED",
    archived: "/projects?status=ARCHIVED",
  },

  team: {
    root: "/team",
    members: "/team/members",
    invitations: "/team/invitations",
    roles: "/team/roles",
  },

  notifications: "/notifications",

  activity: "/activity",

  settings: {
    root: "/settings",
    general: "/settings/general",
    notifications: "/settings/notifications",
    dangerZone: "/settings/danger-zone",
  },

  admin: {
    root: "/admin",
    users: "/admin/users",
    projects: "/admin/projects",
    tasks: "/admin/tasks",
    activity: "/admin/activity",
    workspace: "/admin/workspace",
  },
} as const;