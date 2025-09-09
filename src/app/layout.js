export const dynamic = "force-dynamic";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/SidebarContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <SidebarProvider>{children}</SidebarProvider>
      </body>
    </html>
  );
}


