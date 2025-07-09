"use client";
import React, { useEffect, useState } from "react";

type Gate = {
  kodeGate: string;
  namaGate: string;
  maxToko: number;
};

const dummyData = {
  IDM: [
    { kodeGate: "GT01", namaGate: "GATE 1", maxToko: 1 },
    { kodeGate: "GT012", namaGate: "GATE 12", maxToko: 20 },
  ],
  OMI: [
    { kodeGate: "GT01", namaGate: "GATE 01", maxToko: 10 },
    { kodeGate: "GT02", namaGate: "GATE 02", maxToko: 10 },
    { kodeGate: "GT03", namaGate: "GATE 03", maxToko: 10 },
    { kodeGate: "GT04", namaGate: "GATE 04", maxToko: 10 },
    { kodeGate: "GT05", namaGate: "GATE 05", maxToko: 10 },
    { kodeGate: "GT06", namaGate: "GATE 06", maxToko: 10 },
    { kodeGate: "GT07", namaGate: "GATE 07", maxToko: 10 },
    { kodeGate: "GT08", namaGate: "GATE 08", maxToko: 10 },
    { kodeGate: "GT09", namaGate: "GATE 09", maxToko: 10 },
    { kodeGate: "GT10", namaGate: "GATE 10", maxToko: 10 },
  ],
};

export default function GatePage() {
  const [currentTab, setCurrentTab] = useState<"IDM" | "OMI">("IDM");
  const [form, setForm] = useState<Gate>({
    kodeGate: "",
    namaGate: "",
    maxToko: 0,
  });
  const [selectedKodeGate, setSelectedKodeGate] = useState<string | null>(null);


  const gateList = dummyData[currentTab];

  const handleChange = (field: keyof Gate, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "maxToko" ? Number(value) : value,
    }));
  };

  const handleInsert = () => {
    alert(`Inserting: ${JSON.stringify(form)}`);
  };

  useEffect(() => {
      const first = dummyData[currentTab][0];
      if (first) {
        setForm({ ...first });
        setSelectedKodeGate(first.kodeGate);
      }
    }, [currentTab]);

  return (
    <div className="p-4 min-h-screen bg-[#59a7df] text-white">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-4">
        {["IDM", "OMI"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              currentTab === tab ? "bg-white text-black" : "bg-gray-700"
            }`}
            onClick={() => setCurrentTab(tab as "IDM" | "OMI")}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="bg-[#252f4d] p-4 rounded w-[400px] mb-4 space-y-2">
        <div className="flex justify-between">
          <label>Kode GATE</label>
          <input
            type="text"
            value={form.kodeGate}
            onChange={(e) => handleChange("kodeGate", e.target.value)}
            className="text-black font-semibold bg-gray-300 w-[160px] px-1 rounded"
          />
        </div>
        <div className="flex justify-between">
          <label>Nama GATE</label>
          <input
            type="text"
            value={form.namaGate}
            onChange={(e) => handleChange("namaGate", e.target.value)}
            className="text-black font-semibold bg-gray-300 w-[160px] px-1 rounded"
          />
        </div>
        <div className="flex justify-between">
          <label>MAX PAKET</label>
          <input
            type="number"
            value={form.maxToko}
            onChange={(e) => handleChange("maxToko", e.target.value)}
            className="text-black font-semibold bg-gray-300 w-[160px] px-1 rounded"
          />
        </div>
        <button
          onClick={handleInsert}
          className="mt-2 bg-gray-300 text-black w-full rounded py-1 font-bold"
        >
          Insert
        </button>
      </div>

      {/* Table */}
      <table className="w-full bg-white text-black rounded border border-gray-400 border-collapse">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 border border-gray-400 text-left">KODE GATE</th>
            <th className="p-2 border border-gray-400 text-left">NAMA GATE</th>
            <th className="p-2 border border-gray-400 text-left">MAX TOKO</th>
          </tr>
        </thead>
        <tbody>
          {gateList.map((gate) => {
            const isSelected = selectedKodeGate === gate.kodeGate;
            return (
              <tr
                key={gate.kodeGate}
                className={`cursor-pointer ${
                  isSelected ? "bg-blue-200" : "hover:bg-blue-100"
                }`}
                onClick={() => {
                  setForm({ ...gate });
                  setSelectedKodeGate(gate.kodeGate);
                }}
              >
                <td className="p-2 border border-gray-400">{gate.kodeGate}</td>
                <td className="p-2 border border-gray-400">{gate.namaGate}</td>
                <td className="p-2 border border-gray-400">{gate.maxToko}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
