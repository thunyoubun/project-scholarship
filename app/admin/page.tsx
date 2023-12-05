import React, { useState } from "react";

import Head from "next/head";

import Sidebar from "@/app/components/Sidebar";
import TableUser from "@/app/components/TableUser";
import Tabs from "@/app/components/Tabs";

import { FiDownload } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";

export default function admin() {
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
        className="h-full z-10 hidden md:flex  md:px-6 mb-2"
      >
        <Sidebar quizCount="0" />
      </div>

      <div
        className="z-10 container w-full shadow-md    relative
        h-full max-h-screen transition-all duration-200 ease-in-out   "
      >
        <div className=" bg-white h-full rounded-md p-10">
          <div className="flex justify-between align-middle items-center">
            <h1 className=" font-semibold text-xl">จัดการระบบ</h1>
          </div>
          {/* Table */}
          <div className="mt-16 grid relative  ">
            <div className="flex justify-between">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
