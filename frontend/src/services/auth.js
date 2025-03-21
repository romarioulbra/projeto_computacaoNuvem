export const loginUser = async (credentials) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authentication/login/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Falha no login");

  const data = await res.json();
  localStorage.setItem("token", data.access);
  localStorage.setItem("refresh", data.refresh);
  return data;
};
