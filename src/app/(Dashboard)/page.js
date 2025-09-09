"use client";
import EmailGraph from "@/components/EmailGraph";
import ProjectStatisticChart from "@/components/ProjectStatisticChart";
import ServerStatus from "@/components/ServerStatus";
import { useSidebar } from "@/components/SidebarContext";
import StaticChart from "@/components/StaticChart";
import Storage from "@/components/Storage";
import UserReview from "@/components/UserReview";
import { Poppins } from "next/font/google";
import { IoIosArrowDown } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function page() {
  const { isSidebarOpen } = useSidebar();

  const boxData = [
    {
      icon: (
        <img
          src="/icons/bag.png"
          className="w-[30px] h-[30px] text-[#EF6E4D]"
        />
      ),
      count: 932,
      lable: "Project",
    },
    {
      icon: (
        <img
          src="/icons/File.png"
          className="w-[30px] h-[30px] text-[#3CC2E0]"
        />
      ),
      count: 1032,
      lable: "Inquiries",
    },
    {
      icon: (
        <img
          src="/icons/Graph.png"
          className="w-[30px] h-[30px] text-[#7D6AEB] "
        />
      ),
      count: "102k",
      lable: "Investement",
    },
    {
      icon: (
        <img
          src="/icons/investments.png"
          className="w-[30px] h-[30px] text-[#FF606B]"
        />
      ),
      count: "32k",
      lable: "Assests",
    },
  ];
  return (
    <>
      <div className="flex justify-center gap-6 px-4">
        <div>
          <div className="flex justify-between items-center">
            <h1
              className={`text-[36px] text-[#363B64] ${poppins.className} font-bold`}
            >
              Dashboard
            </h1>
            <div className="bg-[#FCFCFC] h-[68px] w-[338px] flex justify-around items-center">
              <LuCalendarDays className="w-[26px] h-[26px] text-[#363B64]" />
              <div>
                <h1
                  className={`${poppins.className} font-bold text-[18px] text-[#363B64]`}
                >
                  Change Periode
                </h1>
                <span
                  className={`${poppins.className} font-normal text-[14px] text-[#A098AE]`}
                >
                  August - Octorber,2025
                </span>
              </div>
              <IoIosArrowDown className="w-[18px] h-[18px] text-[#A098AE]" />
            </div>
          </div>
          {/* 4 boxs */}
          <div className="grid grid-cols-4 mt-4 h-[145px] justify-items-between gap-x-6">
            {boxData?.map((data, index) => (
              <div
                key={index}
                className="bg-[#FCFCFC]  flex justify-around items-center"
              >
                {/* inner box */}
                <div className="w-[72px] h-[72px] bg-[#FFFFFF] border border-[#DBDBDB] flex justify-center items-center">
                  {data.icon}
                </div>
                {/* lable */}
                <div className="text-left">
                  <h1
                    className={`${poppins.className} font-bold text-[36px] text-[#363B64]`}
                  >
                    {data.count}
                  </h1>
                  <span
                    className={`${poppins.className} font-normal text-[18px] text-[#A098AE]`}
                  >
                    {data.lable}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Project Static and Email graph */}
          <div className="mt-8 flex justify-between gap-8">
            <ProjectStatisticChart />
            <EmailGraph />
          </div>

          {/* Static */}
          <div className="mt-8 flex justify-between gap-8">
            <StaticChart />
          </div>
          {/* Storage section */}
          <div className="mt-10">
            <Storage />
          </div>
        </div>
        {/* Right side */}
        <div
          className={`${
            !isSidebarOpen ? "w-[375px]" : "w-0 overflow-hidden"
          }  transform transition-all duration-300 hidden xl:block`}
        >
          <ServerStatus />
        </div>
        
      </div>

      {/* User Reviews */}
      <div className="px-4 mt-8 flex justify-center">
        <UserReview />
      </div>
    </>
  );
}

export default page;
