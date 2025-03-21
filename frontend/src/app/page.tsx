"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/authentication/`) // Rota de exemplo do Django
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div>
      <h1>Front-end conectado ao Django!</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
