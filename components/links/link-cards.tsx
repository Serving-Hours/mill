import { getLinksByUserId } from "@/app/db/queries/select";
import { nunito } from "@/app/ui/fonts";
import { IconCopy } from "@tabler/icons-react";
import Link from "next/link";

export default async function LinkCards({ userId }: { userId: string; }) {
  const links = await getLinksByUserId(userId);

  return (
    <div className="grid gap-4 md:grid-cols-2 mb-8">
      {links?.map((link) => (
        <div className="flex flex-col p-4 rounded-3xl bg-[#F7F7F7]" key={link.id}>
          <div className="flex items-center justify-between mb-4">
            <div className="h-8 w-8 bg-[#E5E5E5] rounded-full"></div>
            <IconCopy className="text-[#A3A3A3]" />
          </div>
          <Link target="_blank" href={link.url} className={`${nunito.className} text-lg`}>{`localhost:3000/${link.slug}`}</Link>
          <p className="font-medium text-sm truncate text-[#777777] mb-6">{link.url}</p>
          <button className="flex items-center p-3 h-[32px] w-fit bg-[#EAEAEA] text-[#777777] font-semibold rounded-full">Edit</button>
        </div>
      ))}
    </div>
  );
}