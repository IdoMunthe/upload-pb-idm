"use client";

import { useScrollLock } from "@/utils/useScrollLock";
import { useState } from "react";

type PLUItem = {
  PRDCD: string;
  DESKRIPSI: string;
};

const dummyData: PLUItem[] = [
  { PRDCD: "0000040", DESKRIPSI: "JERUK PONKAM BAZAAR WHL" },
  { PRDCD: "0000050", DESKRIPSI: "MARKETING PROMOTION PCS" },
  { PRDCD: "0000230", DESKRIPSI: "MAX ISI STAPLER NO-10-1M(1000) PCK" },
  {
    PRDCD: "0000400",
    DESKRIPSI: "INDOMILK SUSU KENTAL MANIS CHOCOLATE KLG 370g",
  },
  { PRDCD: "0000410", DESKRIPSI: "CAP ENAK KENTAL MANIS PUTIH KLG 370g" },
  { PRDCD: "0000530", DESKRIPSI: "SNOWMAN SPIDOL KECIL MERAH PCS" },
];

export default function PluSelector() {
  const [searchTerm, setSearchTerm] = useState("");
  const [leftItems, setLeftItems] = useState<PLUItem[]>(dummyData);
  const [rightItems, setRightItems] = useState<PLUItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<PLUItem | null>(null);

  const filteredLeft = leftItems.filter((item) =>
    item.DESKRIPSI.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInsert = () => {
    if (selectedItem) {
      setRightItems((prev) => [...prev, selectedItem]);
      // setLeftItems(prev => prev.filter(item => item.PRDCD != selectedItem.PRDCD))
      alert(`PLU ${selectedItem.PRDCD} berhasil ditambahkan`);
      setSelectedItem(null);
    }
  };

  return (
    <div className="flex gap-4 p-4 bg-cyan-100 min-h-screen text-sm">
      {/* LEFT SIDE */}
      <div className="w-1/2 border border-black bg-white">
        <div className="flex">
          <div className="bg-orange-300 font-bold w-24 text-center p-1">
            DESKRIPSI
          </div>
          <input
            type="text"
            className="w-full border border-black px-2 py-1"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="overflow-y-auto max-h-[500px]">
          <table className="w-full border-collapse">
            <tbody>
              {filteredLeft.map((item) => (
                <tr
                  key={item.PRDCD}
                  onClick={() => setSelectedItem(item)}
                  className={`cursor-pointer ${
                    selectedItem?.PRDCD === item.PRDCD
                      ? "bg-blue-400 text-white"
                      : ""
                  }`}
                >
                  <td className="border border-black w-[85px] px-1">
                    {item.PRDCD}
                  </td>
                  <td className="border border-black px-1">{item.DESKRIPSI}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MIDDLE BUTTON */}
      <div className="flex flex-col justify-center">
        <button
          onClick={handleInsert}
          className="bg-green-400 text-black px-4 py-64 font-bold hover:bg-green-500 cursor-pointer"
        >
          INSERT
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 border border-black bg-white">
        <div className="bg-green-300 font-bold text-center p-1">
          LIST PLU HADIAH IDM
        </div>
        <div className="overflow-y-auto max-h-[550px]">
          <table className="w-full border-collapse">
            <tbody>
              {rightItems.map((item) => (
                <tr key={item.PRDCD}>
                  <td className="border border-black w-[85px] px-1">
                    {item.PRDCD}
                  </td>
                  <td className="border border-black px-1">{item.DESKRIPSI}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
