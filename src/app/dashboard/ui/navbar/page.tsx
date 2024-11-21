
"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggler from "../ThemeToggler";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
 
  return (
    <div className=" bg-primary dark:bg-slate-700 text-white py-2 px-2  flex justify-between w-full items-center">
      <div className="text-lg font-bold">logo</div>

      {/* Hidden on smaller screens, visible on medium and up */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggler />
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn2.png" alt="@shadcn" />
              <AvatarFallback className="text-black">LM</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-white focus:outline-none">
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
