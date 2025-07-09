"use client";

import React, { useState } from "react";

export default function ServiceLevelPage() {
  // State
  const [serviceLevel, setServiceLevel] = useState("IDM");
  const [uploadDate, setUploadDate] = useState("2025-07-06");
  const tabs = [
    "SUMMARY SL",
    "PB IDM",
    "TOLAKAN",
    "UPLOAD DPD",
    "NOL",
    "SEBAGIAN",
    "AHOT",
  ];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-[#2b3d3f] p-6 text-white">
      {/* Container */}
      <div className="bg-[#163534] border p-6 rounded-lg shadow-lg space-y-4">
        {/* Header Controls */}
        <div className="flex items-center justify-between [&>*]:px-12">
          {/* Left controls */}
          <div className="flex flex-wrap gap-4 flex-col">
            <div className="flex items-center gap-2">
              <label className="font-semibold text-sm">Service Level:</label>
              <select
                className="text-black font-semibold bg-gray-300 p-1 rounded"
                value={serviceLevel}
                onChange={(e) => setServiceLevel(e.target.value)}
              >
                <option value="IDM">IDM</option>
                <option value="OMI">OMI</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className="font-semibold text-sm">
                Tanggal Upload PB:
              </label>
              <input
                type="date"
                className="text-black font-semibold bg-gray-300  p-1 rounded"
                value={uploadDate}
                onChange={(e) => setUploadDate(e.target.value)}
              />
            </div>
          </div>

          {/* Right buttons */}
          <div className="flex gap-2 flex-col">
            <button className="px-4 py-1 bg-gray-300 text-black font-semibold rounded hover:bg-gray-400">
              PROSES LAPORAN
            </button>
            <button className="px-4 py-1 bg-gray-200 text-black font-semibold rounded hover:bg-gray-300">
              EXPORT EXCEL
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-600 flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-sm font-semibold rounded-t ${
                activeTab === tab
                  ? "bg-gray-200 text-black"
                  : "bg-[#294c4a] text-white hover:bg-[#3a635f]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Report Viewer Area */}
        <div className="bg-gray-200 h-[500px] text-black rounded-b p-4 flex flex-col">
          {/* Toolbar placeholder */}
          {/* <div className="flex gap-2 mb-2">
            <button className="p-1 bg-white rounded shadow-sm">⏮</button>
            <button className="p-1 bg-white rounded shadow-sm">◀️</button>
            <button className="p-1 bg-white rounded shadow-sm">▶️</button>
            <button className="p-1 bg-white rounded shadow-sm">⏭</button>
            <button className="p-1 bg-white rounded shadow-sm">🔍+</button>
            <button className="p-1 bg-white rounded shadow-sm">🔍-</button>
          </div> */}

          {/* Empty content */}
          <div className="flex-grow border border-gray-300 rounded bg-white" />

          {/* Footer status bar */}
          <div className="mt-2 flex justify-between text-xs">
            <span>Current Page No: —</span>
            <span>Total Page No: —</span>
            <span>Zoom Factor: 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
