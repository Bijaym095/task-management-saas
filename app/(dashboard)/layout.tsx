import DashboardSidebar from "@/components/layouts/dashboard-aside";
import DashboardHeader from "@/components/layouts/dashboard-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset className="w-full">
        <DashboardHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};
export default DashboardLayout;
