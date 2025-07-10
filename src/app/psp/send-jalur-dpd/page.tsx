"use client";

import { useEffect, useState } from "react";

type RowData = {
  gate: string;
  noUrut: number;
  toko: string;
  kubik: number;
  tipe: string;
};

// Dummy data
const dummyIDM: RowData[] = [
  { gate: "", noUrut: 1, toko: "T8HY", kubik: 0, tipe: "" },
  { gate: "", noUrut: 2, toko: "TBA4", kubik: 0, tipe: "" },
  { gate: "", noUrut: 3, toko: "TH5V", kubik: 0, tipe: "" },
  // ...
];

const dummyOMI: RowData[] = [
  { gate: "", noUrut: 1, toko: "O5BB", kubik: 0, tipe: "" },
  { gate: "", noUrut: 2, toko: "O5B1", kubik: 0, tipe: "" },
  { gate: "", noUrut: 3, toko: "OSAW", kubik: 0, tipe: "" },
  // ...
];

export default function UploadPBIDM() {
  const [modalOpen, setModalOpen] = useState(true);
  const [selectedMode, setSelectedMode] = useState<null | "IDM" | "OMI">(null);
  const [data, setData] = useState<RowData[]>([]);
  const [refreshTime, setRefreshTime] = useState(30);

  const loadData = () => {
    // Replace with fetch call later
    setData(selectedMode === "IDM" ? dummyIDM : dummyOMI);
  };

  useEffect(() => {
    if (!selectedMode) return;

    loadData();

    const interval = setInterval(() => {
      setRefreshTime((prev) => {
        if (prev === 1) {
          loadData(); // refresh data
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedMode]);

  const handleChoice = (mode: "IDM" | "OMI") => {
    setSelectedMode(mode);
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col g-[#1a3a3a] bp-4">
      {/* === Modal === */}
      {modalOpen && (
        <div className="fixed inset-0 bg-white/60 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded text-center space-y-4">
            <p className="text-xl font-semibold">Pilih Send Jalur DPD</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleChoice("IDM")}
                className="bg-blue-500 text-white px-6 py-2 rounded"
              >
                IDM
              </button>
              <button
                onClick={() => handleChoice("OMI")}
                className="bg-green-500 text-white px-6 py-2 rounded"
              >
                OMI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* === Table + Footer === */}
      {selectedMode && (
        <div className="flex flex-col bg-[#004f5f] border-4 border-[#4a90a4] rounded-md flex-1">
          <div className="font-bold w-min py-1 rounded px-2 bg-white">
            {selectedMode}
          </div>

          {/* Table */}
          <div className="overflow-y-auto bg-white m-4 border-2 border-[#94bed1]">
            <table className="table-auto w-full text-sm border border-gray-400">
              <thead className="bg-[#d8e6e6] text-black">
                <tr>
                  <th className="border px-2 py-1 text-left">GATE</th>
                  <th className="border px-2 py-1 text-left">No Urut</th>
                  <th className="border px-2 py-1 text-left">TOKO</th>
                  <th className="border px-2 py-1 text-left">Kubik Mobil</th>
                  <th className="border px-2 py-1 text-left">Tipe Mobil</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, idx) => (
                  <tr key={idx} className="text-black">
                    <td className="border px-2 py-1">{row.gate}</td>
                    <td className="border px-2 py-1">{row.noUrut}</td>
                    <td className="border px-2 py-1">{row.toko}</td>
                    <td className="border px-2 py-1">{row.kubik}</td>
                    <td className="border px-2 py-1">{row.tipe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend + Refresh Countdown */}
          <div className="fixed bottom-0 min-w-screen flex justify-between items-center text-sm px-6 py-3 bg-[#00404f] text-white">
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-1">
                <span className="w-12 h-4 bg-[#FFFF00] inline-block" /> = READY
              </span>
              <span className="flex items-center gap-1">
                <span className="w-12 h-4 bg-green-300 inline-block" /> = PICKING
              </span>
              <span className="flex items-center gap-1">
                <span className="w-12 h-4 bg-cyan-400 inline-block" /> = SCANNING
              </span>
              <span className="flex items-center gap-1">
                <span className="w-12 h-4 bg-blue-500 inline-block" /> = PACKING
              </span>
            </div>

            <div className="font-bold mr-8">WAKTU REFRESH : {refreshTime}</div>
          </div>
        </div>
      )}
    </div>
  );
}
