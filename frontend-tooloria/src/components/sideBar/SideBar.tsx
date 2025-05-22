import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "../ui/button";
import { HomeIcon, MenuIcon, XIcon, InfoIcon, PhoneIcon } from "lucide-react";

export default function SideBar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const sideBarWidth = isSideBarOpen ? "sm:w-[200px] w-[150px]" : "w-[50px]";
  const iconSrc = "/tooloriaIcon.png";

  const sideBarLinks: Array<{ name: string; href: string; icon: React.ReactNode }> = [
    { name: "Home", href: "/", icon: <HomeIcon className="w-5 h-5" /> },
    { name: "About", href: "/about", icon: <InfoIcon className="w-5 h-5" /> },
    { name: "Contact", href: "/contact", icon: <PhoneIcon className="w-5 h-5" /> },
  ];

  return (
    <aside
      className={`${sideBarWidth} transition-all duration-300 ease-in-out h-screen bg-[var(--color-sidebar)] text-[var(--color-sidebar-foreground)] border-r p-2 flex flex-col overflow-hidden`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <img src={iconSrc} className={isSideBarOpen ? "w-10 h-10" : "w-0 h-0"} alt="Tooloria" />
          {isSideBarOpen && <span className="text-lg font-semibold select-none">Tooloria</span>}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSideBarOpen(!isSideBarOpen)}
          className="rounded-full"
        >
          {isSideBarOpen ? <XIcon className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
        </Button>
      </div>

      <nav className="flex flex-col gap-2">
        {sideBarLinks.map(({ name, href, icon }) => (
          <NavLink
            key={name}
            to={href}
            className={({ isActive }) =>
              `p-2 rounded-md flex items-center gap-3 transition font-medium
              ${isActive ? "bg-blue-600 text-white" : "hover:bg-gray-300 hover:text-black"}`
            }
          >
            {icon}
            {isSideBarOpen && <span>{name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
