import NavTab from "@/components/dashboard/nav-tab";
import { getUser } from "@/lib/actions/get-user";
import { Toaster } from "@/components/ui/sonner";
import UserProfile from "@/components/dashboard/user-profile";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
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
      {children}
      <Toaster />
    </main>
  );
};