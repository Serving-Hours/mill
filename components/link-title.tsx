"use client";

import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { useLink } from "@/app/providers";

export default function LinkTitle() {
  const link = useLink();

  return (
    <div className="flex gap-3 items-center">
      <Link
        href={"/dashboard/links"}
        className="w-8 h-8 bg-[#EAEAEA] rounded-full flex items-center text-[#A3A3A3] justify-center"
      >
        <IconChevronLeft />
      </Link>
      {/* todo : make the label dynamic  */}
      <span className=" font-bold text-black text-2xl">
        localhost:3000/{link.slug}
      </span>
    </div>
  );
}
