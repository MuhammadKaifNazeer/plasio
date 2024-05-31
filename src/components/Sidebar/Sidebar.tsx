import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
  Calendar,
  FlipVertical,
  Folder,
  Home,
  Moon,
  Notebook,
  Plus,
  Search,
  Settings,
  Tag,
  Trash,
} from "lucide-react";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

const links = [
  {
    link: "#",
    name: "Home",
    icon: <Home />,
  },
  {
    link: "#",
    name: "Calendar",
    icon: <Calendar />,
  },
  {
    link: "#",
    name: "Folder",
    icon: <Folder />,
  },
  {
    link: "#",
    name: "Tags",
    icon: <Tag />,
  },
  {
    link: "#",
    name: "Trash",
    icon: <Trash />,
  },
  {
    link: "#",
    name: "Settings",
    icon: <Settings />,
  },
];

const Sidebar = () => {
  return (
    <>
      <div className="hidden border-r lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center justify-between border-b px-6">
            <Link
              className="flex items-center gap-2 font-semibold"
              href="#"
              prefetch={false}
            >
              <Notebook className="h-6 w-6 text-primary" />
              <span className="font-bold">Notepen</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              {links.map((link) => (
                <Link href={link.link} key={link.name}>
                  <Button
                    variant={"ghost"}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all justify-start w-full"
                  >
                    <div className="h-4 w-4 flex items-center text-primary">
                      {link.icon}
                    </div>
                    {link.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                {/* <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{ aspectRatio: "40/40", objectFit: "cover" }}
                  width="40"
                /> */}
                <div className="w-10 h-10 rounded-full bg-primary"></div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    john@example.com
                  </p>
                </div>
                <div className="ml-auto">
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
