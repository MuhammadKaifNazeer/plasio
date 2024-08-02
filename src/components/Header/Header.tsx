"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { Button } from "../ui/button";
import Link from "next/link";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  const handleSidebarToggle = () => {
    const event = new CustomEvent("toggleSidebar");
    window.dispatchEvent(event);
  };
  return (
    <>
      <header className="flex h-14 lg:h-[60px] w-full fixed items-center gap-4 border-b px-[1rem] lg:pl-[18rem]">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center justify-start flex-1 lg:hidden gap-2">
            <div className="flex items-center justify-between">
              <Link
                className="flex items-center gap-2 font-semibold"
                href="#"
                prefetch={false}
              >
                <Notebook className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">Plasio</span>
              </Link>
            </div>
          </div>
          <div className="w-full flex-1">
            <form>
              <div className="relative w-full lg:w-[70%]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-background shadow-none appearance-none pl-8 "
                  placeholder="Search notes..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="flex-1 justify-end flex gap-1">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="">
                  Add Note
                  <Plus className="ml-1 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Note</DialogTitle>
                  <DialogDescription>
                    Enter the title and description for your new note.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 items-center gap-4">
                    <Label className="font-bold" htmlFor="title">
                      Title
                    </Label>
                    <Input
                      className="col-span-1"
                      id="title"
                      placeholder="Enter title"
                    />
                  </div>
                  <div className="grid grid-cols-1 items-start gap-4">
                    <Label className="font-bold" htmlFor="description">
                      Description
                    </Label>
                    <Textarea
                      className="col-span-1"
                      id="description"
                      placeholder="Enter description"
                    />
                  </div>
                </div>
                <DialogFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <FlipVertical className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Tag className="h-4 w-4" />
                      <span className="sr-only">Add label</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Folder className="h-4 w-4" />
                      <span className="sr-only">Add to folder</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Tag className="h-4 w-4" />
                      <span className="sr-only">Add tag</span>
                    </Button>
                  </div>
                  <Button type="submit">Save Note</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 rounded"
              onClick={handleSidebarToggle}
            >
              <HamburgerMenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle sidebar</span>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
