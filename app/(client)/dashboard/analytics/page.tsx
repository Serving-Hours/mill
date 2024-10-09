"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { nunito } from "@/app/ui/fonts";

const chartData = [
  { time: "12 AM", clicks: 1 },
  { time: "1 AM", clicks: 5 },
  { time: "2 AM", clicks: 4 },
  { time: "3 AM", clicks: 10 },
  { time: "4 AM", clicks: 6 },
  { time: "5 AM", clicks: 7 },
  { time: "6 AM", clicks: 6 },
  { time: "7 AM", clicks: 4 },
  { time: "8 AM", clicks: 3 },
  { time: "9 AM", clicks: 15 },
  { time: "10 AM", clicks: 8 },
  { time: "11 AM", clicks: 6 },
  { time: "12 PM", clicks: 9 },
  { time: "1 PM", clicks: 7 },
  { time: "2 PM", clicks: 5 },
  { time: "3 PM", clicks: 3 },
  { time: "4 PM", clicks: 2 },
  { time: "5 PM", clicks: 4 },
  { time: "6 PM", clicks: 7 },
  { time: "7 PM", clicks: 5 },
  { time: "8 PM", clicks: 8 },
  { time: "9 PM", clicks: 7 },
  { time: "10 PM", clicks: 5 },
  { time: "11 PM", clicks: 3 },
  { time: "12 AM", clicks: 0 },
];

export default function Page() {
  return (
    <div className="text-[#181818] mt-6">
      <section className="flex justify-between mb-4">
        <header className={`${nunito.className} text-[28px]`}>Analytics</header>
        <Select>
          <SelectTrigger className="w-fit rounded-full gap-1 bg-[#EAEAEA]">
            <SelectValue placeholder="24 Hours" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="1d">24 Hours</SelectItem>
            <SelectItem value="7d">7 Days</SelectItem>
            <SelectItem value="30d">30 Days</SelectItem>
            <SelectItem value="6mo">6 Months</SelectItem>
            <SelectItem value="12mo">12 Months</SelectItem>
          </SelectContent>
        </Select>
      </section>
      <div className="p-6 bg-[#F7F7F7] rounded-3xl mb-8">
        <div className={`${nunito.className} mb-6 text-xl`}>
          234 <span className="text-[#A3A3A3]">Clicks</span>
        </div>
        <ChartContainer config={{}} className="h-[256px] w-full">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#52AEFF" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#52AEFF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="4"
              className="stroke-[0.5px]"
            />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              // tickCount={6}
              tickMargin={8}
              padding={{ left: 24, right: 4 }}
              // tickFormatter={(value) => value.slice(0, 3)}
              interval={2}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area
              type="linear"
              dataKey="clicks"
              stroke="#52AEFF"
              fillOpacity={1}
              fill="url(#colorClicks)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ChartContainer>
      </div>
      <div>
        <section
          className={`${nunito.className} flex justify-between font-medium text-xl`}
        >
          <span>Source</span>
          <span className="text-[#A3A3A3]">Clicks</span>
        </section>
      </div>
    </div>
  );
}
