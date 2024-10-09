import { Suspense } from "react";
import { notFound } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

import { nunito } from "@/app/ui/fonts";
import LinkCards from "@/components/link-cards";
import CreateLinkForm from "@/components/create-link-form";

export default async function Page() {
  const user = await getCurrentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="text-[#181818] mt-6">
      <section className="flex justify-between mb-8">
        <header className={`${nunito.className} text-[28px]`}>Links</header>
        <CreateLinkForm userId={user.id} />
      </section>
      {/* TODO */}
      <Suspense fallback={<p>Loading...</p>}>
        <LinkCards userId={user.id} />
      </Suspense>
    </div>
  );
}
