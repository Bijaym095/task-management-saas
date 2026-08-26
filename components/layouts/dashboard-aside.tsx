"use client";

import { DASHBOARD_MENUS } from "@/constants";
import { ChevronDown, FaceAngry, Settings } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../ui/sidebar";

const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-1">
          <FaceAngry className="size-5 shrink-0" />
          <span className="truncate font-semibold group-data-[collapsible=icon]:hidden">
            Task Management Saas
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {DASHBOARD_MENUS.map((menu) => {
                if (!menu.submenu) {
                  return (
                    <SidebarMenuItem key={menu.name}>
                      <SidebarMenuButton
                        className="p-4 rounded h-auto!"
                        render={<a href={menu.link} />}
                        tooltip={menu.name}
                      >
                        <menu.icon />
                        <span>{menu.name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }

                return (
                  <Collapsible
                    key={menu.name}
                    defaultOpen
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        className="py-3 px-4 rounded h-auto! cursor-pointer"
                        render={<CollapsibleTrigger />}
                        tooltip={menu.name}
                      >
                        <menu.icon />
                        <span>{menu.name}</span>
                        <ChevronDown className="ml-auto transition-transform group-data-open/collapsible:rotate-180 group-data-[collapsible=icon]:hidden" />
                      </SidebarMenuButton>
                      <CollapsibleContent className="pl-6">
                        <SidebarMenuSub className="mx-0">
                          {menu.submenu.map((submenu) => (
                            <SidebarMenuSubItem key={submenu.name}>
                              <SidebarMenuSubButton
                                className="h-auto! py-2 px-4 rounded"
                                render={<a href={submenu.link} />}
                              >
                                <span>{submenu.name}</span>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex gap-4">
          <Settings />
          <span className="group-data-[collapsible=icon]:hidden">SidebarFooter</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
export default DashboardSidebar;
