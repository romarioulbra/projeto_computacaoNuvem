"use client";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import ProfileDrawer from "./ProfileDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyClínical</h1>
      <nav className="hidden md:flex gap-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/conta" className="hover:underline">Conta</a>
        <button onClick={() => setIsOpen(true)} className="flex items-center gap-2">
          <FaUser size={20} />
        </button>
      </nav>
      <button onClick={() => setIsOpen(true)} className="md:hidden">
        <FaBars size={24} />
      </button>
      {isOpen && <ProfileDrawer onClose={() => setIsOpen(false)} />}
    </header>
  );
}
