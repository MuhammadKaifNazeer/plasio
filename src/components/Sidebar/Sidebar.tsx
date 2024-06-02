"use client";

import React, { useState } from "react";
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
  Bolt,
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
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";
import Searchbar from "../Searchbar/Searchbar"; 
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const links = [
  {
    link: "/",
    name: "Home",
    icon: <Home />,
  },
  {
    link: "/trash",
    name: "Trash",
    icon: <Trash />,
  },
  {
    link: "/settings",
    name: "Settings",
    icon: <Settings />,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex z-30 h-14 lg:h-[60px] bg-background w-full fixed items-center gap-4 border-b px-[1rem] lg:pl-[18rem]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start flex-1 lg:hidden gap-2">
            <div className="flex items-center justify-between">
              <Link
                className="flex items-center gap-2 font-semibold"
                href="#"
                prefetch={false}
              >
                <Notebook className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Notepen</span>
              </Link>
            </div>
          </div>
          <div className="w-full flex-1 hidden sm:block">
            <Searchbar />
          </div>
          <div className="flex-1 justify-end flex gap-2">
            <Link href={"/createnote"} className="lg:hidden">
              <Button className="">
                Add Note
                <Plus className="ml-1 h-4 w-4" />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="icon"
              className="shrink-0 rounded lg:hidden"
              onClick={toggleSidebar}
            >
              <HamburgerMenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </div>
      </div>
      <div
        className={`w-[270px] bg-background max-w-[80%] h-screen duration-500 lg:fixed lg:left-0 absolute ${
          isOpen ? "left-0" : "left-[-300px]"
        } top-0 z-40 border-r`}
      >
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex lg:h-[60px] h-[56px] items-center justify-between border-b px-6">
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
            <nav className="grid items-start px-4 text-sm font-medium gap-[1px]">
              {links.map((link) => (
                <Link href={link.link} key={link.name}>
                  <Button
                    variant={link.link === currentPath ? "secondary" : "ghost"}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all justify-start w-full"
                  >
                    {link.icon && (
                      <div className="h-4 w-4 flex items-center text-primary">
                        {link.icon}
                      </div>
                    )}
                    {link.name}
                  </Button>
                </Link>
              ))}
              <Link href={"/createnote"} className="hidden lg:block">
                <Button className="w-full mt-2">
                  Add Note
                  <Plus className="ml-1 h-4 w-4" />
                </Button>
              </Link>
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
