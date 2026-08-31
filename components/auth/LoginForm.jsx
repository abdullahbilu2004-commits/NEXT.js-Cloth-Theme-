"use client";

import Link from "next/link";

export default function LoginForm() {
return ( <form className="w-full max-w-[420px] border border-black/10 bg-[#f5f5f3] p-6 sm:p-8">

  {/* Heading */}
  <div className="mb-8 text-center">
    <h1 className="text-[20px] font-medium uppercase tracking-[0.04em] text-[#222]">
      Log In
    </h1>

    <p className="mt-2 text-[10px] text-[#777]">
      Welcome back
    </p>
  </div>

  {/* Email */}
  <div className="mb-4">
    <label className="text-[10px] uppercase tracking-[0.06em] text-[#555]">
      Email
    </label>

    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      required
      className="mt-2 h-11 w-full border border-black/10 bg-transparent px-3 text-[11px] outline-none placeholder:text-[#999] focus:border-black/40"
    />
  </div>

  {/* Password */}
  <div className="mb-2">
    <label className="text-[10px] uppercase tracking-[0.06em] text-[#555]">
      Password
    </label>

    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      required
      className="mt-2 h-11 w-full border border-black/10 bg-transparent px-3 text-[11px] outline-none placeholder:text-[#999] focus:border-black/40"
    />
  </div>

  {/* Forgot Password */}
  <div className="mb-6 text-right">
    <button
      type="button"
      className="text-[9px] text-[#777] underline underline-offset-2 hover:text-black"
    >
      Forgot Password?
    </button>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="flex h-11 w-full items-center cursor-pointer justify-between bg-[#dededc] px-4 text-[10px] uppercase tracking-[0.08em] transition hover:bg-black hover:text-white"
  >
    <span>Log In</span>

    <span className="text-[16px]">
      ⟶
    </span>
  </button>

  {/* Signup */}
  <p className="mt-6 text-center text-[10px] text-[#777]">
    Don't have an account?{" "}

    <Link
      href="/signup"
      className="text-black cursor-pointer underline underline-offset-2"
    >
      Sign Up
    </Link>
  </p>

</form>


);
}
