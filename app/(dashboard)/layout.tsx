import { Navbar } from "./_components/Navbar";
import OrgSideBar from "./_components/OrgSideBar";
import SideBar from "./_components/Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <div className="h-full">
        <SideBar />
        <div className="pl-[60px] h-full">
          <div className="h-full flex gap-x-3">
            <OrgSideBar />
            <div className="h-full flex-1">
              <Navbar />
            {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
