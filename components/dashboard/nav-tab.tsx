"use client";

import { User } from "@/lib/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { signOut } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { IconLogout, IconMail, IconSettings } from "@tabler/icons-react";

export default function NavTab({ user }: { user: User | null; }) {
  const tabs = [
    { id: "links", label: "Links" },
    { id: "analytics", label: "Analytics" },
    { id: "events", label: "Events" },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex justify-between mt-6 items-center">
      <div className="space-x-1">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/dashboard/${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={`${activeTab === tab.id ? "text-[#181818]" : "text-gray-500"
              } h-[40px] relative rounded-xl px-3 py-1.5 font-medium transition focus-visible:outline-2`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-neutral-200"
                style={{ borderRadius: 12 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </Link>
        ))}
      </div>
      {/* TODO: Isolate the user profile dropdown */}
      {/* TODO: Customize from the source instead */}
      <DropdownMenu>
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
    </div>
  );
}