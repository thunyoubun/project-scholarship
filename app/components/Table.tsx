import React from "react";

interface Props {
  headers: Array<string>;
  data: Object[];
}

export default function Table({ headers, data }: Props) {
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
                    620610589
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    ธัญ อนันตรัตน์
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="bg-green-100 text-green-500 font-semibold text-sm p-1 rounded-md  flex justify-center items-center">
                      <h1>คอมพิวเตอร์</h1>
                    </div>
                  </div>
                </td>
                <td className=" px-4 py-2">
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center items-center">3.50</div>
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
