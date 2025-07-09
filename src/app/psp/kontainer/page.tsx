"use client";
import React, { useState } from "react";

type Kontainer = {
  jenis: string;
  panjang: number;
  lebar: number;
  tinggi: number;
};

const dummyKontainer = {
  IDM: [
    { jenis: "BRONJONG", panjang: 74.15, lebar: 56.6, tinggi: 140.5 },
    { jenis: "CONTAINER", panjang: 60, lebar: 39.5, tinggi: 31.2 },
  ],
  OMI: [
    { jenis: "BRONJONG", panjang: 120, lebar: 100, tinggi: 125 },
    { jenis: "CONTAINER", panjang: 58, lebar: 39, tinggi: 37 },
  ],
};

export default function KontainerPage() {
  const [currentTab, setCurrentTab] = useState<"IDM" | "OMI">("IDM");
  const [form, setForm] = useState<Kontainer>({
    jenis: "",
    panjang: 0,
    lebar: 0,
    tinggi: 0,
  });

  const kontainerList = dummyKontainer[currentTab];
  const volume = form.panjang * form.lebar * form.tinggi;

  const handleChange = (field: keyof Kontainer, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "jenis" ? value : Number(value),
    }));
  };

  const handleInsert = () => {
    alert(`Inserting: ${JSON.stringify({ ...form, volume })}`);
  };

  return (
    <div className="p-4 min-h-screen bg-[#59a7df] text-white">
      {/* Toggle buttons */}
      <div className="flex gap-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "IDM" ? "bg-white text-black" : "bg-gray-700"
          }`}
          onClick={() => setCurrentTab("IDM")}
        >
          IDM
        </button>
        <button
          className={`px-4 py-2 rounded ${
            currentTab === "OMI" ? "bg-white text-black" : "bg-gray-700"
          }`}
          onClick={() => setCurrentTab("OMI")}
        >
          OMI
        </button>
      </div>

      {/* Input Form */}
      <div className="bg-[#252f4d] p-4 rounded w-[400px] mb-4 space-y-2">
        <div className="flex justify-between">
          <label>Jenis</label>
          <input
            type="text"
            value={form.jenis}
            onChange={(e) => handleChange("jenis", e.target.value)}
            className="text-black font-semibold bg-gray-300  w-[140px] px-1 rounded"
          />
        </div>
        {["panjang", "lebar", "tinggi"].map((key) => (
          <div key={key} className="flex justify-between">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={form[key as keyof Kontainer]}
                onChange={(e) =>
                  handleChange(key as keyof Kontainer, e.target.value)
                }
                className="text-black font-semibold bg-gray-300 w-[100px] px-1 rounded"
              />
              <span className="text-black px-1 rounded font-semibold bg-gray-300">
                CM
              </span>
            </div>
          </div>
        ))}
        <div className="flex justify-between">
          <label>Volume</label>
          <div className="flex gap-2">
            <input
              value={volume.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              readOnly
              className="text-black font-semibold bg-gray-300 w-[100px] px-1 rounded"
            />
            <span className="text-black px-0.25 rounded font-semibold bg-gray-300">
              CM³
            </span>
          </div>
        </div>
        <button
          onClick={handleInsert}
          className="mt-2 bg-gray-300 text-black w-full rounded py-1 font-bold"
        >
          Save
        </button>
      </div>

      {/* Table */}
      <table className="w-full bg-white text-black rounded border border-gray-400 border-collapse">
        <thead className="bg-gray-300 border border-gray-400">
          <tr>
            <th className="p-2 text-left border border-gray-400">Jenis</th>
            <th className="p-2 text-left border border-gray-400">Panjang</th>
            <th className="p-2 text-left border border-gray-400">Lebar</th>
            <th className="p-2 text-left border border-gray-400">Tinggi</th>
            <th className="p-2 text-left border border-gray-400">Volume</th>
          </tr>
        </thead>
        <tbody>
          {kontainerList.map((k) => (
            <tr key={k.jenis} className="hover:bg-blue-100">
              <td className="p-2 border border-gray-400">{k.jenis}</td>
              <td className="p-2 border border-gray-400">{k.panjang}</td>
              <td className="p-2 border border-gray-400">{k.lebar}</td>
              <td className="p-2 border border-gray-400">{k.tinggi}</td>
              <td className="p-2 border border-gray-400">
                {(k.panjang * k.lebar * k.tinggi).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
