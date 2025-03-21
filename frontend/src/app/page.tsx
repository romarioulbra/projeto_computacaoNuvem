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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/clinic-logo.png"
            alt="MyClinical Logo"
            width={100}
            height={100}
            className="mb-6"
          />
          <h1 className="text-4xl font-bold text-blue-900 mb-3 font-sans">MyClinical Dashboard</h1>
          <p className="text-gray-600 text-lg mb-8">Gerencie atendimentos e agendamentos com eficiência e praticidade.</p>
          <Image
            src="/medical-dashboard.svg"
            alt="Dashboard Ilustrativo"
            width={450}
            height={280}
            className="mb-8 rounded-lg shadow-md"
          />
        </div>
        {data ? (
          <pre className="bg-gray-100 p-5 rounded-lg text-left text-sm overflow-auto border border-gray-300 shadow-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p className="text-gray-600 text-lg">Carregando dados...</p>
        )}
      </div>
    </div>
  );
}
