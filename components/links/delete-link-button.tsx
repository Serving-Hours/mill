"use client"; // Marks this as a client component

import { useTransition } from "react";
import { deleteLinkAction } from "@/lib/actions/links/delete-link";
import { useState } from "react";
import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";
import { IconTrash } from "@tabler/icons-react";

function DeletingMessage() {
  return (
    <>
      <LoaderIcon size={20} className="animate-spin" />
      <span>Deleting</span>
    </>
  );
}

export default function DeleteLinkButton({ linkId }: { linkId: string; }) {
  const [isPending, startTransition] = useTransition();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    startTransition(async () => {
      await deleteLinkAction(linkId);
      setIsDeleting(false);
    });
    toast(
      <div className="flex items-center gap-1">
        <IconTrash size={20} strokeWidth={1.75} className="text-red-500" />
        <span className="font-medium">Successfully deleted link</span>
      </div>
    );
  };

  return (
    <button
      className="flex items-center p-3 h-[32px] gap-1 w-fit bg-red-100 text-red-400 font-semibold rounded-full"
      onClick={handleDelete}
      disabled={isDeleting || isPending}
    >
      {isDeleting || isPending ? <DeletingMessage /> : "Delete"}
    </button>
  );
}