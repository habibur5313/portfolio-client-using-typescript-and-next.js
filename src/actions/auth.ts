"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res?.ok) {
    console.error("User Registration Failed", await res.text());
  }
  return await res.json();
};

export const login = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let responseData;
  try {
    responseData = await res.json(); // try parsing as JSON
  } catch {
    responseData = await res.text(); // fallback if response is plain text
  }
  if (!res.ok) {
    throw new Error(responseData.message || responseData || "Login failed");
  }

  return responseData;
};
