import { getLinksByUserId } from "@/app/db/queries/select";
import { nunito } from "@/app/ui/fonts";
import { IconCopy, IconLink } from "@tabler/icons-react";
import Link from "next/link";
import DeleteLinkButton from "./delete-link-button";

export default async function LinkCards({ userId }: { userId?: string; }) {
  // NOTE: We may not need the GET method because we already fetches here directly.
  const links = await getLinksByUserId(userId!);

  return (
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      {links?.map((link) => (
        <div className="flex flex-col p-4 rounded-3xl bg-[#F7F7F7]" key={link.id}>
          <div className="flex items-center justify-between mb-4">
            <div className="h-8 w-8 bg-[#E5E5E5] rounded-full flex items-center justify-center">
              <IconLink className="text-[#A3A3A3]" />
            </div>
            <IconCopy className="text-[#A3A3A3]" />
          </div>
          <Link target="_blank" href={link.url} className={`${nunito.className} text-lg`}>{`localhost:3000/${link.slug}`}</Link>
          <p className="font-medium text-sm truncate text-[#777777] mb-6">{link.url}</p>
          <div className="flex gap-2">
            <Link href={`/link/${link.id}/edit`} className="flex items-center p-3 h-[32px] w-fit bg-[#EAEAEA] text-[#777777] font-semibold rounded-full">Edit</Link>
            <DeleteLinkButton linkId={link.id} />
          </div>
        </div>
      ))}
    </div>
  );
}