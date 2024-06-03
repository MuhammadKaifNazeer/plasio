"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const showSidebar =
    !pathname.includes("/login") && !pathname.includes("/signup");

  return (
    <html lang="en">
      <body>
        <ScrollArea className="h-screen">
          {showSidebar && <Sidebar />}
          <div
            className={showSidebar ? "lg:pl-[17rem] pt-[4rem]" : "no-padding"}
          >
            {children}
          </div>
        </ScrollArea>
      </body>
    </html>
  );
}
