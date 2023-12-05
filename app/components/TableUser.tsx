import React from "react";

interface Props {
  headers: Array<string>;
  data: Object[];
}

export default function Table({ headers, data }: Props) {
  const roleColor = [
    { role: "Admin", color: "bg-yellow-500 text-yellow-100" },
    { role: "Staff", color: "bg-green-500 text-green-100" },
  ];
  return (
    <div className=" overflow-auto  max-h-96 border-1 border shadow-lg shadow-gray-100/50 rounded-md p-4 ">
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
          {data.map((item: any, index: number) => {
            return (
              <tr key={index} className=" border-b-2">
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    {index + 1}
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    {item.name}
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">
                      {item.email}
                    </div>
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div
                      className={`${
                        roleColor.find((x) => x.role === item.role)?.color
                      } font-semibold text-sm p-1 rounded-md  flex justify-center items-center w-16`}
                    >
                      <h1>{item.role}</h1>
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
