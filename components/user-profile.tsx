"use client";

import { User } from "next-auth";
import { signOut } from "next-auth/react";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconLogout, IconMail, IconSettings } from "@tabler/icons-react";

interface UserProfileProps extends React.HTMLAttributes<HTMLDivElement> {
  user: Pick<User, "name" | "image" | "email">;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full select-none overflow-clip">
        {user?.image && (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={40}
            height={40}
          />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px] rounded-xl">
        <DropdownMenuLabel>{user?.name || "My Account"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex gap-2 font-medium">
          <IconSettings size={20} strokeWidth={1.75} />
          <span>Settings</span>
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
