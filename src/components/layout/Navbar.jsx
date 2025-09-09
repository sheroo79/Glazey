"use client";
import { Cairo } from "next/font/google";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { TbSpeakerphone } from "react-icons/tb";
import Select, { components } from "react-select";
import { FiSidebar } from "react-icons/fi";
import { useSidebar } from "../SidebarContext";

export const cairo = Cairo({
  subsets: ["latin"],
  weight: "700",
});

const options = [
  {
    value: "English (US)",
    label: "English (US)",
    img: "/icons/united-states.png",
  },
  {
    value: "Urdu (PK)",
    label: "Urdu (PK)",
    img: "/icons/pakistan.png",
  },
  {
    value: "Hindi (IN)",
    label: "Hindi (IN)",
    img: "/icons/india.png",
  },
];

const getImageStyle = (data) => {
  if (
    data.value === "Urdu (PK)" ||
    data.value === "Hindi (IN)" ||
    data.value === "English (US)"
  ) {
    return { width: 30, height: 24, marginRight: 6 };
  }
  // return { width: 24, height: 24, marginRight: 10 };
};

const Option = (props) => (
  <components.Option {...props}>
    <img
      src={props.data.img}
      alt={props.data.label}
      style={getImageStyle(props.data)}
    />
    {props.data.label}
  </components.Option>
);

const SingleValue = (props) => (
  <components.SingleValue {...props}>
    <img
      src={props.data.img}
      alt={props.data.label}
      style={getImageStyle(props.data)}
    />
    {props.data.label}
  </components.SingleValue>
);

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "194px",
    height: "60px",
    padding: "5px",
    border: "3px solid #F5F5F5",
    boxShadow: state.isFocused ? "0 0 0 1px #F5F5F5" : "none",
    "&:hover": {
      border: "2px solid #F5F5F5",
    },
  }),
  option: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    padding: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    display: "flex",
    alignItems: "center",
    fontFamily: cairo.style.fontFamily,
    fontWeight: 700,
    fontSize: "16px",
  }),
};
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsSidebarOpen, isSidebarOpen } = useSidebar(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleChange = (option) => {
    setSelectedOption(option);
    console.log("Option selected:", option);
  };
  return (
    <header className="bg-[#FCFCFC]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[120px]">
          {/*  Search Bar */}
          <div className="flex items-center flex-1 gap-2">
            <div
              onClick={(e) => {
                setIsSidebarOpen((prev) => !prev);
                e.stopPropagation();
              }}
              className="bg-[#F5F5F5] cursor-pointer text-[24px] h-[48px] w-[48px] sm:h-[56px] sm:w-[56px] rounded-full flex justify-center items-center text-gray-600"
            >
              <FiSidebar />
            </div>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Search here..."
                className="w-[513px] h-[60px] pl-10 pr-4 focus:outline-none text-[18px] bg-[#F5F5F5] placeholder:[#A098AE]"
              />
              {/* Search Icon */}
              <IoSearch className="absolute text-[#EF6E4D] h-[24px] w-[24px] top-[17px] left-3" />
            </div>
          </div>

          {/* 🖥️ Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {/* Language */}
            <Select
              value={selectedOption}
              onChange={handleChange}
              options={options}
              components={{ Option, SingleValue }}
              styles={customStyles}
              isSearchable={false}
            />

            {/* Notification */}
            <button className="relative">
              <MdOutlineMessage className="h-[24px] w-[24px]" />

              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* annoucement */}
            <button className="relative">
              <TbSpeakerphone className="h-[24px] w-[24px]" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Settings */}
            <button>
              <SlSettings className="h-[24px] w-[24px]" />
            </button>

            {/*  Profile */}
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-sm font-semibold">Nella Vita</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <div className="h-[60px] w-[60px] bg-[#DBDBDB]"></div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 flex flex-col gap-2">
            <select className="border border-gray-200 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400">
              <option>English (US)</option>
              <option>Urdu (PK)</option>
              <option>Hindi (IN)</option>
            </select>
            <button className="text-sm text-gray-800">Notifications</button>
            <button className="text-sm text-gray-800">Messages</button>
            <button className="text-sm text-gray-800">Settings</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
