"use client";

import React, { useEffect, useState } from "react";

type Toko = {
  kodeCluster: string;
  group: number;
  gr1: number;
  gr2: number;
  gr3: number;
  kodeToko: string;
  namaToko: string;
  jarakKirim: number;
  jarakAsli: number;
  tipeMobil: string;
  paketIpp: string;
};

// todo
// * find out how to use data fetched from api to replace this dummy data here https://chatgpt.com/share/686e1de6-0f6c-8000-91c3-ecbe9afc94ce
// * use this keyword to search for the chat 'the dummydata will be replaced'
const dummyData: Record<"IDM" | "OMI", Toko[]> = {
  IDM: [
    {
      kodeCluster: "A",
      group: 1,
      gr1: 1,
      gr2: 1,
      gr3: 1,
      kodeToko: "FN8C",
      namaToko: "IDF KISAMAUN 2",
      jarakKirim: 6,
      jarakAsli: 6,
      tipeMobil: "L300",
      paketIpp: "DRY",
    },
    {
      kodeCluster: "A",
      group: 1,
      gr1: 1,
      gr2: 1,
      gr3: 1,
      kodeToko: "T32E",
      namaToko: "Toko T32E",
      jarakKirim: 6,
      jarakAsli: 6,
      tipeMobil: "L300",
      paketIpp: "DRY",
    },
  ],
  OMI: [
    {
      kodeCluster: "A",
      group: 10,
      gr1: 10,
      gr2: 10,
      gr3: 10,
      kodeToko: "O5BR",
      namaToko: "BJ MART JAWILAN",
      jarakKirim: 1,
      jarakAsli: 23,
      tipeMobil: "FUSO",
      paketIpp: "DRY",
    },
    {
      kodeCluster: "A",
      group: 11,
      gr1: 11,
      gr2: 11,
      gr3: 11,
      kodeToko: "O5BX",
      namaToko: "Toko O5BX",
      jarakKirim: 1,
      jarakAsli: 25,
      tipeMobil: "FUSO",
      paketIpp: "DRY",
    },
  ],
};

