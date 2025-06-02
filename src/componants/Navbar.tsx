"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Causes", "Event", "Blog", "Contact"];

  return (
    <nav className="bg-gray-50 w-full shadow-md">
      {/* Top Container */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-48 py-4 md:py-6 max-w-[1440px] mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={180}
            height={120}
            className="w-28 sm:w-32 md:w-36 lg:w-44"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="text-sm lg:text-base text-neutral-600 hover:text-emerald-600 transition font-medium"
            >
              {item}
            </Link>
          ))}

          <button className="text-black hover:text-emerald-600 transition">
            <Search strokeWidth={1.5} />
          </button>

          <Link
            href="/donate"
            className="bg-emerald-600 text-white rounded-md px-4 py-2 text-sm lg:text-base font-semibold hover:bg-emerald-700 transition"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-4 border-t border-gray-200 shadow-inner">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className="block py-2 text-sm text-neutral-700 hover:text-emerald-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}

          <div className="flex justify-between items-center mt-4">
            <button className="text-black hover:text-emerald-600 transition">
              <Search strokeWidth={1.5} />
            </button>
            <Link
              href="/donate"
              className="bg-emerald-600 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-emerald-700 transition"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
