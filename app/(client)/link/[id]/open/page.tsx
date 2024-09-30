'use client'

import { inter, nunito } from "@/app/ui/fonts";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import PageSkeleton from "./pageSkeleton";
import { toast } from "sonner";

interface Link {
    id: string;
    url: string;
    slug: string;
    expiresAt: string;
    expireUrl: string;
}
// todo : undo change to form 
// todo : seperate hooks into different gile hook.ts
export default function Page({ params }: { params: { id: string } }) {
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const [linkData, setLinkData] = useState<Link>();
    const [loading, setLoading] = useState<boolean>(true)
    const [isChanged, setIschanged] = useState<boolean>(false)
    const [initialData , setToInitialData] = useState<Link>()

    useEffect(() => {
        async function fetchLink() {
            try {
                const response = await fetch(`/api/links/${params.id}`);
                if (response.ok) {
                    const data = await response.json();
                    setLinkData(data);
                    setLoading(false)
                }
            } catch (error) {
                console.error('Failed to fetch link:', error);
                return <div>Error Fetching data {" :( "}</div>
            }
        }
        fetchLink()
        if (isChanged) toast("Unsaved Change", {
            duration: Infinity,
            action: {
                label: "Undo",
                onClick: () => undoChanges(),
            },

        })

    }, [params.id, isChanged]);

    const undoChanges = () => {
        if (initialData) {
            setLinkData(initialData); 
        }
        setIschanged(false); 
        toast.dismiss(); 
    };
    if (loading) return <PageSkeleton />

    return (
        <form
            onChange={() => {
                setIschanged(true);
            }}

        >
            <div className="grid gap-4 py-4 font-medium">
                <div className="grid gap-2">
                    <label htmlFor="destination" className="text-left text-[#575757]">
                        Link Destination
                    </label>
                    <input
                        id="url"
                        name="url"
                        placeholder="https://your.app/home"
                        className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
                        required
                        type="url"
                        defaultValue={linkData?.url}
                    />
                </div>
                <div className="grid gap-2">
                    <label htmlFor="short-link" className="text-left text-[#575757]">
                        Short Link
                    </label>
                    <div className="flex">
                        <select name="short-link" id="short-link" className="text-[#A3A3A3] p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]">
                            <option value="volvo">Mill.sh</option>
                        </select>
                        <span className="px-2 text-center text-[#E5E5E5] font-medium text-xl flex items-center"> / </span>
                        <input
                            id="slug"
                            name="slug"
                            placeholder="serve"
                            className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
                            required
                            defaultValue={linkData?.slug}
                        />
                    </div>
                    <div className=" mt-16 mb-6">
                        <div className={`flex justify-between items-center ${nunito.className} `}>
                            <label className="font-bold text-xl" htmlFor="airplane-mode">
                                Link Expiration
                            </label>
                            <Switch
                                id="airplane-mode"
                                className="data-[state=checked]:bg-[#45A557] w-14 h-[32px]"
                                value={""}
                                checked={isChecked}
                                onCheckedChange={setIsChecked}
                            />
                        </div>
                        <p className={`text-[#A3A3A3] text-base font-medium ${inter.className}`}>Set an expiration date for your links – after which it won't be accessible.</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="grid gap-2 w-full">
                            <label htmlFor="expiration-url" className={`text-left ${isChecked ? " text-[#575757]" : "text-[#A3A3A3]"}`}>
                                Destination URL
                            </label>
                            <input
                                id="expireUrl"
                                name="expireUrl"
                                placeholder="https://your.app/home"
                                className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
                                required
                                type="url"
                                defaultValue={linkData?.expireUrl}
                                disabled={!isChecked}
                            />
                        </div>
                        <div className="grid gap-2 w-full">
                            <label htmlFor="fallback" className={`text-left ${isChecked ? " text-[#575757]" : "text-[#A3A3A3]"}`}>
                                Fallback url
                            </label>
                            <input
                                id="fallback"
                                name="fallback"
                                placeholder="serve"
                                className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
                                required
                                type="url"
                                disabled={!isChecked}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
