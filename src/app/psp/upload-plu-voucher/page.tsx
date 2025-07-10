"use client";

import { useScrollLock } from "@/utils/useScrollLock";
import { useEffect, useState } from "react";

export default function VoucherUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  useScrollLock(true)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage("No file selected");
      alert(message);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload-voucher", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setMessage(data.message || "Upload complete!");
    } catch (error) {
      setMessage("Upload failed");
      alert(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4  overflow-y-hidden">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-16 rounded-lg shadow-lg w-full max-w-md flex flex-col"
      >
        <h2 className="text-lg font-semibold mb-4 text-center">
          Upload VOUCHER.CSV 📁
        </h2>

        <input
          type="file"
          accept=".csv"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mb-4 block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
}
