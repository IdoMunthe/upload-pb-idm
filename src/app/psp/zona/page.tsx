"use client";

import React, { useEffect, useState } from "react";

interface Zone {
  kodeZona: string;
  namaZona: string;
  kodeRak: string;
  printerPd41: string;
  thermal?: string;
  jenisContainer: string;
  allowance: number;
}

const dummyData: Record<"IDM" | "OMI", Zone[]> = {
  IDM: [
    {
      kodeZona: "ZONA1",
      namaZona: "ZONA 1 JL 1 FRAC",
      kodeRak: "D01",
      printerPd41: "INTERMEC-Z162 (203 DPI)",
      thermal: "PRINTER THERMAL",
      jenisContainer: "CONTAINER",
      allowance: 80,
    },
    {
      kodeZona: "ZONA1",
      namaZona: "ZONA 1 JL 1 FRAC",
      kodeRak: "D02",
      printerPd41: "INTERMEC-Z162 (203 DPI)",
      thermal: "PRINTER THERMAL",
      jenisContainer: "CONTAINER",
      allowance: 80,
    },
  ],
  OMI: [
    {
      kodeZona: "ZONA2",
      namaZona: "ZONA 2 JL 1 FRAC",
      kodeRak: "D07",
      printerPd41: "INTERMEC-Z263 (203 DPI)",
      jenisContainer: "CONTAINER",
      allowance: 80,
    },
    {
      kodeZona: "ZONA2",
      namaZona: "ZONA 2 JL 1 FRAC",
      kodeRak: "D08",
      printerPd41: "INTERMEC-Z263 (203 DPI)",
      jenisContainer: "CONTAINER",
      allowance: 80,
    },
  ],
};

export default function ZonePage() {
  const [currentTab, setCurrentTab] = useState<"IDM" | "OMI">("IDM");
  const [form, setForm] = useState<Zone>({
    kodeZona: "",
    namaZona: "",
    kodeRak: "",
    printerPd41: "",
    thermal: "",
    jenisContainer: "",
    allowance: 0,
  });
  const [selectedKodeZona, setSelectedKodeZona] = useState<string | null>(null);
  const [selectedKodeRak, setSelectedKodeRak] = useState<string | null>(null);

  const zoneList = dummyData[currentTab];

  const handleChange = (field: keyof Zone, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "allowance" ? Number(value) : value,
    }));
  };

  useEffect(() => {
    const first = dummyData[currentTab][0];
    if (first) {
      setForm({ ...first });
      setSelectedKodeRak(first.kodeRak); // Ganti dari kodeZona ke kodeRak
    }
  }, [currentTab]);

  return (
    <div className="p-4 min-h-screen bg-[#59a7df] text-white">
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

      <div className="bg-[#252f4d] p-4 rounded w-[550px] mb-4 space-y-2">
        <div className="space-y-2">
          <div className="flex justify-start gap-10">
            <label>Kode ZONA</label>
            <input
              type="text"
              value={form.kodeZona}
              onChange={(e) => handleChange("kodeZona", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[100px] px-1 rounded"
            />
          </div>
          <div className="flex justify-start gap-9">
            <label>Nama ZONA</label>
            <input
              type="text"
              value={form.namaZona}
              onChange={(e) => handleChange("namaZona", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[200px] px-1 rounded"
            />
          </div>
          {/* KODE RAK */}
          <div className="flex justify-start gap-13">
            <label>Kode RAK</label>
            <select
              value={form.kodeRak}
              onChange={(e) => handleChange("kodeRak", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[100px] px-1 rounded"
            >
              {Array.from({ length: 41 }, (_, i) => {
                const rak = `D${(i + 1).toString().padStart(2, "0")}`;
                return (
                  <option key={rak} value={rak}>
                    {rak}
                  </option>
                );
              })}
            </select>
          </div>
          {/* PRINTER PD41 */}
          <div className="flex justify-start gap-3">
            <label>PRINTER PD41</label>
            <select
              value={form.printerPd41}
              onChange={(e) => handleChange("printerPd41", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[200px] px-1 rounded"
            >
              {[
                "OneNote",
                "PDF24 Fax",
                "PDF24",
                "Microsoft XPS Document Writer",
                "Microsoft Print to PDF",
                "Fax",
              ].map((printer) => (
                <option key={printer} value={printer}>
                  {printer}
                </option>
              ))}
            </select>
          </div>
          {currentTab === "IDM" && (
            <div className="flex justify-start gap-12">
              <label>THERMAL</label>
              <input
                type="text"
                value={form.thermal}
                onChange={(e) => handleChange("thermal", e.target.value)}
                className="text-black font-semibold bg-gray-300 w-[200px] px-1 rounded"
              />
            </div>
          )}
          {/* JENIS CONTAINER */}
          <div className="flex justify-start gap-3">
            <label>Jenis Container</label>
            <select
              value={form.jenisContainer}
              onChange={(e) => handleChange("jenisContainer", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[120px] px-1 rounded"
            >
              <option value="CONTAINER">CONTAINER</option>
              <option value="BRONJONG">BRONJONG</option>
            </select>
          </div>
          <div className="flex justify-start gap-13">
            <label>Allowance</label>
            <div className="flex gap-1">
              <input
                type="number"
                value={form.allowance}
                onChange={(e) => handleChange("allowance", e.target.value)}
                className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
              />
              <span className="text-black font-semibold bg-gray-300 px-1 rounded">
                %
              </span>
            </div>
          </div>
        </div>
        <button className="mt-2 bg-gray-300 text-black w-full rounded py-1 font-bold">
          Insert
        </button>
      </div>

      <table className="w-full bg-white text-black rounded border border-gray-400 border-collapse">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 border border-gray-400">Kode Zona</th>
            <th className="p-2 border border-gray-400">Nama Zona</th>
            <th className="p-2 border border-gray-400">Kode Rak</th>
            <th className="p-2 border border-gray-400">Printer PD41</th>
            {currentTab === "IDM" && (
              <th className="p-2 border border-gray-400">Thermal</th>
            )}
            <th className="p-2 border border-gray-400">Jenis Container</th>
            <th className="p-2 border border-gray-400">Allowance</th>
          </tr>
        </thead>
        <tbody>
          {zoneList.map((zone) => {
            const isSelected = selectedKodeRak === zone.kodeRak;
            return (
              <tr
                key={zone.kodeRak}
                className={`cursor-pointer ${
                  isSelected ? "bg-blue-200" : "hover:bg-blue-100"
                }`}
                onClick={() => {
                  setForm({ ...zone });
                  setSelectedKodeRak(zone.kodeRak);
                }}
              >
                <td className="p-2 border border-gray-400">{zone.kodeZona}</td>
                <td className="p-2 border border-gray-400">{zone.namaZona}</td>
                <td className="p-2 border border-gray-400">{zone.kodeRak}</td>
                <td className="p-2 border border-gray-400">
                  {zone.printerPd41}
                </td>
                {currentTab === "IDM" && (
                  <td className="p-2 border border-gray-400">{zone.thermal}</td>
                )}
                <td className="p-2 border border-gray-400">
                  {zone.jenisContainer}
                </td>
                <td className="p-2 border border-gray-400">{zone.allowance}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
