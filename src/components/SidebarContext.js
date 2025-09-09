// SidebarContext.js
'use client'
import { createContext, useContext, useState } from "react";

// Context create
const SidebarContext = createContext();

// Provider function
export function SidebarProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

// Custom hook
export function useSidebar() {
  return useContext(SidebarContext);
}
