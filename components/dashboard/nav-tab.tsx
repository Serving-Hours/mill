"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function NavTab() {
  let tabs = [
    { id: "links", label: "Links" },
    { id: "analytics", label: "Analytics" },
    { id: "events", label: "Events" },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="flex justify-between mt-6 items-center">
      <div className="space-x-1">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/dashboard/${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={
              `${activeTab === tab.id ? "text-black" : "text-gray-500"} 
              h-[40px] relative rounded-xl px-3 py-1.5 font-medium transition focus-visible:outline-2`
            }
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
      {/* TODO: Use session to define user action here */}
      {/* NOTE: We don't want repetitive usage of session as well */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="h-10 w-10 bg-[#F0F0F0] rounded-full"></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Feedback</DropdownMenuItem>
          <DropdownMenuItem>Profile</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}