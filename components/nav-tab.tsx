"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface NavTabProps {
  tabs: { id: number; label: string; destination: string }[];
}

export default function NavTab({ tabs }: NavTabProps) {
  const pathname = usePathname();

  const activeTab = useMemo(() => {
    return tabs.find((tab) => pathname.startsWith(tab.destination))?.id;
  }, [pathname, tabs]);

  return (
    <div className="space-x-1">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          href={tab.destination}
          className={cn(
            "h-[40px] relative rounded-xl px-3 py-1.5 font-medium transition focus-visible:outline-2",
            activeTab === tab.id ? "text-[#181818]" : "text-gray-500",
          )}
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
  );
}
