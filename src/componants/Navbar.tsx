"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, PhoneCall, Mail } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Causes", "Event", "Blog", "Contact"];

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="w-full px-4 py-2 border-b border-neutral-200 text-sm md:px-20 lg:px-48">
        <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-4">
          {/* Left: Contact Info */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <PhoneCall size={16} />
              <p>+000123456789</p>
            </div>
            <span className="hidden sm:inline-block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Mail size={16} />
              <p>nasarna@gmail.com</p>
            </div>
          </div>

          {/* Right: Auth + Donate */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 whitespace-nowrap">
            <Link
              href="/login"
              className="text-gray-500 rounded-md px-3 py-1.5 text-sm font-semibold hover:text-blue-800 transition"
            >
              Login
            </Link>
            <div className="hidden sm:block w-px h-4 bg-gray-300" />
            <Link
              href="/signup"
              className="text-gray-500 rounded-md px-3 py-1.5 text-sm font-semibold hover:text-blue-800 transition"
            >
              Signup
            </Link>
            <Link
              href="/donate"
              className="bg-emerald-600 text-white rounded-md px-4 py-2 text-sm lg:text-base font-semibold hover:bg-emerald-700 transition"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white w-full shadow-sm border-b border-neutral-100 py-4 px-4 sm:px-6 md:px-10 lg:px-48">
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-screen-xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-28 sm:w-32 md:w-36 lg:w-44 h-auto">
              <Image
                src={logo}
                alt="logo"
                width={180}
                height={120}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-wrap">
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
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black"
            aria-label="Toggle navigation menu"
          >
            <Menu size={26} />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white px-4 py-4 border-t border-gray-200 shadow-inner rounded-md">
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

            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/donate"
                className="bg-emerald-600 text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-emerald-700 transition text-center"
              >
                Donate
              </Link>
              <Link
                href="/login"
                className="bg-gray-100 text-black rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition text-center"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-gray-100 text-black rounded-md px-4 py-2 text-sm font-semibold hover:bg-gray-200 transition text-center"
              >
                Signup
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
