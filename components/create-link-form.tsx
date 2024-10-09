"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";
import { nunito } from "@/app/ui/fonts";
import { createLinkAction, State } from "@/lib/actions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

interface CreateLinkFormProps {
  userId: string;
}

// NOTE: For now anonymous link creation through form is disabled
// Slug is also required for now
export default function CreateLinkForm({ userId }: CreateLinkFormProps) {
  // TODO: Currently the state persist after closing dialog
  const initialState: State = { message: null, errors: {}, success: false };
  const [state, formAction] = useFormState(createLinkAction, initialState);
  const { pending } = useFormStatus();

  // Manage the open state of dialog
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center tracking-tight h-[40px] bg-[#181818] rounded-full text-[#FAFAFA] font-semibold p-3">
          New Link
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-[#181818]">
        <DialogHeader>
          <DialogTitle className={cn("text-2xl", nunito.className)}>
            Create Link
          </DialogTitle>
          <DialogDescription className="hidden"></DialogDescription>
        </DialogHeader>
        <form action={formAction}>
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
              <div>
                {state?.message && (
                  <p className="text-sm text-red-500">{state.message}</p>
                )}
              </div>
              <input type="hidden" id="userId" name="userId" value={userId} />
            </div>
          </div>
          <DialogFooter>
            <button
              className="flex items-center tracking-tight h-[40px] bg-[#181818] rounded-full text-[#FAFAFA] font-semibold p-3"
              type="submit"
              disabled={pending}
            >
              Create
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
