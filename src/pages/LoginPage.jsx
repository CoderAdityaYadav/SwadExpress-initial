import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
      navigate("/");
    } else {
      alert("Please enter both email and password!");
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-gray-900 text-white"
      style={{
        height: "100vh", // Ensures full height
        margin: "0", // Removes any extra margin
        padding: "0", // Removes padding
        overflow: "hidden", // Prevents scrolling
      }}
    >
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
        style={{
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-700 rounded"
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-700 rounded"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 py-2 px-4 rounded text-white font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

