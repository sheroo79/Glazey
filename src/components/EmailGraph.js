"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Poppins, Cairo } from "next/font/google";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const data = [
  { name: "Group A", value: 40 },
  { name: "Group B", value: 30 },
  { name: "Group C", value: 20 },
  { name: "Group D", value: 11 },
];

const COLORS = ["#EF6E4D", "#F0C868", "#DBDBDB", "#363B64"];

// 🔥 Helper to calculate label position
const getLabelPosition = ({ cx, cy, midAngle, innerRadius, outerRadius }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) / 2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return { x, y };
};

// 🔥 Custom Label for Normal State
const renderCustomLabel = (props) => {
  const { value } = props;
  const { x, y } = getLabelPosition(props);
  return (
    <text
      x={x}
      y={y}
      fill="#FCFCFC"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize={14}
      fontWeight="bold"
      className={cairo.className}
    >
      {value}%
    </text>
  );
};

// 🔥 Custom Active Shape (Hover Highlight)
const renderActiveShape = (props) => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    value,
  } = props;

  const { x, y } = getLabelPosition(props);

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 20} // Slice bigger on hover
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        fill="#FCFCFC"
        fontSize={18}
        fontWeight="bold"
        className={cairo.className}
      >
        {value}%
      </text>
    </g>
  );
};

const Legend = [
  { color: "#7D6AEB", text: "Primary(27%)", number: 763 },
  { color: "#363B64", text: "Promotion(11%)", number: 63 },
  { color: "#EF6E4D", text: "Forum(22%)", number: 573 },
  { color: "#F0C868", text: "Socials(115%)", number: 783 },
];
function EmailGraph() {
  const [showLabels, setShowLabels] = useState(true); // label visibility state

  return (
    <div className="w-[340px] h-[566px] bg-[#FCFCFC] p-8">
      {/* Heading */}
      <div className="flex justify-between">
        <h1
          className={`${poppins.className} text-[#363B64] font-bold text-[24px]`}
        >
          Email
        </h1>
        <BsThreeDots className="w-[24px] h-[24px] text-[#A098AE]" />
      </div>

      {/* Donut Chart */}
      <div className="w-[212px] h-[212px] mx-auto mt-8">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              labelLine={false}
              stroke="none"
              label={showLabels ? renderCustomLabel : false}
              onMouseEnter={() => setShowLabels(false)}
              onMouseLeave={() => setShowLabels(true)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Legend part */}
      <div className="mt-10">
        <span className={`${poppins.className} text-[14px] text-[#A098AE]`}>Legend</span>
        {Legend?.map((item, index) => (
          <div key={index} className="flex justify-between my-4">
            <div className="flex gap-4">
              {/* Box */}
              <div
                className={`h-[20px] w-[20px]`}
                style={{ backgroundColor: item.color }}
              ></div>
              {/* text name */}
              <span className={`${poppins.className} text-[14px] text-[#363B64]`}>{item.text}</span>
            </div>
            <span className={`${cairo.className} text-[18px] text-[#202020] font-semibold`}>{item.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmailGraph;
