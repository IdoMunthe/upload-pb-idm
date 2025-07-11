"use client";

import { useEffect, useState } from "react";

const dummyTujuanData = [
  { toko: "A101", keterangan: "Toko pindah lokasi" },
  { toko: "A202", keterangan: "Toko tutup permanen" },
];

const dummyRTTData = [
  {
    tokoTutup: "A101",
    noRTT: "RTT001",
    qtyRTT: 10,
    rphRTT: 500000,
    noPB: "PB12345",
    tglPB: "2025-07-11",
    qtyAlokasi: 8,
    rphAlokasi: 400000,
  },
  {
    tokoTutup: "A202",
    noRTT: "RTT002",
    qtyRTT: 5,
    rphRTT: 250000,
    noPB: "PB67890",
    tglPB: "2025-07-10",
    qtyAlokasi: 5,
    rphAlokasi: 250000,
  },
];

export default function UploadPBAlokasiRTTPage() {

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ["F3", "F5", "F8"];
      if (keys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        switch (e.key) {
          case "F3":
            alert("[F3] REQUEST PB ALOKASI pressed");
            break;
          case "F5":
            alert("[F5] REFRESH PB pressed");
            break;
          case "F8":
            alert("[F8] UPLOAD PB ALOKASI pressed");
            break;
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <div className="bg-[#2c74a8] min-h-screen text-sm text-white p-2">
      <div className="p-2 bg-[#337ca8]">
        <table className="w-full  text-black">
          <thead className="bg-gray-300">
            <tr>
              <th className="border border-black p-1 w-12">No.</th>
              <th className="border border-black p-1 w-24">Toko Tujuan</th>
              <th className="border border-black p-1">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {dummyTujuanData.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="border border-black p-1">{i + 1}</td>
                <td className="border border-black p-1">{item.toko}</td>
                <td className="border border-black p-1">{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 p-2 bg-[#337ca8]">
        <table className="w-full  text-black">
          <thead className="bg-gray-300">
            <tr>
              <th className="border border-black">No.</th>
              <th className="border border-black">Toko Tutup</th>
              <th className="border border-black">No RTT</th>
              <th className="border border-black">Qty RTT</th>
              <th className="border border-black">Rph RTT</th>
              <th className="border border-black">No PB Alokasi</th>
              <th className="border border-black">Tgl PB Alokasi</th>
              <th className="border border-black">Qty Alokasi</th>
              <th className="border border-black">Rph Alokasi</th>
            </tr>
          </thead>
          <tbody>
            {dummyRTTData.map((item, i) => (
              <tr key={i} className="bg-white">
                <td className="border border-black text-center">
                  {i + 1}
                </td>
                <td className="border border-black text-center">
                  {item.tokoTutup}
                </td>
                <td className="border border-black text-center">
                  {item.noRTT}
                </td>
                <td className="border border-black text-center">
                  {item.qtyRTT}
                </td>
                <td className="border border-black text-right pr-1">
                  {item.rphRTT}
                </td>
                <td className="border border-black text-center">{item.noPB}</td>
                <td className="border border-black text-center">
                  {item.tglPB}
                </td>
                <td className="border border-black text-center">
                  {item.qtyAlokasi}
                </td>
                <td className="border border-black text-right pr-1">
                  {item.rphAlokasi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white text-black text-xs p-1 mt-1">
        F3 - REQUEST PB ALOKASI | F5 - REFRESH PB | F8 - UPLOAD PB ALOKASI
      </div>
    </div>
  );
}
