import DashboardSidebar from "@/components/layouts/dashboard-aside";
import DashboardHeader from "@/components/layouts/dashboard-header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function HomePage({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="w-full">
        <DashboardHeader sidebarTrigger={<SidebarTrigger />} />
        {children}
      </div>
    </SidebarProvider>
  );
}
