"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-gray-200 text-[#222]">

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden h-[80px] items-center justify-between px-6 md:flex">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-5">

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            className="flex w-4 flex-col gap-[4px]"
          >
            <span className="h-[1px] w-3 bg-[#222]" />
            <span className="h-[1px] w-3 bg-[#222]" />
          </button>

          {/* Home */}
          <Link
            href="/"
            className="text-[12px] tracking-[0.08em] transition-opacity hover:opacity-50"
          >
            Home
          </Link>

          {/* Collections */}
          <Link
            href="#collection"
            className="text-[12px] tracking-[0.08em] transition-opacity hover:opacity-50"
          >
            Collections
          </Link>

          {/* New */}
          <Link
            href="#new"
            className="text-[12px] tracking-[0.08em] transition-opacity hover:opacity-50"
          >
            New
          </Link>

        </div>


        {/* ================= CENTER LOGO ================= */}

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="relative h-9 w-9">
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center gap-3">

          {/* Theme / Mode */}
          {/* <button
            aria-label="Theme"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#222] text-white transition-transform hover:scale-105"
          >
            <span className="text-[11px]">
              ◔
            </span>
          </button> */}


          {/* Cart */}
          <Link
            href="/cart"
            className="flex h-7 items-center gap-2 rounded-full bg-[#222] px-3 text-[9px] text-white transition-transform hover:scale-105"
          >
            <span>
              Cart
            </span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] text-[#222]">
              0
            </span>
          </Link>


          {/* Account */}
          <Link
            href="/signup"
            aria-label="Account"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-[#222] text-white transition-transform hover:scale-105"
          >
            <span className="text-[11px]">
              ♙
            </span>
          </Link>

        </div>

      </div>


      {/* ================= MOBILE NAVBAR ================= */}

      <div className="flex h-[65px] items-center justify-between px-5 md:hidden">

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
          className="flex w-5 flex-col gap-[4px]"
        >
          <span className="h-[1px] w-4 bg-[#222]" />
          <span className="h-[1px] w-4 bg-[#222]" />
        </button>


        {/* Mobile Logo */}
        <Link href="/">
          <div className="relative h-7 w-7">
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>


        {/* Mobile Cart */}
        <Link
          href="/cart"
          className="flex h-7 items-center gap-1 rounded-full bg-[#222] px-3 text-[9px] text-white"
        >
          <span>
            Cart
          </span>

          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[8px] text-[#222]">
            0
          </span>
        </Link>

      </div>


      {/* ================= MOBILE MENU ================= */}

      {menuOpen && (
        <div className="border-t border-black/10 bg-[#f5f5f3] px-5 py-5 md:hidden">

          <nav className="flex flex-col gap-5 text-[11px] tracking-[0.08em]">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/collections"
              onClick={() => setMenuOpen(false)}
            >
              Collections
            </Link>

            <Link
              href="/products"
              onClick={() => setMenuOpen(false)}
            >
              New
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setMenuOpen(false)}
            >
              Wishlist
            </Link>

            <Link
              href="/account"
              onClick={() => setMenuOpen(false)}
            >
              Account
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}