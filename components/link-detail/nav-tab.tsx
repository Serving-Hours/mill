"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavTab() {
  const tabs = [
    { id: "open", label: "Edit" },
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
            href={`./${tab.id}`}
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
    </div>
  );
}