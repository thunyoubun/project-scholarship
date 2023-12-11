import React, { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";

export default function ModalAddUser({ handleShowModal }: any) {
  const [showModal, setShowModal] = useState(false);

  const [position, setPosition] = useState("");

  const handleSelectPosition = (event: any) => {
    setPosition(event.target.value);
  };

  const eventShowModal = () => {
    setShowModal(!showModal);
    handleShowModal(setShowModal);
  };

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

  return (
    <div className="h-screen w-screen relative flex justify-center z-20 p-8 ">
      <div
        onClick={eventShowModal}
        className="w-full h-screen bg-black/50 absolute z-10 top-0 left-0"
      ></div>
      <div className="bg-white w-1/3 rounded-lg z-20 h-full  flex flex-col animate-text-fade-in  ">
        {/*Header*/}
        <div className=" bg-blue-500 rounded-t-md relative flex justify-end h-1/6 items-center w-full">
          {/*  <h1 className=" font-bold text-lg">Add User</h1> */}
          <button
            onClick={eventShowModal}
            className="text-white  hover:scale-105 font-bold p-4"
          >
            <FaCircleXmark size={30} />
          </button>
        </div>
        {/*Body*/}
        <div className="flex justify-center items-start h-full p-6 ">
          <div className=" h-full flex flex-col gap-6 ">
            <div className="mb-6 text-center items-start">
              <h2 className=" font-bold text-3xl">เพิ่มสิทธิ์ในการเข้าถึง</h2>
              <h1 className=" text-gray-500">กรุณากรอกฟอร์มให้ครบถ้วน</h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className=" w-full flex flex-col gap-2">
                <h1>
                  <span className=" text-red-500">*</span>ตำแหน่ง
                </h1>
                <div className="p-2 bg-gray-100 w-full  text-gray-600  rounded-md">
                  <select onChange={handleSelectPosition} className="w-full">
                    <option value="1">ผู้ดูแลระดับสูงสุด</option>
                    <option value="2">ผู้ดูแลระดับคณะ</option>
                    <option value="3">ผู้ดูแลระดับสาขา</option>
                  </select>
                </div>
              </div>
              {position === "3" && (
                <div className="flex flex-col gap-2">
                  <h1>
                    <span className=" text-red-500">*</span>สาขาวิชา
                  </h1>
                  <div className="p-2 bg-gray-100 w-full  text-gray-600  rounded-md">
                    <select className="w-full">
                      {major.map((item, index) => {
                        return (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <h1>
                  <span className=" text-red-500">*</span>CMU Email
                </h1>
                <input
                  placeholder="example@cmu.ac.th"
                  type="text"
                  className="p-2 bg-gray-100 w-full  text-gray-600  rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/*Footer*/}
        <hr />
        <div className=" p-6">
          <button
            onClick={eventShowModal}
            className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-md w-full"
          >
            มอบสิทธิ์การเข้าถึง
          </button>
        </div>
      </div>
    </div>
  );
}
