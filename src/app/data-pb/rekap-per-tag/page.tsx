"use client";

import React, { useState } from "react";

export default function RekapPerTagPage() {
  const [rekapTag, setRekapTag] = useState("IDM");
  const [reportType, setReportType] = useState("All Toko");
  const [startDate, setStartDate] = useState("2025-07-09");
  const [endDate, setEndDate] = useState("2025-07-09");
  const [selectedToko, setSelectedToko] = useState<string[]>([]);

  const toggleToko = (kode: string) => {
    setSelectedToko((prev) =>
      prev.includes(kode) ? prev.filter((k) => k !== kode) : [...prev, kode]
    );
  };

  //TODO: needs api
  const tokoList = [
    "F00M",
    "F11A",
    "F17D",
    "F21U",
    "F2ZO",
    "F3AB",
    "F43A",
    "F4BI",
    "F52N",
    "F57X",
    "F5QC",
    "F61L",
    "F7KW",
    "F843",
    "F875",
  ];

  const toggleAll = () => {
    setSelectedToko((prev) =>
      prev.length === tokoList.length ? [] : [...tokoList]
    );
  };

  const handleProses = () => {
    alert(`Proses Laporan\nSelected: ${selectedToko.join(", ")}`);
  };

  return (
    <div className="min-h-screen flex bg-[#2b3d3f] text-white p-4 gap-2">
      {/* Left Panel */}
      <div className="w-[260px] bg-[#163534] p-4 rounded flex flex-col gap-4">
        {/* Dropdowns */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Rekap Tag:</label>
          <select
            value={rekapTag}
            onChange={(e) => setRekapTag(e.target.value)}
            className="text-black font-semibold bg-gray-300  p-1 rounded"
          >
            <option value="IDM">IDM</option>
            <option value="OMI">OMI</option>
          </select>

          <label className="text-sm font-semibold">Report:</label>
          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="text-black font-semibold bg-gray-300  p-1 rounded"
          >
            <option value="All Toko">All Toko</option>
            <option value="Per Toko">Per Toko</option>
          </select>

          <label className="text-sm font-semibold">Tgl Upload:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="text-black font-semibold bg-gray-300  p-1 rounded"
          />

          <label className="text-sm font-semibold">s/d</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="text-black font-semibold bg-gray-300  p-1 rounded"
          />
        </div>

        {/* Toko List */}
        <div className="flex justify-between items-center mt-2 text-xs">
          <span className="font-semibold">Toko</span>
          <button
            onClick={toggleAll}
            className="text-black font-semibold bg-gray-300 p-2 rounded hover:bg-blue-300"
          >
            Cek All
          </button>
        </div>

        <div className="border bg-white text-black rounded max-h-[220px] overflow-auto">
          {tokoList.map((kode) => (
            <div
              key={kode}
              className="flex justify-between px-2 py-1 border-b hover:bg-gray-100"
            >
              <span>{kode}</span>
              <input
                type="checkbox"
                checked={selectedToko.includes(kode)}
                onChange={() => toggleToko(kode)}
              />
            </div>
          ))}
        </div>

        <button
          onClick={handleProses}
          className="bg-[#dddddd] text-black font-bold py-2 mt-2 rounded hover:bg-blue-300"
        >
          PROSES LAPORAN
        </button>
      </div>

      {/* Right Report Viewer */}
      <div className="flex-1 bg-white text-black rounded overflow-hidden">
        {/* Toolbar */}
        <div className="flex gap-2 px-2 py-1 border-b bg-gray-100">
          <button className="p-1 hover:bg-gray-200">🖨️</button>
          <button className="p-1 hover:bg-gray-200">🔄</button>
          <button className="p-1 hover:bg-gray-200">⏮</button>
          <button className="p-1 hover:bg-gray-200">◀️</button>
          <button className="p-1 hover:bg-gray-200">▶️</button>
          <button className="p-1 hover:bg-gray-200">⏭</button>
          <button className="p-1 hover:bg-gray-200">📥</button>
          <button className="p-1 hover:bg-gray-200">📤</button>
        </div>

        {/* Empty Content */}
        <div className="h-[500px] bg-white border-t" />

        {/* Footer */}
        {/* <div className="flex justify-between text-xs px-4 py-1 border-t bg-white">
          <span>Current Page No:</span>
          <span>Total Page No:</span>
          <span>Zoom Factor: 100%</span>
        </div> */}
      </div>
    </div>
  );
}
