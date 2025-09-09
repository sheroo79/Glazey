import { Poppins } from "next/font/google";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

function UserReview() {
  return (
    <>
      <div>
        <h1
          className={`${poppin.className} text-[#363B64] text-[24px] font-bold text-center xl:text-left`}
        >
          User Review
        </h1>
        <div className="flex justify-center xl:justify-start gap-8 flex-wrap my-6">
          <div className="w-[447px] h-[205px] bg-[#FCFCFC] p-6 space-y-5">
            <div className="flex gap-4">
                <div className="w-[54px] h-[54px] bg-[#DBDBDB]"></div>
                <div>
                    <h1 className={`${poppin.className} text-[#363B64] text-[18px] font-semibold`}>Exca Liber</h1>
                    <span className={`${poppin.className} text-[#A098AE] text-[14px]`}>UI Designer</span>
                </div>
            </div>
            <span className={`${poppin.className} text-[14px] text-[#363B64]`}>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</span>
          </div>
          <div className="w-[447px] h-[205px] bg-[#FCFCFC] p-6 space-y-5">
            <div className="flex gap-4">
                <div className="w-[54px] h-[54px] bg-[#DBDBDB]"></div>
                <div>
                    <h1 className={`${poppin.className} text-[#363B64] text-[18px] font-semibold`}>Exca Liber</h1>
                    <span className={`${poppin.className} text-[#A098AE] text-[14px]`}>UI Designer</span>
                </div>
            </div>
            <span className={`${poppin.className} text-[14px] text-[#363B64]`}>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</span>
          </div>
          <div className="w-[447px] h-[205px] bg-[#FCFCFC] p-6 space-y-5">
            <div className="flex gap-4">
                <div className="w-[54px] h-[54px] bg-[#DBDBDB]"></div>
                <div>
                    <h1 className={`${poppin.className} text-[#363B64] text-[18px] font-semibold`}>Exca Liber</h1>
                    <span className={`${poppin.className} text-[#A098AE] text-[14px]`}>UI Designer</span>
                </div>
            </div>
            <span className={`${poppin.className} text-[14px] text-[#363B64]`}>Sed eligendi facere repellendus. Ipsam ipsam incidunt minima harum tenetur. Ab sit asperiores architecto repudiandae.</span>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default UserReview;
