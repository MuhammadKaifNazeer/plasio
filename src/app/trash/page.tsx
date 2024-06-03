import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { FlipVertical, RotateCcw, Trash2 } from "lucide-react";
import React from "react";

const Trash = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
        <div className="bg-background rounded shadow-sm border dark:text-gray-50">
          <div className="p-4 flex flex-col h-full">
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Meeting Notes</h3>
              <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                Discussion points from the team meeting this morning. Covered
                new product roadmap, marketing strategies, and upcoming
                deadlines.
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Deleted 2 days ago
              </p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <DotsVerticalIcon className="h-4 w-4" />
                    <span className="sr-only">Note options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Restore</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trash;
