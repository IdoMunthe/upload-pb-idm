"use client";

import React, { useEffect, useState } from "react";

export default function StatusProgressPBPage() {
  const [transferDate, setTransferDate] = useState("2025-07-01");

  const dummyTokoData = [
    {
      toko: "A001",
      nama: "Toko A",
      noPb: "PB001",
      tglPb: "2025-07-01",
      item: 10,
      verify: "100%",
    },
    {
      toko: "B002",
      nama: "Toko B",
      noPb: "PB002",
      tglPb: "2025-07-01",
      item: 5,
      verify: "80%",
    },
  ];

  const dummyItemData = [
    {
      cek: false,
      plu: "123456",
      desk: "Indomie Ayam Bawang",
      qty: 20,
      stok: 50,
      lokasi: "R1-A2",
    },
    {
      cek: false,
      plu: "654321",
      desk: "Kopi ABC",
      qty: 15,
      stok: 30,
      lokasi: "R2-C1",
    },
  ];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      switch (e.code) {
        case "F4":
          alert("PRINTING...");
          break;
        case "F5":
        case "Insert":
          alert("SELECT ITEM...");
          break;
        case "F6":
          alert("SORT ASCENDING (ABC)");
          break;
        case "F7":
          alert("SORT DESCENDING (ZYX)");
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen bg-[#2b3d3f] text-white p-4 space-y-4">
      {/* Header */}
      <div className="bg-[#3d6866] p-3 rounded w-fit mx-auto text-sm flex items-center gap-3">
        <label className="font-bold">Tanggal Transfer PB:</label>
        <input
          type="date"
          value={transferDate}
          onChange={(e) => setTransferDate(e.target.value)}
          className="text-black font-semibold bg-gray-300  p-1 rounded"
        />
      </div>

      {/* Table Wrapper */}
      <div className="grid grid-rows-[1fr_1fr_auto] gap-2 h-[80vh]">
        {/* Top Table */}
        <div className="bg-gray-200 text-black rounded overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-300 text-left">
              <tr>
                <th className="px-2 py-1">Toko</th>
                <th>Nama</th>
                <th>NO PB</th>
                <th>TGL PB</th>
                <th>ITEM</th>
                <th>Vfy. Cker (%)</th>
              </tr>
            </thead>
            <tbody>
              {dummyTokoData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="px-2 py-1">{row.toko}</td>
                  <td>{row.nama}</td>
                  <td>{row.noPb}</td>
                  <td>{row.tglPb}</td>
                  <td>{row.item}</td>
                  <td>{row.verify}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Table */}
        <div className="bg-gray-200 text-black rounded overflow-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-300 text-left">
              <tr>
                <th className="px-2 py-1">CEK</th>
                <th>PLU</th>
                <th>DESK</th>
                <th>QTYO</th>
                <th>STOK</th>
                <th>LOKASI</th>
              </tr>
            </thead>
            <tbody>
              {dummyItemData.map((row, i) => (
                <tr key={i} className="hover:bg-gray-100">
                  <td className="px-2 py-1">
                    <input type="checkbox" />
                  </td>
                  <td>{row.plu}</td>
                  <td>{row.desk}</td>
                  <td>{row.qty}</td>
                  <td>{row.stok}</td>
                  <td>{row.lokasi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer with Function Key Labels */}
        <div className="bg-[#163534] text-xs text-white py-2 px-4 rounded text-center">
          <span className="mx-2">F5 / INS - SELECT ITEM</span> |
          <span className="mx-2">F4 - PRINT</span> |
          <span className="mx-2">F6 - SORT ABC</span> |
          <span className="mx-2">F7 - SORT ZYX</span>
        </div>
      </div>
    </div>
  );
}
