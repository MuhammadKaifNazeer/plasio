import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
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
import { Separator } from "@/components/ui/separator";
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
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

export default function Note() {
  return (
    <div key="1" className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-background rounded-lg shadow-sm border dark:text-gray-50 cursor-pointer">
                  <div className="p-4 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">Meeting Notes</h3>
                      <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                        Discussion points from the team meeting this morning.
                        Covered new product roadmap, marketing strategies, and
                        upcoming deadlines.
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Updated 2 days ago
                      </p>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            className="rounded-full"
                            size="icon"
                            variant="ghost"
                          >
                            <FlipVertical className="h-4 w-4" />
                            <span className="sr-only">Note options</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                          <DropdownMenuItem>Add Label</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <h3 className="text-lg font-semibold">Meeting Notes</h3>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    Discussion points from the team meeting this morning.
                    Covered new product roadmap, marketing strategies, and
                    upcoming deadlines.
                  </p>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="h-4 w-4" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Meeting
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Updated 2 days ago
                      </span>
                    </div>
                  </div>
                </div>
                <DialogFooter className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost">
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Tag className="h-4 w-4" />
                      <span className="sr-only">Add Label</span>
                    </Button>
                  </div>
                  <Button variant="secondary">Edit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </main>
      </div>
    </div>
  );
}
