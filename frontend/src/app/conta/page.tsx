"use client";

// import { useState } from "react";

export default function AccountForm() {
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   if (!e.target) return;
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Dados enviados:", formData);
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">Criar Conta</h2>
        <form
          // onSubmit={handleSubmit} 
          className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-gray-700 text-sm font-semibold mb-1">
              Usuário
            </label>
            <input
              id="username"
              type="text"
              name="username"
              // value={formData.username}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              // value={formData.email}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-1">
              Senha
            </label>
            <input
              id="password"
              type="password"
              name="password"
              // value={formData.password}
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Criar Conta
          </button>
        </form>
      </div>
    </div>
  );
}
