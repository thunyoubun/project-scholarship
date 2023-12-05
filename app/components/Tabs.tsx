"use client";
import React, { useState } from "react";
import TableUser from "./TableUser";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const onChangedTab = (index: number) => {
    setActiveTab(index);
  };

  const headers: string[] = ["ลำดับที่", "ชื่อ-นามสกุล", "อีเมลล์", "ตำแหน่ง"];
  const data = [
    { name: "แมว สีขาว", email: "meowWhite@gmeow.com", role: "Admin" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
    { name: "แมว สีดำ", email: "meowBlack@gmeow.com", role: "Staff" },
  ];

  return (
    <div className=" grid relative gap-4 ">
      <div className=" flex justify-between">
        <div className=" flex items-center ">
          <button onClick={() => onChangedTab(0)} className="flex flex-col  ">
            <div className="px-4 font-semibold">ผู้ใช้งาน</div>
            {activeTab == 0 ? (
              <div className="w-full animate-fade-left bg-red-500 h-1 rounded-md"></div>
            ) : (
              <div className="w-full bg-transparent h-1 rounded-md"></div>
            )}
          </button>
          <button onClick={() => onChangedTab(1)} className="flex flex-col  ">
            <div className="px-4 font-semibold">แผนการเรียน</div>
            {activeTab == 1 ? (
              <div className="w-full animate-fade-left bg-red-500 h-1 rounded-md"></div>
            ) : (
              <div className="w-full bg-transparent h-1 rounded-md"></div>
            )}
          </button>
        </div>

        {activeTab == 0 ? (
          <button className="flex gap-2 p-2 border items-center bg-green-400 text-white rounded-md">
            <IoPersonAdd size={20} />
            <h1>เพิ่มผู้ใช้งาน</h1>
          </button>
        ) : (
          <button className="flex gap-2 p-2 border items-center bg-green-400 text-white rounded-md">
            {/* <MdOutlineNoteAdd size={20} /> */}
            <AiFillFileAdd size={20} />
            <h1>เพิ่มกระบวนวิชา</h1>
          </button>
        )}
      </div>

      <TableUser headers={headers} data={data ? data : []} />
    </div>
  );
}
