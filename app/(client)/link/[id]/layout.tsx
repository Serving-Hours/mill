import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";
import { getLinkById } from "@/db/queries/select";
import { LinkProvider } from "@/app/providers";

import NavTab from "@/components/nav-tab";
import { Toaster } from "@/components/ui/sonner";
import UserProfile from "@/components/user-profile";
import AnimatedPage from "@/components/animated-page";
import LinkTitle from "@/components/link-title";

export default async function layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { id: string };
}>) {
  const [user, link] = await Promise.all([
    getCurrentUser(),
    getLinkById(params.id),
  ]);

  if (!link || !user) {
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
          <Suspense fallback={<p>Loading...</p>}>
            <UserProfile user={user} />
          </Suspense>
        </div>
        <NavTab tabs={tabs} />
        <div className=" mt-8">
          <AnimatedPage>{children}</AnimatedPage>
        </div>
        <Toaster />
      </main>
    </LinkProvider>
  );
}
