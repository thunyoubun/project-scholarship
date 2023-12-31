"use client";
import React from "react";

import Link from "next/link";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { ImSwitch } from "react-icons/im";
import { GoSignOut } from "react-icons/go";
import { PiUserListFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import Image from "next/image";

export declare type props = {
  quizCount: string;
};

export default function Sidebar({ quizCount }: props) {
  const router = useRouter();
  function signOut() {
    //Call sign out api without caring what is the result
    //It will fail only in case of client cannot connect to server
    //This is left as an exercise for you. Good luck.
    axios.post("/api/auth/signOut").finally(() => {
      router.push("/");
    });
  }
  return (
    <aside
      className="w-64 h-full  shadow-md  inset-y-0 flex-wrap items-center justify-between   p-0  overflow-y-auto antialiased transition-transform duration-300   bg-white border-0  dark:shadow-none dark:bg-slate-850  max-w-64 ease-nav-brand z-990 md:translate-x-0 rounded-md md:left-0"
      aria-label="Sidebar"
    >
      <div className="px-3 w-full py-4 overflow-y-auto rounded-md bg-white h-full dark:bg-gray-800 relative ">
        <Link href="/" className="flex items-center  mb-5">
          {/* <ImSwitch size={30} className=" text-blue-600 h-6 mr-3 sm:h-7" /> */}
          <Image
            src="/ent-logo.svg"
            alt="pic"
            width={300}
            height={300}
            className=" "
          />
          {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            วิศวกรรมศาสตร์
          </span> */}
        </Link>
        <hr />
        <ul className="space-y-2 mt-2 ">
          <li>
            <Link
              href="/home"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <PiUserListFill size={25} className="text-gray-500" />
              <span className="flex-1 ml-3 whitespace-nowrap">List</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                {quizCount}
              </span> */}
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>

          {/* <li>
            <Link
              href="/pages/inbox"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                1
              </span>
            </Link>
          </li> */}
          {/* <li>
            <Link
              href="/admin"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <IoSettingsSharp size={25} className=" text-gray-500" />
              <span className="flex-1 ml-3 whitespace-nowrap">Setting</span>
            </Link>
          </li> */}
          <div className=" absolute bottom-5 w-[90%]">
            <hr className="my-2" />
            <li>
              <button
                /* onClick={() => logout()} */
                className="flex items-center text-start w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <GoSignOut size={25} className=" text-gray-500" />

                <span className="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
              </button>
            </li>
          </div>
        </ul>
      </div>
    </aside>
  );
}
