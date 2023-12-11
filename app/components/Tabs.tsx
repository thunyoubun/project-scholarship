"use client";
import React, { useState } from "react";
import TableUser from "./TableUser";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";
import TableCourse from "./TableCourse";

export default function Tabs({ activeTab, changeTable }: any) {
  const onChangedTab = (e: boolean) => {
    changeTable(e);
  };

  return (
    <div className=" grid relative gap-4 ">
      <div className=" flex justify-between">
        <div className=" flex items-center ">
          <button
            onClick={() => onChangedTab(false)}
            className="flex flex-col  "
          >
            <div className="px-4 font-semibold">ผู้ใช้งาน</div>
            {activeTab == false && (
              <div className="w-full animate-fade-left bg-red-500 h-1 rounded-md"></div>
            )}
          </button>
          <button
            onClick={() => onChangedTab(true)}
            className="flex flex-col  "
          >
            <div className="px-4 font-semibold">แผนการเรียน</div>
            {activeTab == true ? (
              <div className="w-full animate-fade-left bg-red-500 h-1 rounded-md"></div>
            ) : (
              <div className="w-full bg-transparent h-1 rounded-md"></div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
