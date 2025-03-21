export const registerUser = async (formData) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/authentication/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  return res.json();
};
