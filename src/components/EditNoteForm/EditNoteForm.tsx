import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const EditNoteForm = () => {
  return (
    <>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
            Edit Note
            </CardTitle>
            <CardDescription>
              Make changes, add details, or refine your thoughts.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    className="w-full"
                    defaultValue="Give your note a catchy title."
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    className="min-h-32"
                    defaultValue="Write down your thoughts, ideas, or anything you want to remember"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"#"}>
              <Button>Update</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default EditNoteForm;
