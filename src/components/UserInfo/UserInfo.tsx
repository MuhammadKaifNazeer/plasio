import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoaderButton from "@/components/LoaderButton/LoaderButton";
import { LogOut } from "lucide-react";

// Define the shape of user data
interface User {
  name: string;
  email: string;
}

const UserInfo: React.FC = () => {
  const [loggingOut, setLoggingOut] = useState(false);
  const [user, setUser] = useState<User | null>(null); // State can be User or null
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true); // Loading state

  return (
    <div className="flex items-center gap-4">
      {/* Placeholder for user avatar or similar */}
      {/* <div className="w-10 h-10 rounded-full bg-primary"></div> */}
      <div className="space-y-1">
        {loading ? (
          <p>Loading...</p>
        ) : user ? (
          <>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user.email}
            </p>
          </>
        ) : (
          <p>No user data</p>
        )}
      </div>
      <div className="ml-auto">
        <Dialog>
          <DialogTrigger>
            <LogOut className="w-6 h-6" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure?</DialogTitle>
              <DialogDescription>
                You will be signed out of your account and returned to the login
                page.
              </DialogDescription>
              <DialogFooter>
                <Button type="submit" variant={"outline"}>
                  Cancel
                </Button>
                <LoaderButton loading={loggingOut}>
                  Logout
                </LoaderButton>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default UserInfo;
