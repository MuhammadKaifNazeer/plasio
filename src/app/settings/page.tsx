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
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Settings = () => {
  return (
    <>
      <div className="p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Settings</CardTitle>
            <CardDescription>
              Personalize Your Note Taking Experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Display Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                    defaultValue="Muhammad Kaif Nazeer"
                  />
                </div>
                <div className="grid gap-3 relative">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    type="text"
                    className="w-full"
                    defaultValue="@ muhammadkaifnazeer"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full"
                    defaultValue="muhammadkaifnazeer99@gmail.com"
                  />
                </div>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="themecolor">Theme Color</Label>
                    <Select>
                      <SelectTrigger id="themecolor" aria-label="Select Color">
                        <SelectValue placeholder="Select Color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="orange">Orange</SelectItem>
                        <SelectItem value="green">Green</SelectItem>
                        <SelectItem value="blue">Blue</SelectItem>
                        <SelectItem value="pink">Pink</SelectItem>
                        <SelectItem value="purle">Purple</SelectItem>
                        <SelectItem value="yellow">Yellow</SelectItem>
                        <SelectItem value="red">Red</SelectItem>
                        <SelectItem value="zinc">Zinc</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href={"#"}>
              <Button>Save</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Settings;
