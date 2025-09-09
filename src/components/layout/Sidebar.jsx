"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDollar, AiOutlineHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { GoChecklist, GoCreditCard } from "react-icons/go";
import { IoCalendarClearOutline } from "react-icons/io5";
import { PiFolderOpenDuotone } from "react-icons/pi";
import { RiFileList2Line, RiTeamLine } from "react-icons/ri";
import { TfiWallet } from "react-icons/tfi";
import { VscMail } from "react-icons/vsc";

import { FaRegUser } from "react-icons/fa";
import { useSidebar } from "../SidebarContext";
import { Poppins } from "next/font/google";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const menuItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: <AiOutlineHome className="h-[24px] w-[24px]" />,
  },
  {
    name: "Email",
    href: "/email",
    icon: <VscMail className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: <RiTeamLine className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Crypto",
    href: "/crypto",
    icon: <AiOutlineDollar className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Kanban",
    href: "/kanban",
    icon: <BiTask className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Invoicing",
    href: "/invoicing",
    icon: <RiFileList2Line className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Banking",
    href: "/banking",
    icon: <TfiWallet className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Ticketing",
    href: "/ticketing",
    icon: <GoCreditCard className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "File Manager",
    href: "/file-manager",
    icon: <PiFolderOpenDuotone className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "User",
    href: "/user",
    icon: <FaRegUser className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Calendar",
    href: "/calendar",
    icon: <IoCalendarClearOutline className="h-[24px] w-[24px] font-bold" />,
  },
  {
    name: "Todo List",
    href: "/todo",
    icon: <GoChecklist className="h-[24px] w-[24px] font-bold" />,
  },
];

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const pathname = usePathname();
  
  useEffect(() => {
  if (typeof window !== "undefined") {
    const handleClick = () => setIsSidebarOpen(false);
    window.addEventListener("click", handleClick);

    // Cleanup event listener
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }
}, [isSidebarOpen, setIsSidebarOpen]);


  return (
    <div
      className={`fixed md:sticky top-0 left-0 h-full overflow-y-auto bg-[#FCFCFC] z-50 shadow-md mx-auto text-center transform transition-all duration-300
      ${isSidebarOpen ? "w-[345px]" : "w-0 overflow-hidden"}`}
    >
      {/* Logo */}
      <div className="px-6 py-6">
        <h1 className="text-[40px] font-bold text-[#363B64]">
          Glazey<span className="text-[#F0C868]">.</span>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 mt-10">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex justify-left items-center gap-3 px-4 py-2 text-[18px] h-[64px] w-[252px] font-medium transition-colors mx-auto ${
                isActive
                  ? "bg-[#EF6E4D]/10 from-pink-200 to-orange-200 text-[#EF6E4D]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Box */}
      <div className="p-4 mt-6">
        <div className="bg-gradient-to-r from-[#EF6E4D] to-[#F1BC65] p-4 text-center h-[174px] w-[252px] mx-auto px-6">
          <span className={`${poppins.className} font-bold text-[#FCFCFC] text-[18px] text-left block mt-3`}>Upgrade your<br/> Account to Pro</span>
          <button className={`${poppins.className} bg-[#FCFCFC] text-[#363B64] font-semibold px-3 py-1 mt-3 float-left`}>
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
