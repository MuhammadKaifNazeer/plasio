import Note from "@/components/Note/Note";
import { Button } from "@/components/ui/button";
import { FlipVertical, RotateCcw, Trash2 } from "lucide-react";
import React from "react";

const Trash = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
        <div className="bg-background rounded-lg shadow-sm border dark:text-gray-50">
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
              <div className="flex-items-center justify-">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <RotateCcw className="h-4 w-4" />
                  <span className="sr-only">Restore</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trash;
