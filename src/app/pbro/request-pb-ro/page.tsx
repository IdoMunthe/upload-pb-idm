"use client";

import { useEffect, useState } from "react";

export default function UploadPBPage() {
  const today = new Date().toISOString().split("T")[0];
  const [tanggal, setTanggal] = useState(today);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const keys = ["F3", "F5", "F6", "F7", "F8"];
      if (keys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
        switch (e.key) {
          case "F3":
            alert("[F3] REQUEST PB RO pressed");
            break;
          case "F5":
            alert("[F5] REFRESH PB pressed");
            break;
          case "F6":
            alert("[F6] LOAD ULANG IDM TERTENTU pressed");
            break;
          case "F7":
            alert("[F7] NOTIFIKASI pressed");
            break;
          case "F8":
            alert("[F8] PB DARURAT 1 pressed");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, []);

  return (
    <div className="bg-[#2c74a8] min-h-screen text-sm text-white p-2">
      <div className="border border-black p-2 bg-[#337ca8] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold">TANGGAL :</span>
          <input
            type="date"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            className="bg-white text-black font-bold px-2 py-0.5 border border-black"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="bg-purple-700 text-white font-bold px-4 py-1 border border-black">
            COBA CUKS
          </button>
          <button className="bg-green-600 text-white font-bold px-4 py-1 border border-black">
            REFRESH
          </button>
          <button className="bg-red-600 text-white font-bold px-4 py-1 border border-black">
            PB DARURAT
          </button>
        </div>
      </div>

      <p className="bg-gray-600 text-white text-center py-20 italic text-lg font-bold">
        *TIDAK DITEMUKAN JADWAL KIRIM IDM HARI INI*
      </p>

      <div className="bg-white text-black text-xs p-1 mt-1">
        F3 - REQUEST PB RO | F5 - REFRESH PB | F6 - LOAD ULANG IDM TERTENTU | F7
        - NOTIFIKASI | F8 - PB DARURAT 1
      </div>
    </div>
  );
}
