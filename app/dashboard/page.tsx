"use client";
import React, { useState } from "react";

import Head from "next/head";

import Sidebar from "@/app/components/Sidebar";
import TableUser from "@/app/components/TableUser";
import Tabs from "@/app/components/Tabs";
import TableCourse from "@/app/components/TableCourse";
import ModalAddUser from "./ModalAddUser";

import { FiDownload } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import { IoPersonAdd } from "react-icons/io5";
import { MdOutlineNoteAdd } from "react-icons/md";
import { AiFillFileAdd } from "react-icons/ai";

interface Course {
  code: string;
  name: string;
  type: string;
  credit: number;
}

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(false);

  console.log(activeTab);

  const headersUser: string[] = [
    "ลำดับที่",
    "ชื่อ-นามสกุล",
    "อีเมล",
    "ตำแหน่ง",
    "แก้ไข/ลบ",
  ];
  const headersCourse: string[] = [
    "รหัสวิชา",
    "ชื่อวิชา",
    "หมวดหมู่วิชา",
    "หน่วยกิต",
    "แก้ไข/ลบ",
  ];
  const dataUser = [
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

  const dataCourse: Course[] = [
    { code: "261217", name: "Data Structures", type: "วิชาแกน", credit: 3 },
    { code: "261216", name: "Discrete Math", type: "วิชาแกน", credit: 3 },
  ];
  return (
    <div className="flex h-screen w-screen  bg-slate-100 p-6 relative ">
      <Head>
        <title>Entanerr - Scholarship</title>
        <meta property="og:title" content="EasyQ - My Quizzes" key="title" />
      </Head>
      <div className=" fixed bg-no-repeat bg-cover  bg-y-50 w-full bg-center h-80 top-0 left-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/15b759ff-b0f7-49d8-afba-6d458ff6cc37.jpg')] min-h-75">
        {/* <span className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-60"></span> */}
      </div>
      <div
        id="nav-sidebar"
        className="h-full z-10 hidden md:flex  md:pr-6 mb-2"
      >
        <Sidebar quizCount="0" />
      </div>

      <div
        className="z-10 container w-full shadow-md     relative
        h-full max-h-screen transition-all duration-200 ease-in-out   "
      >
        <div className=" bg-white h-full rounded-md p-10">
          <div className="flex    justify-between align-middle items-center">
            <h1 className=" font-semibold text-xl">จัดการระบบ</h1>
          </div>
          {/* Table */}
          <div className="mt-16 grid relative   ">
            <div className=" flex justify-between mb-4">
              <Tabs activeTab={activeTab} changeTable={setActiveTab} />
              {activeTab === false ? (
                <button
                  onClick={() => setShowModal(true)}
                  className=" w-40 justify-center flex gap-2 p-2 border items-center hover:bg-green-500 bg-green-400 text-white rounded-md"
                >
                  <IoPersonAdd size={20} />
                  <h1>เพิ่มผู้ใช้งาน</h1>
                </button>
              ) : (
                <button className="w-40 justify-center  flex gap-2 p-2 border items-center  hover:bg-green-500 bg-green-400 text-white rounded-md">
                  {/* <MdOutlineNoteAdd size={20} /> */}
                  <AiFillFileAdd size={20} />
                  <h1>เพิ่มกระบวนวิชา</h1>
                </button>
              )}
            </div>
            {activeTab === false ? (
              <TableUser
                headers={headersUser}
                data={dataUser ? dataUser : []}
              />
            ) : (
              <TableCourse
                headers={headersCourse}
                data={dataCourse ? dataCourse : []}
              />
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <div className="z-10 top-0 left-0 absolute w-full">
          <ModalAddUser handleShowModal={setShowModal} />
        </div>
      )}
    </div>
  );
}
