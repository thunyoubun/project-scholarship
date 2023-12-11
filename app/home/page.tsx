"use client";
import React, { useState } from "react";
import Head from "next/head";

import Sidebar from "@/app/components/Sidebar";
import Table from "@/app/components/Table";

import { FiDownload } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

export default function Home() {
  const [selectMajor, setMajor] = useState("");

  const handleSelectMajorChange = (event: any) => {
    setMajor(event.target.value);
  };

  const headers: string[] = [
    "ลำดับ",
    "รหัสนักศึกษา",
    "ชื่อ-นามสกุล",
    "สาขาวิชา",
    "เกรดเฉลี่ย",
  ];

  const data = [
    { studentID: "620610589" },
    { name: "ธัญ อนันตรัตน์" },
    { major: "วิศวกรรมคอมพิวเตอร์" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
    { GPA: "3.50" },
  ];

  const major = [
    "วิศวกรรมโยธา",
    "วิศวกรรมเครื่องกล",
    "วิศวกรรมเครื่องกล(นานาชาติ)",
    "วิศวกรรมไฟฟ้า",
    "วิศวกรรมอุตสาหการ",
    "วิศวกรรมอุตสาหการ(นานาชาติ)",
    "วิศวกรรมสิ่งแวดล้อม",
    "วิศวกรรมเหมืองแร่",
    "วิศวกรรมคอมพิวเตอร์",
    "วิศวกรรมสารสนเทศและเครือข่าย",
    "วิศวกรรมหุ่นยนต์และปัญญาประดิษฐ์",
    "วิศวกรรมบูรณาการ",
  ];

  const calculateYear = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2020;
    const years = [];
    for (let i = startYear; i <= currentYear; i++) {
      years.push(`1/${i + 543}`);
      years.push(`2/${i + 543}`);
    }
    return years.reverse();
  };

  let years = calculateYear();

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

      <div> </div>

      <div
        className="z-10 container w-full shadow-md    relative
        h-full max-h-screen transition-all duration-200 ease-in-out   "
      >
        <div className=" bg-white h-full rounded-md p-10">
          <div className="flex justify-between align-middle items-center">
            <h1 className=" font-semibold text-xl">
              รายชื่อนักศึกษาที่ได้รับทุน
            </h1>
          </div>
          {/* Table */}
          <div className="mt-16 grid gap-4">
            <div className=" flex items-center justify-between ">
              <div className="flex gap-2">
                <div className="flex border-1 gap-2 items-center bg-gray-100 rounded-md px-4">
                  <BsSearch />
                  <input placeholder="Search " className="  "></input>
                </div>

                {/*สาขาวิชา */}
                <div className="p-2 bg-gray-100  text-gray-600  rounded-md">
                  <select
                    name="majors"
                    id="major-select"
                    onChange={handleSelectMajorChange}
                  >
                    <option>สาขาวิชา</option>
                    {major.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="p-2 bg-gray-100  text-gray-600  rounded-md">
                  <select name="plan" id="plan-select">
                    <option>แผนการเรียน</option>
                    <option value="แผนปกติ">แผนปกติ</option>
                    <option value="แผนสหกิจ">แผนสหกิจ</option>

                    {selectMajor === "วิศวกรรมโยธา" ? (
                      <option value="แผนก้าวหน้า">แผนก้าวหน้า</option>
                    ) : null}
                    {selectMajor === "วิศวกรรมไฟฟ้า" ? (
                      <option value="แผนไฟฟ้าสื่อสาร">แผนไฟฟ้าสื่อสาร</option>
                    ) : null}
                    {selectMajor === "วิศวกรรมไฟฟ้า" ? (
                      <option value="แผนไฟฟ้ากำลัง">แผนไฟฟ้ากำลัง</option>
                    ) : null}
                    {selectMajor === "วิศวกรรมไฟฟ้า" ? (
                      <option value="แผนโครงการ">แผนโครงการ</option>
                    ) : null}
                  </select>
                </div>

                {/*ภาคการศึกษา */}
                <div className="p-2 bg-gray-100  text-gray-600  rounded-md">
                  <select name="majors" id="major-select">
                    <option>ภาคการศึกษา</option>
                    {years.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className=" ">
                <button className=" flex hover:bg-blue-400 hover:text-white hover:border-blue-500 border-solid hover:border-double  p-2 border-2  rounded-md justify-center items-center gap-2">
                  <FiDownload />
                  Download Excel Report
                </button>
              </div>
            </div>

            <div>
              <div>
                <h1 className=" font-semibold">
                  Total <span className="">{data ? data.length : 0}</span>{" "}
                  students
                </h1>
              </div>
            </div>

            <Table headers={headers} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
