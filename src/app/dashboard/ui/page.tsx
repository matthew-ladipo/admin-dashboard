"use client";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { MdOutlineDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsCashStack } from "react-icons/bs";
import { BsBank2 } from "react-icons/bs";
import { BsPostcard } from "react-icons/bs";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const Side = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);


  return (
    <div className="bg-gray-200 sm:p-6 lg:p-8 max-sm:w-10">
  <Command className="bg-white shadow-md rounded-lg max-sm:w-10">
    <CommandList className="data-[selected='true']:bg-accent px-3 sm:px-5 lg:px-6">
      <CommandGroup className="py-4 sm:py-5 lg:py-6 text-gray-500" heading="Digitlaw">
        <CommandItem className="py-[10px] sm:py-[15px] lg:py-[17px] text-[14px] sm:text-[15px] lg:text-[16px] rounded-lg">
          <Link href="/" className="flex items-center gap-2">
            <MdOutlineDashboard />
            <span className="max-sm:hidden">Dashboard</span>
          </Link>
        </CommandItem>
        <CommandItem className="py-[10px] sm:py-[15px] lg:py-[17px] text-[14px] sm:text-[15px] lg:text-[16px] rounded-lg">
          <Link href="/posts" className="flex items-center gap-2">
            <BsPostcard />
            <span className="max-sm:hidden">Posts</span>
          </Link>
        </CommandItem>
        <CommandItem className="py-[10px] sm:py-[18px] lg:py-[20px] rounded-lg flex items-center gap-2">
          <BsCashStack />
          <span className="max-sm:hidden">Billing</span>
        </CommandItem>
        <CommandItem className="py-[10px] sm:py-[18px] lg:py-[20px] rounded-lg flex items-center gap-2">
          <BsBank2 />
          <span className="max-sm:hidden">Investments</span>
        </CommandItem>
      </CommandGroup>

      <CommandSeparator />

      <CommandGroup className="py-4 sm:py-5 lg:py-6 text-gray-500">
        <CommandItem className="py-[8px] sm:py-[10px] lg:py-[12px] rounded-lg flex items-center gap-2">
          <FaUserTie />
          <span className="max-sm:hidden">Profile</span>
        </CommandItem>
        <CommandItem className="py-[8px] sm:py-[10px] lg:py-[12px] rounded-lg flex items-center gap-2">
          <IoSettingsOutline />
          <span className="max-sm:hidden">Settings</span>
        </CommandItem>
      </CommandGroup>

      <Button variant="outline" className="mt-8 sm:mt-10 w-full sm:w-[200px] text-[15px] sm:text-[16px] lg:text-[17px]">
        Log out
      </Button>
    </CommandList>
  </Command>
</div>

  );
};

export default Side;


  