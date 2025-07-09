"use client";

import React, { useState } from "react";

export default function ReportBarkosPage() {
  const [startDate, setStartDate] = useState("2025-07-08");
  const [endDate, setEndDate] = useState("2025-07-08");

  return (
    <div className="min-h-screen bg-[#2b3d3f] p-6 text-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Filter Box */}
        <div className="border p-4 rounded w-fit flex gap-4 items-center justify-center bg-[#163534]">
          <label className="font-bold text-sm">TGL UPLOAD PB</label>

          <input
            type="date"
            className="text-black font-semibold bg-gray-300  p-1 rounded"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <span className="text-white font-bold text-sm">S/D</span>

          <input
            type="date"
            className="text-black font-semibold bg-gray-300 p-1 rounded"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {/* Report Viewer Box */}
        <div className="w-full bg-white text-black rounded overflow-hidden">
          {/* Toolbar */}
          <div className="flex gap-2 px-2 py-1 border-b bg-gray-100">
            <button className="p-1 hover:bg-gray-200">🖨️</button>
            <button className="p-1 hover:bg-gray-200">🔄</button>
            <button className="p-1 hover:bg-gray-200">⏮</button>
            <button className="p-1 hover:bg-gray-200">◀️</button>
            <button className="p-1 hover:bg-gray-200">▶️</button>
            <button className="p-1 hover:bg-gray-200">⏭</button>
            <button className="p-1 hover:bg-gray-200">📄</button>
            <button className="p-1 hover:bg-gray-200">📥</button>
            <button className="p-1 hover:bg-gray-200">📤</button>
            <button className="p-1 hover:bg-gray-200">🔍</button>
          </div>

          {/* Report Area */}
          <div className="h-[500px] bg-white border-t" />

          {/* Footer */}
          <div className="flex justify-between text-xs px-4 py-1 border-t bg-white">
            <span>Current Page No:</span>
            <span>Total Page No:</span>
            <span>Zoom Factor: 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
