import React from "react";
import Image from "next/image";

import school from "../public/nani.webp";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen relative overflow-hidden bg-cover p-6 bg-no-repeat bg-right md:bg-left  bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/15b759ff-b0f7-49d8-afba-6d458ff6cc37.jpg')]   ">
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-red-700 to-blue-700 opacity-60"></span>

      {/*  Navbar */}
      <div className="w-full  h-16 p-4 flex justify-center md:justify-start align-middle items-center relative top-0 left-0 z-10  ">
        <div>
          <Image
            src="/ent-logo.svg"
            alt="pic"
            width={250}
            height={250}
            className=" "
          />
          {/* <h1 className="text-white font-bold text-3xl ">Entaneer</h1> */}
        </div>
      </div>

      {/*  Body */}
      <div className="h-full px-0 md:px-4 py-4 md:py-28 flex justify-start relative z-10">
        {/*  Left */}
        <div className="w-full flex flex-col  items-center">
          <div className="  text-center justify-center flex flex-col w-full md:w-2/3 h-full gap-24 md:gap-32">
            <div className="flex flex-col lg:items-start items-center gap-2">
              <div className="flex  text-white w-fit  bg-black/60 rounded-3xl p-1 h-8 animate-text-fade-in">
                <h1 className="inline-flex px-4 items-center shadow-lg bg-red-700 font-medium rounded-3xl">
                  ENTANEER
                </h1>
                <h1 className="inline-flex px-2 md:px-4 items-center text-xs md:text-base">
                  Merit-based Scholarship Selection
                </h1>
              </div>
              <h1 className=" text-white text-4xl md:text-6xl   tracking-wide font-bold animate-text-fade-in">
                ระบบทุนการศึกษา<span>นักศึกษาเรียนดี</span>
              </h1>

              <p className="  text-slate-300 mt-2 text-sm md:text-lg font-medium text-center  animate-text-fade-in">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
                in nisi blanditiis voluptates tempora, autem deserunt,
                doloremque quidem quibusdam vero, assumenda eum quaerat itaque
                perferendis illum! Ullam fugit at doloremque esse vel? Eaque
                veritatis ad aspernatur magni consequuntur officia, natus ipsa
                sequi obcaecat
              </p>
            </div>
            <div className=" ">
              <Link href="/home">
                <button className=" bg-transparent hover:bg-red-700 border-4 border-red-700 hover:scale-105 hover:border-white border-solid  hover:border-double rounded-3xl px-2 py-2">
                  <h1 className=" text-white text-xl font-semibold">
                    Get Started
                  </h1>
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/*  Right */}
        {/*  <div className="w-1/2 -z-10   flex h-fit justify-center items-center relative">
          <div className=" fixed bg-no-repeat bg-cover  bg-y-50 w-full bg-center h-80 top-0 left-0 bg-[url('https://www.cmu.ac.th/content/organization/7ae5726e-0c18-45f8-ae3c-cdd52e2afd94/15b759ff-b0f7-49d8-afba-6d458ff6cc37.jpg')] min-h-75">
            <span className="absolute top-0 left-0 w-full h-full bg-red-500 opacity-60"></span>
          </div>
          <svg
            className="absolute -top-20  z-10"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#D23030"
              d="M43,-51.6C56.9,-39.7,70,-27.2,71.3,-13.5C72.6,0.2,62.1,15,50.6,24C39.2,33.1,26.8,36.4,15.7,38.3C4.6,40.2,-5.2,40.8,-20.6,41.6C-35.9,42.5,-56.8,43.7,-66.1,34.7C-75.4,25.7,-73.1,6.6,-67.7,-9.8C-62.3,-26.3,-53.7,-40.1,-41.9,-52.3C-30.1,-64.6,-15.1,-75.3,-0.2,-75C14.6,-74.7,29.2,-63.4,43,-51.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <Image
            src={school}
            height={500}
            width={500}
            alt=""
            className="absolute -top-20  z-20 "
          />
        </div> */}
      </div>

      <ul className="circles ">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
