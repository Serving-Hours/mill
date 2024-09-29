import { getUser } from "@/lib/actions/get-user";
import { redirect } from "next/navigation";
import SignoutButton from "@/components/ui/signout-button";
import { nunito } from "@/app/ui/fonts";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateLinkForm from "@/components/links/create-link-form";
import LinkCards from "@/components/links/link-cards";

export default async function Page() {
  // TODO: Find a better way to pass session or user
  const user = await getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="text-[#181818] mt-6">
      <section className="flex justify-between mb-8">
        <header className={`${nunito.className} text-[28px]`}>Links</header>
        <Dialog>
          <DialogTrigger asChild>
            <button className="flex items-center tracking-tight h-[40px] bg-[#181818] rounded-full text-[#FAFAFA] font-semibold p-3">New Link</button>
          </DialogTrigger>
          {/* TODO: index.mjs:466 Warning: Missing `Description` or `aria-describedby={undefined}` for {DialogContent}. */}
          <DialogContent className="sm:max-w-[425px] text-[#181818]">
            <DialogHeader>
              <DialogTitle className={`${nunito.className} text-2xl`}>Create Link</DialogTitle>
            </DialogHeader>
            <CreateLinkForm userId={user.id} />
          </DialogContent>
        </Dialog>
      </section>
      <LinkCards userId={user.id} />
      <div>
        <span className={`${nunito.className} text-xl`}>Temporary section</span>
        <p className="font-medium text-[#777777] mb-4">Signed in as {user.name}</p>
        <SignoutButton />
      </div>
    </div>
  );
}