// TODO : if its posible , use serverside
import { getUser } from "@/lib/actions/get-user";
import { Toaster } from "@/components/ui/sonner";
import NavTab from "@/components/link/nav-tab";
import Image from "next/image";
import LinkTitle from "@/components/link/link-title";


export default async function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await getUser();


    return (
        <main className="w-[640px] mx-auto px-4 md:px-0 relative">
            {/* Kepala  */}
            <div className="flex justify-between item-center py-7">
                
                <LinkTitle />
                <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-[#A3A3A3]">Settings</span>
                    <div className="rounded-full select-none overflow-clip">
                        {user?.image && (
                            <Image src={user.image} alt={user.name || 'User'} width={40} height={40} />
                        )}
                    </div>

                </div>
            </div>
            <NavTab />

            <div className=" mt-8">
                {children}
            </div>
            <Toaster />
        </main>
    );
};