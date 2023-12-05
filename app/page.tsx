import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen relative overflow-hidden p-6  bg-gradient-to-l from-red-700 to-blue-700 ">
      {/*  Navbar */}
      <div className="w-full h-16 p-4 flex justify-between align-middle items-center relative top-0 left-0 z-10  ">
        <div>
          <Image
            src="/ent-logo.svg"
            alt="pic"
            width={300}
            height={300}
            className=" "
          />
          {/* <h1 className="text-white font-bold text-3xl ">Entaneer</h1> */}
        </div>
        <div>
          <button className=" bg-red-700 hover:bg-red-600 border-2 border-white hover:border-white rounded-md px-2 py-2">
            <h1 className=" text-white font-semibold">Login with CMU</h1>
          </button>
        </div>
      </div>

      {/*  Body */}
      <div className="h-full px-4 py-28 flex justify-start relative z-10">
        {/*  Left */}
        <div className="w-1/2">
          <div className="text-white w-fit flex bg-black/60 rounded-3xl p-1 h-8 animate-text-fade-in">
            <h1 className="inline-flex px-4 items-center shadow-lg bg-red-500 font-medium rounded-3xl">
              ENT
            </h1>
            <h1 className="inline-flex px-4 items-center ">
              Merit-based Scholarship Selection
            </h1>
          </div>

          <div className="mt-4">
            <h1 className=" text-white text-6xl font-bold animate-text-fade-in">
              Merit-based Scholarship Selection System
            </h1>

            <p className="  text-slate-300 mt-2 text-lg font-medium  animate-text-fade-in">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius in
              nisi blanditiis voluptates tempora, autem deserunt, doloremque
              quidem quibusdam vero, assumenda eum quaerat itaque perferendis
              illum! Ullam fugit at doloremque esse vel? Eaque veritatis ad
              aspernatur magni consequuntur officia, natus ipsa sequi obcaecati,
              autem, esse commodi quis. Ea debitis autem quam magni maxime,
              similique mollitia blanditiis! Voluptatibus commodi provident iure
              eligendi necessitatibus rem sint quibusdam! Quaerat labore debitis
              recusandae adipisci!
            </p>
          </div>
        </div>
        {/*  Right */}
        <div className="w-1/2 flex justify-center items-center relative">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#D23030"
              d="M43,-51.6C56.9,-39.7,70,-27.2,71.3,-13.5C72.6,0.2,62.1,15,50.6,24C39.2,33.1,26.8,36.4,15.7,38.3C4.6,40.2,-5.2,40.8,-20.6,41.6C-35.9,42.5,-56.8,43.7,-66.1,34.7C-75.4,25.7,-73.1,6.6,-67.7,-9.8C-62.3,-26.3,-53.7,-40.1,-41.9,-52.3C-30.1,-64.6,-15.1,-75.3,-0.2,-75C14.6,-74.7,29.2,-63.4,43,-51.6Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
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
