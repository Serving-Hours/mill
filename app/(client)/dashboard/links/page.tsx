import { getUser } from "@/lib/actions/get-user";
import { nunito } from "@/app/ui/fonts";
import CreateLinkForm from "@/components/links/create-link-dialog";
import LinkCards from "@/components/links/link-cards";

export default async function Page() {
  const user = await getUser();

  return (
    <div className="text-[#181818] mt-6">
      <section className="flex justify-between mb-8">
        <header className={`${nunito.className} text-[28px]`}>Links</header>
        <CreateLinkForm userId={user?.id} />
      </section>
      <LinkCards userId={user?.id} />
    </div>
  );
}