export default function TokoGateUI() {
  const [currentTab, setCurrentTab] = useState<"IDM" | "OMI">("IDM");
  const [form, setForm] = useState<Toko>({
    kodeCluster: "",
    group: 0,
    gr1: 0,
    gr2: 0,
    gr3: 0,
    kodeToko: "",
    namaToko: "",
    jarakKirim: 0,
    jarakAsli: 0,
    tipeMobil: "",
    paketIpp: "",
  });
  const [selectedKode, setSelectedKode] = useState<string | null>(null);

  const tokoList = dummyData[currentTab];

  useEffect(() => {
    const first = tokoList[0];
    if (first) {
      setForm({ ...first });
      setSelectedKode(first.kodeToko);
    }
  }, [currentTab]);

  const handleChange = (field: keyof Toko, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: [
        "kodeCluster",
        "kodeToko",
        "namaToko",
        "tipeMobil",
        "paketIpp",
      ].includes(field)
        ? value
        : Number(value),
    }));
  };

  return (
    <div className="p-4 min-h-screen bg-[#59a7df] text-white">
      <div className="flex gap-4 mb-4">
        {(["IDM", "OMI"] as const).map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded ${
              currentTab === tab ? "bg-white text-black" : "bg-gray-700"
            }`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-[#252f4d] p-4 rounded w-[550px] mb-4 space-y-2">
        <div className="space-y-2">
          <div className="flex justify-start gap-1">
            <label>Kode Cluster</label>
            <input
              type="text"
              value={form.kodeCluster}
              onChange={(e) => handleChange("kodeCluster", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
            />
          </div>

          <div className="flex justify-between items-end gap-2">
            <div className="flex gap-13">
              <label>Group</label>
              <input
                type="number"
                value={form.group}
                onChange={(e) => handleChange("group", e.target.value)}
                className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex gap-1">
                <label>GR 1</label>
                <input
                  type="number"
                  value={form.gr1}
                  onChange={(e) => handleChange("gr1", e.target.value)}
                  className="text-black font-semibold bg-gray-300 w-[40px] px-1 rounded"
                />
              </div>
              <div className="flex gap-1">
                <label>GR 2</label>
                <input
                  type="number"
                  value={form.gr2}
                  onChange={(e) => handleChange("gr2", e.target.value)}
                  className="text-black font-semibold bg-gray-300 w-[40px] px-1 rounded"
                />
              </div>
              <div className="flex gap-1">
                <label>GR 3</label>
                <input
                  type="number"
                  value={form.gr3}
                  onChange={(e) => handleChange("gr3", e.target.value)}
                  className="text-black font-semibold bg-gray-300 w-[40px] px-1 rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-5">
            <label>Kode Toko</label>
            <input
              type="text"
              value={form.kodeToko}
              onChange={(e) => handleChange("kodeToko", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
            />
          </div>

          <div className="flex justify-start gap-4">
            <label>Nama Toko</label>
            <input
              readOnly
              type="text"
              value={form.namaToko}
              onChange={(e) => handleChange("namaToko", e.target.value)}
              className="text-gray-500 font-semibold bg-gray-300 w-[200px] px-1 rounded"
            />
          </div>

          <div className="flex justify-start gap-4">
            <label>Jarak Kirim</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={form.jarakKirim}
                onChange={(e) => handleChange("jarakKirim", e.target.value)}
                className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
              />
              <span className="text-black px-1 rounded font-semibold bg-gray-300">
                KM
              </span>
            </div>
          </div>

          <div className="flex justify-start gap-7">
            <label>Jarak Asli</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={form.jarakAsli}
                onChange={(e) => handleChange("jarakAsli", e.target.value)}
                className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
              />
              <span className="text-black px-1 rounded font-semibold bg-gray-300">
                KM
              </span>
            </div>
          </div>

          <div className="flex justify-start gap-6">
            <label>Tipe Mobil</label>
            <input
              type="text"
              value={form.tipeMobil}
              onChange={(e) => handleChange("tipeMobil", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
            />
          </div>

          <div className="flex justify-start gap-[1.6rem]">
            <label>Paket IPP</label>
            <input
              type="text"
              value={form.paketIpp}
              onChange={(e) => handleChange("paketIpp", e.target.value)}
              className="text-black font-semibold bg-gray-300 w-[80px] px-1 rounded"
            />
          </div>
        </div>

        <button className="mt-2 bg-gray-300 text-black w-full rounded py-1 font-bold">
          Insert
        </button>
      </div>

      <table className="w-full bg-white text-black rounded">
        <thead className="bg-gray-300">
          <tr>
            <th className="p-2 border">Kode Cluster</th>
            <th className="p-2 border">Group</th>
            <th className="p-2 border">GR 1</th>
            <th className="p-2 border">GR 2</th>
            <th className="p-2 border">GR 3</th>
            <th className="p-2 border">Kode Toko</th>
            <th className="p-2 border">Jarak Kirim</th>
            <th className="p-2 border">Jarak Asli</th>
            <th className="p-2 border">Tipe Mobil</th>
            <th className="p-2 border">Paket IPP</th>
          </tr>
        </thead>
        <tbody>
          {tokoList.map((toko) => {
            const isSelected = toko.kodeToko === selectedKode;
            return (
              <tr
                key={toko.kodeToko}
                className={`cursor-pointer ${
                  isSelected ? "bg-blue-200" : "hover:bg-blue-100"
                }`}
                onClick={() => {
                  setForm({ ...toko });
                  setSelectedKode(toko.kodeToko);
                }}
              >
                <td className="p-2 border">{toko.kodeCluster}</td>
                <td className="p-2 border">{toko.group}</td>
                <td className="p-2 border">{toko.gr1}</td>
                <td className="p-2 border">{toko.gr2}</td>
                <td className="p-2 border">{toko.gr3}</td>
                <td className="p-2 border">{toko.kodeToko}</td>
                <td className="p-2 border">{toko.jarakKirim}</td>
                <td className="p-2 border">{toko.jarakAsli}</td>
                <td className="p-2 border">{toko.tipeMobil}</td>
                <td className="p-2 border">{toko.paketIpp}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
