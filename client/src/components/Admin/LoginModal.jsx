import { useState } from "react";
import { X } from "lucide-react";
import { useAdmin } from "../../context/AdminContext";

function LoginModal({ onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAdmin();

  const handleLogin = () => {
    const success = login(password);

    if (success) {
      onClose();
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-slate-900 w-[400px] rounded-xl p-6 border border-slate-700">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Admin Login
          </h2>

          <button onClick={onClose}>
            <X className="text-gray-400 hover:text-white" />
          </button>
        </div>

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 rounded-lg bg-slate-800 text-white outline-none border border-slate-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 mt-3">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 transition rounded-lg py-3 font-semibold"
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default LoginModal;