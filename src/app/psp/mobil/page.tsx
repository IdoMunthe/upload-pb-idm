"use client";
import React, { useState } from "react";

type Mobil = {
  tipe: string;
  panjang: number;
  lebar: number;
  tinggi: number;
  allowance: number;
};

// TODO: needs api
const dummyData = {
  IDM: [
    { tipe: "DOUBLE", panjang: 415, lebar: 190, tinggi: 170, allowance: 85 },
    { tipe: "ENGKLE", panjang: 280, lebar: 167, tinggi: 170, allowance: 95 },
    { tipe: "FUSO", panjang: 800, lebar: 400, tinggi: 400, allowance: 85 },
    { tipe: "L300", panjang: 280, lebar: 167, tinggi: 170, allowance: 95 },
  ],
  OMI: [
    { tipe: "DOUBLE", panjang: 417, lebar: 187, tinggi: 166, allowance: 90 },
    { tipe: "ENGKLE", panjang: 325, lebar: 170, tinggi: 177, allowance: 90 },
    { tipe: "FUSO", panjang: 1000, lebar: 400, tinggi: 400, allowance: 90 },
  ],
};

export default function MobilSettings() {
  const [currentTab, setCurrentTab] = useState<"IDM" | "OMI">("IDM");
  const [form, setForm] = useState<Mobil>({
    tipe: "",
    panjang: 0,
    lebar: 0,
    tinggi: 0,
    allowance: 0,
  });

  const mobilList = dummyData[currentTab];

  const handleChange = (field: keyof Mobil, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: field === "tipe" ? value : Number(value),
    }));
  };

  const handleInsert = () => {
    const volume = form.panjang * form.lebar * form.tinggi;
    alert(`Inserting: ${JSON.stringify({ ...form, volume })}`);
  };

  const volume = form.panjang * form.lebar * form.tinggi;

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
          <label>Tipe Mobil</label>
          <input
            type="text"
            value={form.tipe}
            onChange={(e) => handleChange("tipe", e.target.value)}
            className="text-black font-semibold bg-gray-300  w-[140px] px-1 rounded"
          />
        </div>
        {["panjang", "lebar", "tinggi"].map((key) => (
          <div key={key} className="flex justify-between">
            <label>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={form[key as keyof Mobil]}
                onChange={(e) =>
                  handleChange(key as keyof Mobil, e.target.value)
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
              value={volume.toLocaleString()}
              readOnly
              className="text-black font-semibold bg-gray-300 w-[100px] px-1 rounded"
            />
            <span className="text-black px-0.25 rounded font-semibold bg-gray-300">
              CM³
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <label>Allowance</label>
          <div className="flex gap-2">
            <input
              type="number"
              value={form.allowance}
              onChange={(e) => handleChange("allowance", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[100px] px-1 rounded"
            />
            <span className="text-black px-2 rounded font-semibold bg-gray-300">
              %
            </span>
          </div>
        </div>
        <button
          onClick={handleInsert}
          className="mt-2 bg-gray-300 text-black w-full rounded py-1 font-bold"
        >
          Insert
        </button>
      </div>

      {/* Table */}
      <table className="w-full bg-white text-black rounded">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 text-left">Tipe Mobil</th>
            <th className="p-2 text-left">Panjang</th>
            <th className="p-2 text-left">Lebar</th>
            <th className="p-2 text-left">Tinggi</th>
            <th className="p-2 text-left">Volume</th>
            <th className="p-2 text-left">Allowance</th>
          </tr>
        </thead>
        <tbody>
          {mobilList.map((mobil) => (
            <tr key={mobil.tipe} className="hover:bg-blue-100">
              <td className="p-2">{mobil.tipe}</td>
              <td className="p-2">{mobil.panjang}</td>
              <td className="p-2">{mobil.lebar}</td>
              <td className="p-2">{mobil.tinggi}</td>
              <td className="p-2">
                {(mobil.panjang * mobil.lebar * mobil.tinggi).toLocaleString()}
              </td>
              <td className="p-2">{mobil.allowance.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
