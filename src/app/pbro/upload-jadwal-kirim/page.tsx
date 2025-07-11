"use client";

import { useState } from "react";

type JadwalKirimItem = {
  kd_igr: string;
  tgl_kirim: string; // format: 'YYYY-MM-DD'
  toko: string;
  bfta: string;
  ritase: number;
  cluster: string;
  grup: number;
  first_request: string;
};

const dummyData: JadwalKirimItem[] = [
  {
    kd_igr: "G144",
    tgl_kirim: "2025-07-03",
    toko: "FN8C",
    bfta: "T",
    ritase: 1,
    cluster: "A",
    grup: 1,
    first_request: "-",
  },
  {
    kd_igr: "G144",
    tgl_kirim: "2025-07-10",
    toko: "TR1C",
    bfta: "T",
    ritase: 2,
    cluster: "A",
    grup: 1,
    first_request: "-",
  },
  {
    kd_igr: "G144",
    tgl_kirim: "2025-08-15",
    toko: "FD08",
    bfta: "T",
    ritase: 3,
    cluster: "A",
    grup: 2,
    first_request: "-",
  },
];

export default function UploadJadwalKirim() {
  const [selectedToko, setSelectedToko] = useState("ALL");
  const [startDate, setStartDate] = useState("2025-07-01");
  const [endDate, setEndDate] = useState("2025-07-01");
  const [filtered, setFiltered] = useState<JadwalKirimItem[]>(dummyData);

  // TODO: needs api
  const handleFilter = () => {
    const result = dummyData.filter((item) => {
      const isTokoMatch = selectedToko === "ALL" || item.toko === selectedToko;
      const isDateMatch =
        item.tgl_kirim >= startDate && item.tgl_kirim < endDate;
      return isTokoMatch && isDateMatch;
    });
    setFiltered(result);
  };

  // TODO: needs api
  const tokoOptions = Array.from(new Set(dummyData.map((item) => item.toko)));

  return (
    <div className="p-4 bg-blue-200 min-h-screen text-sm font-mono flex flex-col">
      <div className="flex gap-2 mb-2 items-center p-2 self-center font-semibold">
        <label className="font-bold bg-white px-2 py-1 h-7 rounded">
          TOKO :
        </label>
        <select
          value={selectedToko}
          onChange={(e) => setSelectedToko(e.target.value)}
          className="px-2 py-1  h-7 bg-white rounded"
        >
          <option value="ALL">ALL</option>
          {tokoOptions.map((toko) => (
            <option key={toko} value={toko}>
              {toko}
            </option>
          ))}
        </select>

        <label className=" font-bold  bg-white px-2 py-1 h-7 rounded ml-8">
          TANGGAL :
        </label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="px-2 py-1  h-7 bg-white rounded"
        />
        <span className=" font-bold  px-2 py-1 h-7 bg-white rounded">-</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="px-2 py-1  h-7 bg-white rounded"
        />

        <button
          onClick={handleFilter}
          className="bg-green-500 font-bold px-6 py-1 rounded  ml-8"
        >
          FILTER
        </button>
      </div>

      <div className="overflow-auto border border-black">
        <table className="w-full border-collapse bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black px-2 py-1">kd_igr</th>
              <th className="border border-black px-2 py-1">tgl_kirim</th>
              <th className="border border-black px-2 py-1">toko</th>
              <th className="border border-black px-2 py-1">bfta</th>
              <th className="border border-black px-2 py-1">ritase</th>
              <th className="border border-black px-2 py-1">CLUSTER</th>
              <th className="border border-black px-2 py-1">grup</th>
              <th className="border border-black px-2 py-1">first_request</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                <td className="border border-black px-2">{item.kd_igr}</td>
                <td className="border border-black px-2">{item.tgl_kirim}</td>
                <td className="border border-black px-2">{item.toko}</td>
                <td className="border border-black px-2">{item.bfta}</td>
                <td className="border border-black px-2">{item.ritase}</td>
                <td className="border border-black px-2">{item.cluster}</td>
                <td className="border border-black px-2">{item.grup}</td>
                <td className="border border-black px-2">
                  {item.first_request}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center p-4 text-gray-600">No data found.</div>
        )}
      </div>
    </div>
  );
}
