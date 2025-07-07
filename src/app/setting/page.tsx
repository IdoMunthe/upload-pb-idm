"use client";

import { useState } from "react";

export default function SettingPage() {
  const [form, setForm] = useState({
    pathPdf: "",
    leftMargin: "",
    topMargin: "",
    serverEmail: "",
    portEmail: "",
    userEmail: "",
    passwordEmail: "",
    emailTolakanTo: "",
    emailTolakanCc: "",
    emailOtpPbDarurat: "",
    emailTolakanPbOmi: "",
    formatCetakanKoli: "v1",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      if (
        !form.serverEmail ||
        !form.userEmail ||
        !form.pathPdf ||
        !form.leftMargin ||
        !form.topMargin ||
        !form.serverEmail ||
        !form.portEmail ||
        !form.userEmail ||
        !form.passwordEmail ||
        !form.emailTolakanTo ||
        !form.emailTolakanCc ||
        !form.emailOtpPbDarurat ||
        !form.emailTolakanPbOmi ||
        !form.formatCetakanKoli
      ) {
        alert("Ada field yang masih kosong");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to save");

      alert("✅ Settings berhasil disimpan!");
    } catch (err: any) {
      alert(`❌ Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">
      <div className="bg-[#1d4744] p-6 rounded-lg shadow-md text-white w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">SETTING</h2>

        <div className="grid grid-cols-3 gap-3 text-sm">
          <Label text="PATH PDF" color="bg-yellow-300" />
          <div className="col-span-2 flex gap-2">
            <input
              type="text"
              value={form.pathPdf}
              onChange={(e) => handleChange("pathPdf", e.target.value)}
              className="flex-1 bg-white text-black px-2 py-1 rounded"
            />
            <button className="bg-white text-black px-2 py-1 rounded">
              📁
            </button>
          </div>

          <Label text="Left Margin" />
          <input
            type="number"
            value={form.leftMargin}
            onChange={(e) => handleChange("leftMargin", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Top Margin" />
          <input
            type="number"
            value={form.topMargin}
            onChange={(e) => handleChange("topMargin", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          {/* Email configs */}
          <Label text="Server Email" color="bg-red-400" />
          <input
            type="text"
            value={form.serverEmail}
            onChange={(e) => handleChange("serverEmail", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Port Email" color="bg-red-400" />
          <input
            type="text"
            value={form.portEmail}
            onChange={(e) => handleChange("portEmail", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="User Email" color="bg-red-400" />
          <input
            type="text"
            value={form.userEmail}
            onChange={(e) => handleChange("userEmail", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Password Email" color="bg-red-400" />
          <input
            type="password"
            value={form.passwordEmail}
            onChange={(e) => handleChange("passwordEmail", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Email Tolakan TO" color="bg-red-400" />
          <input
            type="text"
            value={form.emailTolakanTo}
            onChange={(e) => handleChange("emailTolakanTo", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Email Tolakan CC" color="bg-red-400" />
          <input
            type="text"
            value={form.emailTolakanCc}
            onChange={(e) => handleChange("emailTolakanCc", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Email OTP PB Darurat" color="bg-red-400" />
          <input
            type="text"
            value={form.emailOtpPbDarurat}
            onChange={(e) => handleChange("emailOtpPbDarurat", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Email Tolakan PB OMI" color="bg-red-400" />
          <input
            type="text"
            value={form.emailTolakanPbOmi}
            onChange={(e) => handleChange("emailTolakanPbOmi", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          />

          <Label text="Format Cetakan Koli" color="bg-orange-400" />
          <select
            value={form.formatCetakanKoli}
            onChange={(e) => handleChange("formatCetakanKoli", e.target.value)}
            className="col-span-2 bg-white text-black px-2 py-1 rounded"
          >
            <option>v1</option>
            <option>v2</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button
            disabled={loading}
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? "Saving..." : "Save"}
          </button>
          <button
            onClick={() =>
              setForm((prev) => ({
                ...prev,
                ...Object.fromEntries(Object.keys(prev).map((k) => [k, ""])),
              }))
            }
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

function Label({
  text,
  color = "bg-orange-200",
}: {
  text: string;
  color?: string;
}) {
  return (
    <div className={`font-bold px-2 py-1 text-black rounded ${color}`}>
      {text.toUpperCase()}
    </div>
  );
}
