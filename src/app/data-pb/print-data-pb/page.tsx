"use client";
import React, { useEffect, useState } from "react";

export default function PrintDataPBForm() {
  const [kodeToko, setKodeToko] = useState("");
  const [tglTransfer, setTglTransfer] = useState("");

  //TODO: needs api
  const handleClick = (label: string) => {
    alert(`Clicked: ${label}`);
  };

  useEffect(() => {
    console.log(kodeToko);
  }, [kodeToko]);

  return (
    <div className="min-h-screen bg-[#305f64] flex items-center justify-center p-4">
      <div className="bg-[#163534] text-white p-6 rounded-lg shadow-lg w-[400px] space-y-4">
        <h1 className="text-center text-lg font-bold mb-2">
          Cetak Bukti Transfer PB IDM
        </h1>

        <div className="bg-[#dddddd] p-4 rounded space-y-4">
          <div className="flex justify-center gap-4 text-black items-center">
            <label className="text-sm font-semibold">KODE TOKO:</label>
            <input
              type="text"
              value={kodeToko}
              onChange={(e) => setKodeToko(e.target.value.toUpperCase())}
              className="text-black p-1 rounded w-[120px] border font-bold"
            />
          </div>

          <div className="flex justify-center text-black items-center">
            <label className="text-sm font-semibold">TGL TRANSFER:</label>
            <input
              type="date"
              value={tglTransfer}
              onChange={(e) => setTglTransfer(e.target.value)}
              className="text-black p-1 rounded w-[140px]"
            />
          </div>
        </div>

        <div className="space-y-2">
          {[
            "Detail Bukti Transfer Order",
            "Rekap Bukti Transfer Order",
            "Listing Item Order Kartonan Non DPD",
            "Listing Item Order Yang Ditolak",
            "Lokasi/Rak/Jalur Item Tdk. Ditemukan",
            "Listing Item Jalur Kertas",
          ].map((label) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className="w-full bg-[#dddddd] text-black font-semibold py-2 rounded hover:bg-blue-300"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
