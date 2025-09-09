"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { Cairo, Poppins } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
function Storage() {
  const [state, setState] = React.useState({
    series: [70],
    options: {
      chart: {
        height: 158,
        type: "radialBar",
      },
      colors: ["#F0C868"],

      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%",
          },
        },
      },
      //   labels: ["Cricket"],
    },
  });
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-[533px] h-[219px] bg-[#FCFCFC]">
          <div className="flex justify-around items-center px-6 py-8">
            <div id="chart" className="w-[30%]">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="radialBar"
                height={158}
              />
            </div>
            <div className="space-y-4">
              <h1
                className={`${cairo.className} text-[#363B64] text-[24px] font-bold`}
              >
                Upgrate Your Storage
              </h1>
              <span className="text-[14px] text-[#A098AE] block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </span>
              <button className="w-[140px] h-[48px] bg-[#EF6E4D] text-[#FCFCFC]">
                Uprade
              </button>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="w-[505px] h-[219px] bg-[#FCFCFC] px-6 py-8">
          <div className="space-y-3">
            <div className="flex justify-between">
              <h1
                className={`${cairo.className} text-[#363B64] text-[36px] font-bold`}
              >
                7,642
              </h1>
              <button className="bg-[#EF6E4D] h-[48px] text-[#FCFCFC] px-6">+ Compose Email</button>
            </div>
            <span
              className={`${poppin.className} text-[18px] font-semibold text-[#363B64] block`}
            >
              Total emails Subcriber
            </span>
            <span
              className={`${poppin.className} text-[#A098AE] font-normal text-[14px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storage;
