import React from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

interface Props {
  headers: Array<string>;
  data: Course[];
}

interface Course {
  code: string;
  name: string;
  type: string;
  credit: number;
}

export default function TableCourse({ headers, data }: Props) {
  const roleColor = [
    {
      role: "Admin",
      color: "border-2 border-yellow-400 bg-yellow-100 text-yellow-500",
    },
    {
      role: "Staff",
      color: "border-2 border-green-400 bg-green-100 text-green-500",
    },
  ];
  return (
    <div className=" overflow-auto animate-fade-left  max-h-96 border-1 border shadow-lg shadow-gray-100/50 rounded-md p-4 ">
      <table className="h-50 max-h-50 w-full table  ">
        <thead className="  border-slate-100 shadow-lg shadow-gray-100/50 rounded-md  bg-gray-100">
          <tr className=" text-gray-600">
            {headers.map((item: any, index: number) => {
              return (
                <th key={index} className="px-4 py-2">
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="   ">
          {data.map((item: Course, index: number) => {
            return (
              <tr key={index} className="hover:bg-slate-100 border-b-2">
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    {item?.code}
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    {item?.name}
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    {item?.type}
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      {item?.credit}
                    </div>
                  </div>
                </td>

                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center gap-2 items-center">
                      <button className="flex  gap-1 p-2 text-center justify-center border items-center bg-blue-400 font-semibold text-sm text-white rounded-md">
                        <AiFillEdit size={20} />
                        <h1>Edit</h1>
                      </button>
                      <button className="flex gap-1 p-2  text-center justify-center border items-center bg-red-400 font-semibold text-sm text-white rounded-md">
                        <MdDelete size={20} />
                        <h1>Delete</h1>
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
