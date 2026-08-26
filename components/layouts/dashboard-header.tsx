"use client";

import { SidebarTrigger } from "../ui/sidebar";

const DashboardHeader = (props: React.ComponentProps<"div">) => {
  return (
    <header className="w-full py-4 bg-white text-[#0F172A]" {...props}>
      <div className="container">
        <SidebarTrigger />
        Header
      </div>
    </header>
  );
};
export default DashboardHeader;
