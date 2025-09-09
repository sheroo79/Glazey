"use client";
import { Poppins } from "next/font/google";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const data = [
  { day: "Mon", thisWeek: 40, lastWeek: 30 },
  { day: "Tue", thisWeek: 50, lastWeek: 45 },
  { day: "Wed", thisWeek: 60, lastWeek: 25 },
  { day: "Thu", thisWeek: 55, lastWeek: 50 },
  { day: "Fri", thisWeek: 45, lastWeek: 40 },
  { day: "Sat", thisWeek: 20, lastWeek: 60 },
  { day: "Sun", thisWeek: 65, lastWeek: 70 },
];

export default function ProjectStatisticChart() {
  return (
    <div className="w-[698px] h-[566px] p-8 bg-[#FCFCFC] shadow-md">
      {/* Chart Heading and select */}
      <div className="flex justify-between">
        <h2
          className={`${poppins.className} text-[24px] font-bold mb-4 text-[#363B64]`}
        >
          Project Statistic
        </h2>
        <div className="flex justify-between items-center gap-6">
          <div
            className={`${poppins.className} border border-[#DBDBDB] w-[140px] h-[40px] text-[14px] font-normal flex justify-around items-center`}
          >
            <span className="text-[#A098AE]">This Month</span>
            <IoIosArrowDown className="w-[18px] h-[18px] text-[#A098AE]" />
          </div>
          <BsThreeDots className="w-[24px] h-[24px] text-[#A098AE]" />
        </div>
      </div>
      {/* This week and total / Line Number 2 */}
      <div className="flex justify-between mt-4">
        <div className="flex gap-8">
          <div>
            {/* Dot and this week div */}
            <div className="flex gap-2 items-center">
              <div className="h-[12px] w-[12px] border border-[4px] border-[#F0C868] rounded-full "></div>
              <span className="text-[#A098AE] text-[14px]">This Week</span>
            </div>
            <h1
              className={`${poppins.className} text-[#363B64] font-bold text-[18px] ml-[30px]`}
            >
              1.982
            </h1>
          </div>
          <div>
            {/* Dot and this week div */}
            <div className="flex gap-2 items-center">
              <div className="h-[12px] w-[12px] border border-[4px] border-[#EF6E4D] rounded-full "></div>
              <span className="text-[#A098AE] text-[14px]">This Week</span>
            </div>
            <h1
              className={`${poppins.className} text-[#363B64] font-bold text-[18px] ml-[30px]`}
            >
              1.345
            </h1>
          </div>
        </div>
        <div>
          <div className="flex gap-6">
            <span className="text-[#A098AE] text-[14px]">Total</span>
            <h1
              className={`${poppins.className} text-[#363B64] font-bold text-[18px]`}
            >
              3.982
            </h1>
          </div>
          <div className="w-[128px] bg-[#DBDBDB] h-[8px]">
            <div className="bg-[#EF6E4D] h-2 w-[50%]"></div>
          </div>
        </div>
      </div>
      <div className="h-[358px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="0"
              stroke="#e5e7eb"
              vertical={true}
              horizontal={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 18, dy:5 }}
            />
            <YAxis
              domain={[0, 80]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 16, fill: "#363B64", dx: -25 }}
            />
            {/* <YAxis /> */}
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            {/* <Legend /> */}
            <Line
              type="linear"
              dataKey="lastWeek"
              stroke="#EF6E4D"
              strokeWidth="4px"
              dot={{ r: 5 }}
            />
            <Line
              type="linear"
              dataKey="thisWeek"
              stroke="#F0C868"
              strokeWidth="4px"
              dot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
