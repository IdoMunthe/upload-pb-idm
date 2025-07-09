"use client";
import React, { useState } from "react";

export default function HistoryProsesPB() {
  const [startDate, setStartDate] = useState("2025-07-08");
  const [endDate, setEndDate] = useState("2025-07-08");

  const columns = [
    { key: "kodeToko", label: "Toko" },
    { key: "namaToko", label: "Nama Toko" },
    { key: "tglPB", label: "Tgl PB" },
    { key: "noPB", label: "No. PB" },
    { key: "item", label: "Item" },
    { key: "tolak", label: "Tolak" },
    { key: "status", label: "Status" },
    { key: "keterangan", label: "Keterangan" },
  ];

  //TODO: needs api
  const data = [
    {
      kodeToko: "0001",
      namaToko: "Toko Mawar",
      tglPB: "2025-07-08",
      noPB: "PB001",
      item: 12,
      tolak: 0,
      status: "Selesai",
      keterangan: "-",
    },
    {
      kodeToko: "0002",
      namaToko: "Toko Melati",
      tglPB: "2025-07-08",
      noPB: "PB002",
      item: 8,
      tolak: 1,
      status: "Pending",
      keterangan: "Kurang stok",
    },
    {
      kodeToko: "0003",
      namaToko: "Toko Anggrek",
      tglPB: "2025-07-08",
      noPB: "PB003",
      item: 15,
      tolak: 0,
      status: "Selesai",
      keterangan: "-",
    },
    {
      kodeToko: "0004",
      namaToko: "Toko Sakura",
      tglPB: "2025-07-08",
      noPB: "PB004",
      item: 9,
      tolak: 2,
      status: "Ditolak",
      keterangan: "Jalur tidak ditemukan",
    },
    {
      kodeToko: "0005",
      namaToko: "Toko Teratai",
      tglPB: "2025-07-08",
      noPB: "PB005",
      item: 5,
      tolak: 0,
      status: "Selesai",
      keterangan: "-",
    },
  ];

  return (
    <div className="min-h-screen bg-[#2b3d3f] flex flex-col items-center p-6 text-white">
      <div className="bg-[#163534] border p-6 rounded w-full max-w-4xl mb-4">
        <div className="bg-[#294c4a] p-4 rounded flex flex-wrap gap-4 items-center justify-center">
          <label className="text-sm font-bold">Tgl Transfer</label>

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-black border bg-white p-1 rounded w-[140px]"
          />

          <span className="font-bold">S/D</span>

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-black border bg-white p-1 rounded w-[140px]"
          />
        </div>
      </div>

      <div className="w-full max-w-6xl overflow-auto">
        <table className="w-full text-sm bg-gray-200 text-black border border-gray-400">
          <thead className="bg-white">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="border px-2 py-1 text-left">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx}>
                {columns.map((col) => (
                  <td key={col.key} className="border px-2 py-1">
                    {row[col.key as keyof typeof row]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
