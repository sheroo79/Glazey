import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

function DashboardLayout({ children }) {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="py-6 bg-[#F5F5F5] min-h-screen">{children}</main>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
