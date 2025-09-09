"use client";
import React from "react";
import { GrAddCircle } from "react-icons/gr";
import { useSidebar } from "./SidebarContext";
import { Poppins } from "next/font/google";
import { BsThreeDots } from "react-icons/bs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const contact = [
  { name: "Abdullah", post: "Marketing manager" },
  { name: "Toony Starc", post: "UI Designer" },
  { name: "Karen Hope", post: "Web Developer" },
  { name: "Virat Kholi", post: "Graphic Designer" },
  { name: "Kane Willimsone", post: "QA Engineer" },
];
function ServerStatus() {
  const { isSidebarOpen } = useSidebar();
  return (
    <>
      <div className={`h-[384px] bg-[#FCFCFC] w-full p-8`}>
        <div className="flex justify-between">
          <h1
            className={`${poppins.className} text-[24px] font-bold mb-4 text-[#363B64]`}
          >
            Server Status
          </h1>
          <BsThreeDots className="w-[24px] h-[24px] text-[#A098AE]" />
        </div>
        {/* progress bar */}
        <div className="mt-4 space-y-6">
          <div className="flex gap-4 items-center">
            <span className="text-[#A098AE] text-[14px]">10 AM</span>
            <div className="w-30 h-2 bg-gray-200 rounded">
              <div className="h-2 rounded bg-gradient-to-r from-[#FF606B] via-[#FCC0C4] to-[#FCD1D4]"></div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-[#A098AE] text-[14px]">8 AM</span>
            <div className="w-56 h-2 bg-gray-200 rounded mt-2">
              <div className="h-2 rounded bg-gradient-to-r from-[#4CBC9A] via-[#B9E3D6] to-[#E2F2ED]"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#A098AE] text-[14px]">6 AM</span>
            <div className="w-44 h-2 bg-gray-200 rounded mt-2">
              <div className="h-2 rounded bg-gradient-to-r from-[#4CBC9A] via-[#B9E3D6] to-[#E2F2ED]"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#A098AE] text-[14px]">4 AM</span>
            <div className="w-34 h-2 bg-gray-200 rounded mt-2">
              <div className="h-2 rounded bg-gradient-to-r from-[#F0C868] via-[#F8E7C3] to-[#F9EDD3]"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[#A098AE] text-[14px]">2 AM</span>
            <div className="w-22 h-2 bg-gray-200 rounded mt-2">
              <div className="h-2 rounded bg-gradient-to-r from-[#FF606B] via-[#FCC0C4] to-[#FCD1D4]"></div>
            </div>
          </div>
        </div>
        {/* country + Domatin */}
        <div className="mt-4 flex justify-between">
          <div>
            <span
              className={`text-[#A098AE] text-[14px] ${poppins.className} block`}
            >
              Country
            </span>
            <span
              className={`text-[#363B64] text-[14px] font-semibold ${poppins.className}`}
            >
              Indonesia
            </span>
          </div>
          <div>
            <span
              className={`text-[#A098AE] text-[14px] ${poppins.className} block`}
            >
              Domain
            </span>
            <span
              className={`text-[#363B64] text-[14px] font-semibold ${poppins.className}`}
            >
              Website.com
            </span>
          </div>
          <div>
            <span
              className={`text-[#A098AE] text-[14px] ${poppins.className} block`}
            >
              <img src="/icons/dropdown.png" alt="" />
            </span>
            <span
              className={`text-[#363B64] text-[14px] font-semibold ${poppins.className}`}
            >
              2.0 mbps
            </span>
          </div>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="h-[649px] bg-[#FCFCFC] w-full p-8 mt-6">
        <div className="flex justify-between items-center">
          <h1
            className={`text-[#363B64] text-[24px] font-bold ${poppins.className}`}
          >
            Contacts
          </h1>
          <div className="w-[48px] h-[48px] bg-[#EF6E4D] flex justify-center items-center">
            <GrAddCircle className="text-[#FFFFFF]" />
          </div>
        </div>
        <span
          className={`text-[#A098AE] text-[14px] ${poppins.className} block`}
        >
          You have 456 contacts
        </span>
        {/* contact List */}
        <div className="mt-10">
          {/* outer div */}
          {contact?.map((item, index) => (
            <div key={index} className="flex justify-between items-center space-y-8">
              {/* inner left div */}
              <div className="flex items-center gap-2">
                <div className="w-[48px] h-[48px] bg-[#DBDBDB] flex justify-center items-center"></div>
                <div>
                  <span
                    className={`text-[#A098AE] text-[14px] ${poppins.className} block`}
                  >
                    {item.name}
                  </span>
                  <span
                    className={`text-[#363B64] text-[14px] font-semibold ${poppins.className}`}
                  >
                    {item.post}
                  </span>
                </div>
              </div>
              <div>
                <img src="icons/Email.png" alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#EF6E4D]/10 mx-auto h-[61px] flex items-center justify-center">
          <button className="text-[#EF6E4D] cursor-pointer">View More</button>
        </div>
      </div>

      {/* Project Section */}
      <div className="h-[523px] bg-[#FCFCFC] w-full p-8 mt-6">
        {/* heading div */}
        <div className="flex justify-between">
          <h1
            className={`${poppins.className} text-[24px] font-bold mb-4 text-[#363B64]`}
          >
            Project
          </h1>
          <BsThreeDots className="w-[24px] h-[24px] text-[#A098AE]" />
        </div>
        {/* progress main div */}
        <div className="space-y-18 mt-8">
          {/* progress div */}
          <div className="w-[280px] bg-[#DBDBDB] h-[8px]">
            <div className="bg-[#7D6AEB] h-2 w-[50%]"></div>
            <div className="flex justify-between items-center mt-2">
              <span
                className={`${poppins.className} text-[#363B64] text-[14px] font-semibold`}
              >
                Web Design
              </span>
              <span
                className={`${poppins.className} text-[#A098AE] text-[14px] font-semibold`}
              >
                452 times
              </span>
            </div>
          </div>
          {/* Second progress */}
          <div className="w-[280px] bg-[#DBDBDB] h-[8px]">
            <div className="bg-[#EF6E4D] h-2 w-[40%]"></div>
            <div className="flex justify-between items-center mt-2">
              <span
                className={`${poppins.className} text-[#363B64] text-[14px] font-semibold`}
              >
                Grapic Design
              </span>
              <span
                className={`${poppins.className} text-[#A098AE] text-[14px] font-semibold`}
              >
                97 times
              </span>
            </div>
          </div>

          {/* third progress */}
          <div className="w-[280px] bg-[#DBDBDB] h-[8px]">
            <div className="bg-[#3CC2E0] h-2 w-[60%]"></div>
            <div className="flex justify-between items-center mt-2">
              <span
                className={`${poppins.className} text-[#363B64] text-[14px] font-semibold`}
              >
                Frontend Design
              </span>
              <span
                className={`${poppins.className} text-[#A098AE] text-[14px] font-semibold`}
              >
                61 times
              </span>
            </div>
          </div>
        </div>
        {/* Tag div */}
        <div className="mt-14">
          <span
            className={`${poppins.className} text-[18px] text-[#A098AE] font-normal`}
          >
            Tag
          </span>
          {/* buttons div */}
          <div className="space-y-4 mt-6">
            <div className="flex gap-4">
              <div className="bg-[#EF6E4D]/10 w-[119px] h-[47px] text-[#EF6E4D] flex justify-center items-center">
                #teamwork
              </div>
              <div className="bg-[#EF6E4D]/10 w-[92px] h-[47px] text-[#EF6E4D] flex justify-center items-center">
                #design
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-[#EF6E4D]/10 w-[201px] h-[47px] text-[#EF6E4D] flex justify-center items-center">
                #projectmanagment
              </div>
              <div className="bg-[#EF6E4D]/10 w-[69px] h-[47px] text-[#EF6E4D] flex justify-center items-center">
                16+
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServerStatus;
