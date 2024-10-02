"use client"; // Marks this as a client component

import { LoaderIcon } from "lucide-react";
import { toast } from "sonner";
import { IconChecklist } from "@tabler/icons-react";
import { useFormStatus } from "react-dom";
import { useEffect, useState } from "react";

function SavingMessage() {
  return (
    <div>
      <LoaderIcon size={20} className="animate-spin" />
      <span>Saving ... </span>
    </div>
  );
}
// TODO : refactor to better written
export default function SaveLinkButton({ isEdited }: { isEdited: boolean }) {
  const { pending } = useFormStatus();
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!pending && isComplete) {
      toast.success("Successfully saved!", {
        icon: <IconChecklist size={20} />,
      });
      setIsComplete(false);
    }
    if (pending) {
      setIsComplete(true);
    }
  }, [pending, isComplete]);

  return (
    <button
      className={`flex items-center tracking-tight h-[40px] rounded-full ${isEdited || pending ? "text-[#FAFAFA] bg-[#181818]" : " text-[#A3A3A3] bg-[#EAEAEA]"} font-semibold p-3 disabled:cursor-not-allowed`}
      type="submit"
      disabled={!isEdited || pending}
    >
      {pending ? <SavingMessage /> : "Save Changes"}
    </button>
  );
}
