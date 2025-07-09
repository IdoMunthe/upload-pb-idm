import React, { useEffect, useState } from "react";

function ApprovalDialog({
  onClose,
  onApprove,
  visible,
}: {
  onClose: () => void;
  onApprove: (username: string, password: string) => void;
  visible: boolean;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUsername("")
    setPassword("")
  }, [visible])

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-gray-600/25 flex items-center justify-center z-50 ">
      <div className="bg-white p-6 rounded shadow-lg w-[300px]">
        <h2 className="text-2xl mb-4">Approval Required</h2>
        <input
          className="border p-2 w-full text-sm mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 w-full text-sm mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={() => onApprove(username, password)}
            autoFocus
            className="px-3 py-1 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
          >
            Submit
          </button>
          <button
            onClick={() => {
              onClose();
              setUsername("");
              setPassword("");
            }}
            className="px-3 py-1 bg-gray-300 rounded cursor-pointer hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApprovalDialog;
