"use client";

import { createLinkAction } from "@/lib/actions/links/create-link";
import {
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

// NOTE: For now anonymous link creation through form is disabled
export default function CreateLinkForm({ userId }: { userId: string; }) {
  return (
    <form action={createLinkAction}>
      <div className="grid gap-4 py-4 font-medium">
        <div className="grid gap-2">
          <label htmlFor="url" className="text-left text-[#575757]">
            Destination URL
          </label>
          <input
            id="url"
            name="url"
            placeholder="https://your.app/home"
            className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
            required
            type="url"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="slug" className="text-left text-[#575757]">
            Short Link
          </label>
          <input
            id="slug"
            name="slug"
            placeholder="Required for now"
            className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
            required
          />
          <input type="hidden" name="userId" value={userId} />
        </div>
      </div>
      <DialogFooter>
        {/* 
          TODO: Close the modal after submit

          <DialogTrigger as Child>
          Current solution sucks because it closes the dialog even when the form is invalid.
          */}
        <DialogTrigger asChild>
          <button className="flex items-center tracking-tight h-[40px] bg-[#181818] rounded-full text-[#FAFAFA] font-semibold p-3" type="submit">Create</button>
        </DialogTrigger>
      </DialogFooter>
    </form>
  );
}