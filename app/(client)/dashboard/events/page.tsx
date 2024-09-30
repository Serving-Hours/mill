"use client";

import { nunito } from "@/app/ui/fonts";
import { IconTrash } from "@tabler/icons-react";
import { toast } from "sonner";

export default function Page() {
  return (
    <div className="text-[#181818] mt-6">
      <section className="flex justify-between mb-8">
        <header className={`${nunito.className} text-[28px]`}>Events</header>
        <button onClick={() =>
          // NOTE: Toast is still hardcoded to only omit success message
          toast(
            <div className="flex items-center gap-2">
              <IconTrash size={20} strokeWidth={1.75} className="text-red-500" />
              <span className="font-medium">Successfully deleted link</span>
            </div>
          )
        }>Test</button>
      </section>
    </div>
  );
}