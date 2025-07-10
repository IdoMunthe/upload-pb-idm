"use client";

import { useEffect, useRef, useState } from "react";

export default function UploadPBPage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"IDM" | "OMI" | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const [filePath, setFilePath] = useState("");

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFilePath(file.name);
    }
  };

  // Handle function keys (F3, F4, etc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["F3", "F4", "F5", "F8", "F9", "F12"].includes(e.code)) {
        e.preventDefault(); // 👈 stop browser default
        e.stopPropagation(); // 👈 just to be safe
      }

      if (!activeTab) return;

      switch (e.code) {
        case "F3":
          alert(
            `${activeTab}: TARIK DATA ${
              activeTab === "IDM" ? "CSV" : "DD*.DAT"
            }`
          );
          break;
        case "F4":
          alert(`${activeTab}: TARIK DATA CSV`);
          break;
        case "F5":
          alert(`${activeTab}: REFRESH DATA`);
          break;
        case "F8":
          alert(`${activeTab}: UPLOAD PB ${activeTab}`);
          break;
        case "F9":
          if (activeTab === "IDM") {
            alert("SYNCHRONIZE DATA DEPO");
          }
          break;
        case "F12":
          if (activeTab === "OMI") {
            alert("CETAKAN");
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown, true); // 🔥 useCapture = true
    return () => window.removeEventListener("keydown", handleKeyDown, true);
  }, [activeTab]);

  return (
    <div className="p-4 bg-blue-100 min-h-screen text-sm">
      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-white/20 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded shadow">
            <h2 className="text-lg mb-4 font-bold text-center">
              Pilih Upload PB IDM
            </h2>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => {
                  setActiveTab("IDM");
                  setIsModalOpen(false);
                }}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                IDM
              </button>
              <button
                onClick={() => {
                  setActiveTab("OMI");
                  setIsModalOpen(false);
                }}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                OMI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTENT */}
      {activeTab === "IDM" && (
        <div>
          <div className="font-bold w-min py-1 rounded px-2 bg-white">
            {activeTab}
          </div>
          <div className="bg-blue-300 p-2 border-4 border-white space-y-2">
            <div className="bg-white border border-black px-2 py-1 flex items-center">
              <label className="font-bold mr-2">PATH FILE PBSL*.CSV</label>
              <input
                type="text"
                value={filePath}
                readOnly
                className="flex-1 border border-black px-2 py-1"
              />
              {/* hidden input file */}
              <input
                accept=".csv"
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                className="ml-2 px-2 bg-gray-400 border border-black"
                onClick={handleClick}
              >
                🔍
              </button>
              <button className="ml-2 bg-black text-white px-4 py-1 font-bold">
                BACA PLUIDM
              </button>
              <button className="ml-2 bg-white px-4 py-1 border border-black">
                TEST PRINT
              </button>
            </div>
            <div className="bg-gray-200 h-[200px] border border-black"></div>
            <div className="bg-gray-200 h-[200px] border border-black"></div>
            <div className="bg-blue-200 font-bold text-center py-1">
              F3 - TARIK DATA CSV | F5 - REFRESH PB RO | F8 - UPLOAD PB IDM | F9
              - SYNCHRONIZE DATA DEPO
            </div>
            <div className="bg-cyan-200 font-bold text-center py-1">
              DELETE DATA STOCK_AKUMULASIPB
            </div>
          </div>
        </div>
      )}

      {activeTab === "OMI" && (
        <div>
          <div className="font-bold w-min py-1 rounded px-2 bg-white">
            {activeTab}
          </div>
          <div className="bg-teal-700 p-2 border-4 border-white space-y-2">
            <div className="bg-white border border-black px-2 py-1 flex items-center">
              <label className="font-bold mr-2">
                PARENT FOLDER DD*.DAT / .CSV
              </label>
              <input
                type="text"
                value={filePath}
                className="flex-1 border border-black px-2 py-1"
                readOnly
              />
              <input
                type="file"
                accept=".csv"
                className="hidden"
                ref={inputRef}
                onChange={handleFileChange}
              />
              <button
                className="ml-2 px-2 bg-gray-400 border border-black"
                onClick={handleClick}
              >
                🔍
              </button>
              <button className="ml-2 bg-white px-4 py-1 border border-black">
                TEST PRINT
              </button>
            </div>
            <div className="bg-white text-right text-xs italic pr-2">
              * Dobel Klik Untuk Melihat Detail Tolakan PB
            </div>
            <div className="bg-gray-200 h-[200px] border border-black"></div>
            <div className="bg-gray-200 h-[200px] border border-black"></div>
            <div className="bg-white font-bold text-center py-1 text-xs">
              F3 - TARIK DATA DD*.DAT | F4 - TARIK DATA .CSV | F5 - REFRESH DATA
              | F8 - UPLOAD PB OMI | F12 - CETAKAN
            </div>
            <div className="bg-yellow-400 font-bold text-center py-1">
              CREATE TABLE OMI_RejectPartial
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
