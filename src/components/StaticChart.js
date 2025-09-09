"use client";
import { Poppins } from "next/font/google";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import ReactApexChart from "react-apexcharts";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function StaticChart() {
  const [state] = useState({
    series: [
      {
        name: "Net Profit",
        data: [44, 15, 30, 56, 25, 45, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 50, 98, 30, 70, 30, 114, 94],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      legend: {
        show: false,
      },
      colors: ["#EF6E4D", "#F0C868"],

      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "25%",
          borderRadius: 0,
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
        labels: {
          style: {
            colors: "#A098AE", // Bottom labels ka color
            fontSize: "14px", // Bottom labels ka size
            fontWeight: 500, // Bold
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#A098AE", // Bottom labels ka color
            fontSize: "14px", // Bottom labels ka size
            fontWeight: 500, // Bold
          },
        },
      },
      fill: {
        opacity: 1,
      },
      // tooltip: {
      //   y: {
      //     formatter: function (val) {
      //       return "$ " + val + " thousands";
      //     },
      //   },
      // },
    },
  });

  return (
    <div className="w-full h-[478px] p-8 bg-[#FCFCFC] shadow-md">
      {/* Chart Heading and select */}
      <div className="flex justify-between">
        <h2
          className={`${poppins.className} text-[24px] font-bold mb-4 text-[#363B64]`}
        >
          Statistic
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
      <div className="flex justify-between">
        <div className="h-[358px] mt-4 w-full">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="mt-4">
          {/* income dots & Expense */}
          <div className="flex justify-between items-center gap-8">
            <div className="flex gap-2 items-center">
              <div className="h-[12px] w-[12px] border border-[4px] border-[#EF6E4D] rounded-full "></div>
              <span className="text-[#A098AE] text-[14px]">Income</span>
            </div>
            <div className="flex gap-2 items-center">
              <div className="h-[12px] w-[12px] border border-[4px] border-[#F0C868] rounded-full "></div>
              <span className="text-[#A098AE] text-[14px]">Expense</span>
            </div>
          </div>
          {/* both persentage */}
          <div className="mt-6 space-y-4">
            <span className="text-[#A098AE] text-[14px]">Income</span>
            <h1 className={`${poppins.className} text-[24px] text-[#363B64] font-bold mt-4`}>$12,890,00</h1>
            <div className="flex gap-2 items-center">
              <img src="/icons/dropdownTop.png"/>
              <span className="text-[#4CBC9A] text-[18px] font-semibold">+15%</span>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <span className="text-[#A098AE] text-[14px]">Expense</span>
            <h1 className={`${poppins.className} text-[24px] text-[#363B64] font-bold mt-4`}>$12,890,00</h1>
            <div className="flex gap-2 items-center">
              <img src="/icons/dropB.png"/>
              <span className="text-[#FF606B] text-[18px] font-semibold">+15%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
