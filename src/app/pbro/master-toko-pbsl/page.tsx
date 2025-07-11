"use client";

import { useState } from "react";

const dummyData = [
  { dc: "G026", kode: "F00M", flag: false },
  { dc: "G026", kode: "F11A", flag: false },
  { dc: "G026", kode: "F17D", flag: false },
  { dc: "G026", kode: "F21U", flag: false },
  { dc: "G026", kode: "F2ZO", flag: false },
  { dc: "G026", kode: "F3AB", flag: false },
  { dc: "G026", kode: "F43A", flag: false },
  { dc: "G026", kode: "F4BI", flag: false },
  { dc: "G026", kode: "F52N", flag: false },
  { dc: "G026", kode: "F57X", flag: false },
  { dc: "G026", kode: "F5QC", flag: false },
  { dc: "G026", kode: "F61L", flag: false },
  { dc: "G026", kode: "F7KW", flag: false },
  { dc: "G026", kode: "F843", flag: false },
  { dc: "G026", kode: "F875", flag: false },
  { dc: "G026", kode: "F8C4", flag: false },
  { dc: "G026", kode: "F8R3", flag: false },
  { dc: "G026", kode: "F909", flag: false },
];

export default function MasterTokoPBSLPage() {
  const [flagDC, setFlagDC] = useState(false);
  const [data, setData] = useState(dummyData);

  const toggleFlagDC = () => {
    setFlagDC((prev) => !prev);
    setData((prevData) => prevData.map((item) => ({ ...item, flag: !flagDC })));
  };

  const toggleFlagItem = (kode: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.kode === kode ? { ...item, flag: !item.flag } : item
      )
    );
  };

  return (
    <div className="bg-[#2c74a8] min-h-screen text-sm text-white p-4 flex flex-col items-center">
      <div className="p-2 flex flex-col items-center">
        <div className="text-white font-bold px-2">Select per Kode DC</div>
        <div className=" p-2">
          <table className="w-full border border-black text-black">
            <thead>
              <tr className="bg-gray-300">
                <th className="border border-black px-2 py-1">Kode DC</th>
                <th className="border border-black px-2 py-1">Flag PBSL</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-black text-blue-800 font-bold text-center">
                  G026
                </td>
                <td className="border border-black text-center">
                  <input
                    type="checkbox"
                    checked={flagDC}
                    onChange={toggleFlagDC}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-right">
          <button className="bg-blue-800 text-white font-bold px-3 py-1 border border-black">
            Load Data Ulang
          </button>
        </div>
      </div>

      <div className=" mt-4 p-2">
        <div className="text-white mb-1 font-bold">Select per Toko</div>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full border border-black text-black">
            <thead className="bg-gray-300">
              <tr>
                <th className="border border-black px-2 py-1">Kode DC</th>
                <th className="border border-black px-2 py-1">Kode Toko</th>
                <th className="border border-black px-2 py-1">Flag PBSL</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.kode}
                  className="bg-white hover:bg-gray-200 cursor-pointer font-semibold"
                >
                  <td className="border border-black text-center">{item.dc}</td>
                  <td className="border border-black text-center font-bold">
                    {item.kode}
                  </td>
                  <td className="border border-black text-center">
                    <input
                      type="checkbox"
                      checked={item.flag}
                      onChange={() => toggleFlagItem(item.kode)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
