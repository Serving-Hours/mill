import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

import NavTab from "@/components/nav-tab";
import { Toaster } from "@/components/ui/sonner";
import UserProfile from "@/components/user-profile";
import AnimatedPage from "@/components/animated-page";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  const tabs = [
    { id: 0, label: "Links", destination: "/dashboard/links" },
    { id: 1, label: "Analytics", destination: "/dashboard/analytics" },
    { id: 2, label: "Events", destination: "/dashboard/events" },
  ];

  return (
    <main className="w-[640px] mx-auto px-4 md:px-0 relative">
      <div className="flex justify-between items-center mt-6">
        <NavTab tabs={tabs} />
        <UserProfile user={user} />
      </div>
      <AnimatedPage>{children}</AnimatedPage>
      <Toaster />
    </main>
  );
}
