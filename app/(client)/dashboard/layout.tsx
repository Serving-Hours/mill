import NavTabWrapper from "@/components/dashboard/nav-tab-user";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-[640px] mx-auto px-4 md:px-0">
      <NavTabWrapper />
      {children}
    </main>
  );
}