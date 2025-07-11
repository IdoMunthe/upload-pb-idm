"use client";

import { useEffect, useState } from "react";

export default function MasterEmail60MenitPage() {
  const [emailType, setEmailType] = useState("TO");
  const [emailInput, setEmailInput] = useState("");
  const [emailList, setEmailList] = useState<{ type: string; email: string }[]>([
    {type: "TO",email: "edp@ckl.indogrosir.co.id"},
    {type: "TO",email: "edpissuing@ckl.indogrosir.co.id"},
    {type: "TO",email: "marcellinus@indomaret.co.id"},
  ]);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleKeyDownGlobal = (e: KeyboardEvent) => {
    if (e.key === "Delete" && selectedRow !== null) {
      setEmailList((prev) => prev.filter((_, i) => i !== selectedRow));
      setSelectedRow(null); // clear selection
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDownGlobal);
    return () => window.removeEventListener("keydown", handleKeyDownGlobal);
  }, [selectedRow]);


  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleAdd = () => {
    if (!isValidEmail(emailInput)) {
      alert("Format email tidak valid!");
      return;
    }
    
    if (!emailInput.trim()) return;
    setEmailList((prev) => [
      ...prev,
      { type: emailType, email: emailInput.trim() },
    ]);
    setEmailInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleDelete = (index: number) => {
    setEmailList((prev) => prev.filter((_, i) => i !== index));
  };

  

  return (
    <div className="p-4 bg-[#337ca8] text-white flex-col flex items-center text-sm min-h-screen">
      <div className="border p-2 flex justify-center items-center gap-2">
        <label className="font-bold">Email</label>
        <select
          value={emailType}
          onChange={(e) => setEmailType(e.target.value)}
          className="text-black bg-white font-bold border border-black px-1 py-0.5"
        >
          <option value="TO">TO</option>
          <option value="CC">CC</option>
          <option value="BCC">BCC</option>
        </select>
        <input
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className=" w-128 text-black border border-black px-2 py-0.5"
        />
        <button
          onClick={handleAdd}
          className="bg-green-600 text-white px-4 py-1 border border-black font-bold"
        >
          TAMBAH
        </button>
      </div>

      <div className="mt-2 text-black">
        <table className="w-256 border-collapse h-auto bg-white">
          <thead className="bg-gray-300">
            <tr>
              <th className="border border-black w-20">Type</th>
              <th className="border border-black">Email</th>
            </tr>
          </thead>
          <tbody>
            {emailList.map((item, i) => (
              <tr
                key={i}
                className= {`cursor-pointer ${selectedRow === i ? "bg-blue-500" : ""}`}
                onClick={() => setSelectedRow(i)}
              >
                <td className="border border-black text-center font-bold">
                  {item.type}
                </td>
                <td className="border border-black pl-2">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-2 text-white italic text-xs">
        * DELETE : untuk menghapus data
      </div>
    </div>
  );
}
