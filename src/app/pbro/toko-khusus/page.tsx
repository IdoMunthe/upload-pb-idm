"use client";

import { useState } from "react";

type Toko = {
  kode: string;
  nama: string;
};

const dummyToko = [
  { kode: "F17D", nama: "FR TAMAN ROYAL 1" },
  { kode: "F3AB", nama: "BANJAR WIJAYA 2" },
  { kode: "F4BI", nama: "KI HAJAR DEWANTORO 2" },
  { kode: "F5QC", nama: "CRM CIPONDOH MAKMUR" },
  { kode: "F7KW", nama: "IDF MODERNLAND 3" },
  { kode: "F843", nama: "FR GONDGRONG (F843)" },
  { kode: "F875", nama: "FR MODERNLAND 2" },
];

export default function TokoKhususPage() {
  const [leftList, setLeftList] = useState<Toko[]>(dummyToko);
  const [rightList, setRightList] = useState<Toko[]>([]);

  const [selectedLeft, setSelectedLeft] = useState<null | string>(null);
  const [selectedRight, setSelectedRight] = useState<null | string>(null);

  const handleAdd = () => {
    if (!selectedLeft) return;
    const selected = leftList.find((t) => t.kode === selectedLeft);
    if (!selected) return;
    setRightList((prev) => [...prev, selected]);
    setLeftList((prev) => prev.filter((t) => t.kode !== selected.kode));
    setSelectedLeft(null);
  };

  const handleRemove = () => {
    if (!selectedRight) return;
    const selected = rightList.find((t) => t.kode === selectedRight);
    if (!selected) return;
    setLeftList((prev) => [...prev, selected]);
    setRightList((prev) => prev.filter((t) => t.kode !== selected.kode));
    setSelectedRight(null);
  };

  return (
    <div className="p-4 bg-[#2c74a8] text-white text-sm min-h-screen">
      <div className="mb-2">
        <strong>Gudang IGR :</strong>{" "}
        <span className="bg-white text-black px-2 py-0.5 font-bold border border-black inline-block min-w-[60px] text-center">
          G144
        </span>
      </div>

      <div className="flex gap-5 h-auto">
        {/* LEFT TABLE */}
        <div className="flex flex-col flex-1">
          <strong className="mb-1">List Toko Indomaret :</strong>
          <div className="flex-1 overflow-y-auto bg-white text-black border border-black">
            <table className="w-full border-collapse">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border border-black w-10">no</th>
                  <th className="border border-black w-20">kode</th>
                  <th className="border border-black">nama</th>
                </tr>
              </thead>
              <tbody>
                {leftList.map((item, i) => (
                  <tr
                    key={item.kode}
                    onClick={() => setSelectedLeft(item.kode)}
                    className={`cursor-pointer h-7 ${
                      item.kode === selectedLeft
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <td className="border border-black text-center">{i + 1}</td>
                    <td className="border border-black pl-2">{item.kode}</td>
                    <td className="border border-black pl-2">{item.nama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col justify-center gap-12">
          <div className="flex flex-col gap-1 items-center">
            <p>ADD</p>
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-4 py-1 border border-black font-bold"
            >
              &gt;&gt;
            </button>
          </div>

          <div className="flex flex-col gap-1 items-center">
            <p>REMOVE</p>
            <button
              onClick={handleRemove}
              className="bg-red-600 text-white px-4 py-1 border border-black font-bold"
            >
              &lt;&lt;
            </button>
          </div>
        </div>

        {/* RIGHT TABLE */}
        <div className="flex flex-col flex-1">
          <strong className="mb-1">List Toko Khusus Indomaret :</strong>
          <div className="flex-1 overflow-y-auto bg-white text-black border border-black">
            <table className="w-full border-collapse">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border border-black w-10">no</th>
                  <th className="border border-black w-20">kode</th>
                  <th className="border border-black">nama</th>
                </tr>
              </thead>
              <tbody>
                {rightList.map((item, i) => (
                  <tr
                    key={item.kode}
                    onClick={() => setSelectedRight(item.kode)}
                    className={`cursor-pointer h-7 ${
                      item.kode === selectedRight
                        ? "bg-blue-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    <td className="border border-black text-center">{i + 1}</td>
                    <td className="border border-black pl-2">{item.kode}</td>
                    <td className="border border-black pl-2">{item.nama}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
