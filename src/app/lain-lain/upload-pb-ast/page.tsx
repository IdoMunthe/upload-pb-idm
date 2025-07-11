"use client";

import { useEffect, useState } from "react";

const dummyTokoData = [
  { toko: "T001", jmlItem: 5, qtyCTN: 50, qtyPCS: 250 },
  { toko: "T002", jmlItem: 3, qtyCTN: 30, qtyPCS: 120 },
];

const dummyPLUData = [
  { plu: "123456", deskripsi: "Snack Super", qtyCTN: 10, qtyPCS: 60 },
  { plu: "789012", deskripsi: "Minuman Segar", qtyCTN: 20, qtyPCS: 100 },
];

export default function UploadPBASTPage() {
  const [tanggal, setTanggal] = useState(
    new Date().toISOString().substring(0, 10)
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ["F5", "F8"];
      if (keys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        switch (e.key) {
          case "F5":
            alert("[F5] REFRESH PB AST pressed");
            break;
          case "F8":
            alert("[F8] UPLOAD + SEND PICKING HH PB AST pressed");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <div className="bg-[#2c74a8] min-h-screen text-sm text-white p-2">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-bold">TANGGAL :</span>
        <input
          type="date"
          value={tanggal}
          onChange={(e) => setTanggal(e.target.value)}
          className="bg-white text-black font-bold px-2 py-0.5 border border-black"
        />
      </div>

      <div className="p-2 overflow-auto max-h-96 w-auto  flex items-center flex-col">
        <table className=" text-black">
          <thead className="bg-gray-300">
            <tr>
              <th className="border border-black px-2 py-1">Toko</th>
              <th className="border border-black px-2 py-1">Jml Item</th>
              <th className="border border-black px-2 py-1">
                Total Qty in CTN
              </th>
              <th className="border border-black px-2 py-1">
                Total Qty in PCS
              </th>
            </tr>
          </thead>
          <tbody>
            {dummyTokoData.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="border border-black text-center">{item.toko}</td>
                <td className="border border-black text-center">
                  {item.jmlItem}
                </td>
                <td className="border border-black text-center">
                  {item.qtyCTN}
                </td>
                <td className="border border-black text-center">
                  {item.qtyPCS}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 p-2 flex flex-col overflow-auto max-h-96 items-center">
        <table className=" text-black">
          <thead className="bg-gray-300">
            <tr>
              <th className="border border-black px-4 py-1">PLU</th>
              <th className="border border-black px-4 py-1 w-72">Deskripsi</th>
              <th className="border border-black px-4 py-1">Qty in CTN</th>
              <th className="border border-black px-4 py-1">Qty in PCS</th>
            </tr>
          </thead>
          <tbody>
            {dummyPLUData.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="border border-black text-center">{item.plu}</td>
                <td className="border border-black text-left pl-2">
                  {item.deskripsi}
                </td>
                <td className="border border-black text-center">
                  {item.qtyCTN}
                </td>
                <td className="border border-black text-center">
                  {item.qtyPCS}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="fixed min-w-full bottom-0 mb-2">
        <div className="bg-white text-black  p-1 mt-1 text-center font-bold">
          F5 - REFRESH PB AST | F8 - UPLOAD + SEND PICKING HH PB AST
        </div>
        <div className="bg-cyan-300 text-white font-bold mt-2 p-1 text-center">
          STATUS
        </div>
        <div className="bg-white text-black  p-1 text-center font-bold h-8">
          
        </div>
      </div>
    </div>
  );
}
