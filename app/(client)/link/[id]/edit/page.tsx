"use client";

import { inter, nunito } from "@/app/ui/fonts";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { useLink } from "@/lib/context/link-provider";

// todo : undo change to form 
// todo : seperate hooks into different gile hook.ts
export default function Page() {
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const link = useLink();

  return (
    <form>
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
            defaultValue={link.url}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="short-link" className="text-left text-[#575757]">
            Short Link
          </label>
          <div className="flex">
            <input
              id="slug"
              name="slug"
              placeholder="serve"
              className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3]"
              required
              defaultValue={link.slug}
            />
          </div>
          <div className=" mt-16 mb-6">
            <div className={`flex justify-between items-center ${nunito.className} `}>
              <label className="font-bold text-xl" htmlFor="airplane-mode">
                Link Expiration
              </label>
              <Switch
                id="airplane-mode"
                className="data-[state=checked]:bg-[#45A557] w-14 h-[32px] px-1"
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
                className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3] disabled:cursor-not-allowed"
                required
                type="url"
                defaultValue={link.expiresUrl || ""}
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
                className="w-full p-3 h-[40px] bg-[#F0F0F0] rounded-xl placeholder-[#A3A3A3] disabled:cursor-not-allowed"
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
