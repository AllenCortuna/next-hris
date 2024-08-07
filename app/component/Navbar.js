"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { BsBarChartFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdTry } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { FaBuilding } from "react-icons/fa6";
import { RiFolderHistoryFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { LuFingerprint } from "react-icons/lu";

const Navbar = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  const toggleNavbar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div
      className={`flex ${
        isMinimized ? "w-20" : "w-56"
      } h-screen bg-zinc-200 transition-width duration-300 justify-start items-start`}
    >
      <nav className="flex flex-col items-start justify-start p-5 gap-2 mx-auto">
        <button
          onClick={toggleNavbar}
          data-tip="toggle width"
          className={`text-lg font-[600] flex mb-5 tooltip text-white tooltip-right m-auto p-2 rounded-md gap-2 bg-neutral`}
        >
          <LuFingerprint className="text-2xl" /> {!isMinimized && "HRIS"}
        </button>
        {/* nasa globals.css ang classname ng Link */}
        <Link href={"/"} className="navlink">
          <BsBarChartFill className="text-xl" /> {!isMinimized && "Dashboard"}
        </Link>
        <Link href={"/employee"} className="navlink">
          <FaUserAlt className="text-xl" /> {!isMinimized && "Employee"}
        </Link>
        <Link href={"/attendance"} className="navlink">
          <MdTry className="text-xl" /> {!isMinimized && "Attendance"}
        </Link>
        <Link href={"/payroll"} className="navlink">
          <MdPayments className="text-xl" /> {!isMinimized && "Payroll"}
        </Link>
        <Link href={"/branch"} className="navlink">
          <FaBuilding className="text-xl" /> {!isMinimized && "Branch"}
        </Link>
        <Link href={"/history"} className="navlink">
          <RiFolderHistoryFill className="text-xl" /> {!isMinimized && "History"}
        </Link>
        <Link href={"/account"} className="navlink">
          <FaUserCircle className="text-xl" /> {!isMinimized && "Account"}
        </Link>
        <Link href={"/logout"} className="navlink">
          <FaSignOutAlt className="text-xl" /> {!isMinimized && "Logout"}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
