import { Skeleton } from "@/components/ui/skeleton"; // Assuming you're using Shadcn skeleton

export default function PageSkeleton() {
    return (
        <div className="grid gap-4 py-4 font-medium">
            {/* Link Destination */}
            <div className="grid gap-2">
                <Skeleton className="h-4 w-1/3 bg-gray-200" /> {/* Label */}
                <Skeleton className="w-full h-[40px] bg-[#F0F0F0] rounded-xl" /> {/* Input */}
            </div>

            {/* Short Link */}
            <div className="grid gap-2">
                <Skeleton className="h-4 w-1/3 bg-gray-200" /> {/* Label */}
                <div className="flex">
                    <Skeleton className="h-[40px] w-[100px] bg-[#F0F0F0] rounded-xl" /> {/* Select */}
                    <span className="px-2 text-center text-[#E5E5E5] font-medium text-xl flex items-center"> / </span>
                    <Skeleton className="w-full h-[40px] bg-[#F0F0F0] rounded-xl" /> {/* Input */}
                </div>
            </div>

            {/* Link Expiration */}
            <div className="mt-16 mb-6">
                <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-1/4 bg-gray-200" /> {/* Label */}
                    <Skeleton className="w-14 h-[32px] rounded-full bg-[#F0F0F0]" /> {/* Switch */}
                </div>
                <Skeleton className="w-full h-4 mt-2 bg-gray-200" /> {/* Description */}
            </div>

            {/* Expiration and Fallback URLs */}
            <div className="flex gap-2">
                <div className="grid gap-2 w-full">
                    <Skeleton className="h-4 w-1/3 bg-gray-200" /> {/* Label */}
                    <Skeleton className="w-full h-[40px] bg-[#F0F0F0] rounded-xl" /> {/* Input */}
                </div>
                <div className="grid gap-2 w-full">
                    <Skeleton className="h-4 w-1/3 bg-gray-200" /> {/* Label */}
                    <Skeleton className="w-full h-[40px] bg-[#F0F0F0] rounded-xl" /> {/* Input */}
                </div>
            </div>
        </div>
    );
}
