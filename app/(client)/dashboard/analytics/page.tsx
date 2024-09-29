import { nunito } from "@/app/ui/fonts";

export default function Page() {
  return (
    <div className="text-[#181818] mt-6">
      <section className="flex justify-between mb-8">
        <header className={`${nunito.className} text-[28px]`}>Analytics</header>
      </section>
    </div>
  );
}