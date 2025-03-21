"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/authentication/`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/clinic-logo.png"
            alt="MyClinical Logo"
            width={120}
            height={120}
            className="mb-6 drop-shadow-lg"
          />
          <h1 className="text-5xl font-bold text-blue-900 mb-4 font-sans">MyClinical Dashboard</h1>
          <p className="text-gray-700 text-lg mb-8">Gerencie atendimentos e agendamentos com eficiência e praticidade.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-transform transform hover:scale-105">
            Acessar Painel
          </button>
        </div>
        {data ? (
          <pre className="bg-gray-100 p-5 rounded-lg text-left text-sm overflow-auto border border-gray-300 shadow-inner mt-6">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-600 text-lg mt-6">Carregando dados...</p>
        )}
      </div>
    </div>
  );
}
