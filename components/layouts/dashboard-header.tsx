interface DashboardHeaderProps extends React.ComponentProps<"div"> {
  sidebarTrigger: React.ReactNode;
}

const DashboardHeader = (props: DashboardHeaderProps) => {
  const { sidebarTrigger, ...headerProps } = props;
  return (
    <header className="w-full py-4 bg-blue-400" {...headerProps}>
      <div className="container">
        {sidebarTrigger}
        Header
      </div>
    </header>
  );
};
export default DashboardHeader;
