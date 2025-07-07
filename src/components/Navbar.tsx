"use client";
import Link from "next/link";

function Navbar() {
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
    <nav className="flex gap-4 bg-white px-4 py-2 shadow [&>*]:font-semibold relative z-10">
      {columns.map((column) => (
        <div key={column.key} className="relative group">
          <Link
            href={`/${column.key}`}
            className={`p-2 hover:bg-blue-400 text-sm inline-block hover:text-white ${
              column.key === "psp" ? "px-4" : ""
            }`}
          >
            {column.title}
          </Link>

          {column.children && (
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col bg-white border rounded shadow-md min-w-[150px] transition-all duration-900 ease-in-out">
              {column.children.map((sub) => (
                <Link
                  key={sub.key}
                  href={`/${sub.key}`}
                  className="px-2 py-1 text-sm hover:bg-blue-400 text-black min-w-max hover:text-white"
                >
                  {sub.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Navbar;
