"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ApprovalDialog from "./ApprovalDialog";
import Link from "next/link";

function Navbar() {
  const router = useRouter();
  const [showApproval, setShowApproval] = useState(false);
  const [route, setRoute] = useState("");

  const handleApproval = (username: string, password: string) => {
    //TODO: needs api
    // for API simulation
    if (username === "1" && password === "1") {
      router.push(route);
      setShowApproval(false);
    } else {
      alert("User atau password salah!");
    }
  };

  const handleRouteClick = (href: string) => {
    setRoute(href);
    setShowApproval(true);
  };

  const columns = [
    {
      title: "DATA PB",
      key: "data-pb",
      children: [
        { title: "UPLOAD PB IDM", key: "upload-pb-idm" },
        { title: "PRINT DATA PB", key: "print-data-pb" },
        { title: "HISTORY PROSES PB", key: "history-proses-pb" },
        { title: "SERVICE LEVEL", key: "service-level" },
        { title: "REPORT BARKOS", key: "report-barkos" },
        { title: "REKAP PER TAG", key: "rekap-per-tag" },
      ],
    },
    {
      title: "DATA DPD",
      key: "data-dpd",
      children: [
        { title: "SEND KE JALUR DPD", key: "send-ke-jalur-dpd" },
        { title: "STATUS PROGRESS PB", key: "status-progress-pb" },
      ],
    },
    {
      title: "SETTING",
      key: "setting",
    },
    {
      title: "PSP",
      key: "psp",
      children: [
        { title: "MOBIL", key: "mobil" },
        { title: "KONTAINER", key: "kontainer" },
        { title: "GATE", key: "gate" },
        { title: "CLUSTER", key: "cluster" },
        { title: "ZONA", key: "zona" },
        { title: "UPLOAD PLU VOUCHER", key: "upload-plu-voucher" },
        { title: "DAFTAR PLU HADIAH", key: "daftar-plu-hadiah" },
        { title: "UPLOAD PB IDM", key: "upload-pb-idm" },
        { title: "SEND JALUR DPD", key: "send-jalur-dpd" },
      ],
    },
    {
      title: "PB RO",
      key: "pbro",
      children: [
        { title: "UPLOAD JADWAL KIRIM", key: "upload-jadwal-kirim" },
        { title: "TOKO KHUSUS", key: "toko-khusus" },
        { title: "MASTER EMAIL PB DARURAT", key: "master-email-pb-darurat" },
        { title: "MASTER EMAIL 60 MENIT", key: "master-email-60-menit" },
        { title: "MASTER TOKO PBSL", key: "master-toko-pbsl" },
        { title: "REQUEST PB RO", key: "request-pb-ro" },
      ],
    },
    {
      title: "LAIN-LAIN",
      key: "lain-lain",
      children: [
        { title: "UPLOAD PB ALOKASI RTT", key: "upload-pb-alokasi-rtt" },
        { title: "UPLOAD PB AST", key: "upload-pb-ast" },
      ],
    },
  ];

  return (
    <>
      <nav className="flex gap-4 bg-white px-4 py-2 shadow [&>*]:font-semibold relative z-10">
        {columns.map((column) => (
          <div key={column.key} className="relative group">
            {column.key === "setting" ? (
              <Link
                className="p-2 hover:bg-blue-400 text-sm inline-block hover:text-white cursor-pointer"
                href={`/${column.key}`}
              >
                {column.title}
              </Link>
            ) : (
              <div
                className={`p-2 hover:bg-blue-400 text-sm inline-block hover:text-white cursor-pointer ${
                  column.key === "psp" ? "px-4" : ""
                }`}
              >
                {column.title}
              </div>
            )}

            {column.children && (
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border rounded shadow-md min-w-[150px] transition-all duration-900 ease-in-out">
                {column.children.map((sub) =>
                  (column.key === "data-pb" && sub.key === "upload-pb-idm") ||
                  (column.key === "data-dpd" &&
                    sub.key === "send-ke-jalur-dpd") ? (
                    <div
                      key={sub.key}
                      className={`px-2 py-1 text-sm min-w-max  text-gray-200 hover:text-gray-200 hover:bg-white cursor-not-allowed`}
                    >
                      {sub.title}
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        handleRouteClick(`/${column.key}/${sub.key}`)
                      }
                      key={sub.key}
                      className="px-2 py-1 text-sm hover:bg-blue-400 text-black min-w-max hover:text-white cursor-pointer"
                    >
                      {sub.title}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      <ApprovalDialog
        visible={showApproval}
        onClose={() => setShowApproval(false)}
        onApprove={handleApproval}
      />
    </>
  );
}

export default Navbar;
