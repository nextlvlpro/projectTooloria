import { Outlet } from "react-router";
import SideBar from "../components/sideBar/SideBar";

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-4 bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Outlet />
      </div>
    </div>
  );
}
