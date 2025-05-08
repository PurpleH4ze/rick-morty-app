"use client";
import React, { useState } from "react";
import Link from "next/link";
import { routes } from "@/utils/routes";
import withAuth from "../withAuth/withAuth";
import DetailCard from "@/components/DetailCard";
const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className=" min-h-screen w-64 bg-[#556b2f] p-4 md:relative top-16 md:top-0 left-0 hidden md:block overflow-y-hidden">
      <ul>
        {routes.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`p-2 cursor-pointer text-gray-700 rounded-lg ${activeIndex === index
              ? "bg-[#4a4a4a] text-white font-bold"
              : "hover:bg-[#8b5e3c]"
              }`}
          >
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <DetailCard />
    </div>
  );
};
export default Sidebar;
//export default withAuth(Sidebar);
