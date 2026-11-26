import MenuBar from "@/components/MenuBar";
import SideBar from "@/components/Sidebar";

const MainLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <div className="flex min-h-screen">
      <MenuBar />
      <main role="main" className="flex-1">
        {children}
      </main>
      <SideBar />
    </div>
  );
};

export default MainLayout;
