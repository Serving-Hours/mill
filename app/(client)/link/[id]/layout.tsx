// TODO : if its posible , use serverside
import { getUser } from "@/lib/actions/get-user";
import { Toaster } from "@/components/ui/sonner";
import LinkTitle from "@/components/links/link-title";
import NavTab from "@/components/dashboard/nav-tab";
import UserProfile from "@/components/dashboard/user-profile";

import { LinkProvider } from "@/lib/context/LinkProvider";
import { getLinkById } from "@/app/db/queries/select";
import { notFound } from "next/navigation";


export default async function layout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { id: string; };
}>) {
  const user = await getUser();
  const link = await getLinkById(params.id);

  if (!link) {
    notFound();
  }

  const tabs = [
    { id: 0, label: "Edit", destination: `/link/${link.id}/edit` },
    { id: 1, label: "Analytics", destination: `/link/${link.id}/analytics` },
    { id: 2, label: "Events", destination: `/link/${link.id}/events` },
  ];

  return (
    <LinkProvider link={link}>
      <main className="w-[640px] mx-auto px-4 md:px-0">
        <div className="flex justify-between item-center mt-6 mb-8">
          <LinkTitle />
          <UserProfile user={user} />
        </div>
        <NavTab tabs={tabs} />
        <div className=" mt-8">
          {children}
        </div>
        <Toaster />
      </main>
    </LinkProvider>
  );
};