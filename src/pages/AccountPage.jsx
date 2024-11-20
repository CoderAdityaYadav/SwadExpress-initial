import React from "react";

const AccountPage = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Account Details</h2>
      <p className="mb-2">Email: user@example.com</p>
      <p className="mb-4">Name: Aditya Yadav</p>
      <button className="w-full bg-red-600 hover:bg-red-500 py-2 px-4 rounded text-white font-bold">
        Logout
      </button>
    </div>
  </div>
);

export default AccountPage;
