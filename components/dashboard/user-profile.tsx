"use client";

import { User } from "@/lib/types";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { IconLogout, IconMail, IconSettings } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserProfileProps = {
  user: User | null;
};

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <DropdownMenu>
      {/* TODO: Isolate the user profile dropdown */}
      {/* TODO: Customize from the source instead */}
      <DropdownMenuTrigger className="rounded-full select-none overflow-clip">
        {user?.image && (
          <Image src={user.image} alt={user.name || 'User'} width={40} height={40} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
        <DropdownMenuLabel>{user?.name || 'My Account'}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 font-medium">
          <IconSettings size={20} strokeWidth={1.75} />
          <span >Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex gap-2 font-medium">
          <IconMail size={20} strokeWidth={1.75} />
          <span>Feedback</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex gap-2 text-red-500 font-medium focus:bg-red-50 focus:text-red-500"
        >
          <IconLogout size={20} strokeWidth={1.75} />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}