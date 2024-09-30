import NavTab from "@/components/dashboard/nav-tab";
import { getUser } from "@/lib/actions/get-user";
import { Toaster } from "@/components/ui/sonner";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();

  return (
    <main className="w-[640px] mx-auto px-4 md:px-0 relative">
      <NavTab user={user} />
      {children}
      <Toaster />
    </main>
  );
};