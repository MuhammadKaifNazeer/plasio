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
  Pencil,
  Plus,
  Search,
  Settings,
  Tag,
  Trash,
} from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Searchbar from "../Searchbar/Searchbar";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

export default function Notes() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 gap-4">
        <div className="w-full sm:hidden">
          <Searchbar />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="bg-background rounded shadow-sm border dark:text-gray-50 cursor-pointer">
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
                          <DotsVerticalIcon className="h-4 w-4" />
                          <span className="sr-only">Note options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] rounded-none">
              <DialogHeader>
                <h3 className="text-lg font-semibold text-start">
                  Meeting Notes
                </h3>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <p className="text-gray-500 dark:text-gray-400">
                  Discussion points from the team meeting this morning. Covered
                  new product roadmap, marketing strategies, and upcoming
                  deadlines.
                </p>
              </div>
              <DialogFooter className="flex items-center flex-row justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Updated 2 days ago
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Button size="icon" variant="ghost">
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button size="icon" variant="ghost">
                    <Pencil className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
