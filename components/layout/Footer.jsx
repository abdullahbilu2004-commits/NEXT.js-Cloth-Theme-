
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-200 px-6 py-12 text-[#222] sm:px-8 sm:py-14 md:min-h-[420px] md:px-10 md:py-16">

      {/* ================= FOOTER CONTENT ================= */}
      <div className="mx-auto flex max-w-6xl flex-col gap-12 md:flex-row md:justify-between">

        {/* ================= LEFT - INFO ================= */}
        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16 md:flex-col md:gap-7">

          {/* Info */}
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#888]">
              Info
            </p>

            <nav className="flex flex-col gap-[4px] text-[11px] uppercase tracking-[0.08em]">
              <Link
                href="/pricing"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Pricing
              </Link>

              <Link
                href="/about"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="transition-opacity duration-300 hover:opacity-50"
              >
                Contacts
              </Link>
            </nav>
          </div>


          {/* Languages */}
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.15em] text-[#888]">
              Languages
            </p>

            <nav className="flex flex-col gap-[4px] text-[11px] uppercase tracking-[0.08em]">
              <button className="w-fit transition-opacity duration-300 hover:opacity-50">
                ENG
              </button>

              <button className="w-fit transition-opacity duration-300 hover:opacity-50">
                ESP
              </button>

              <button className="w-fit transition-opacity duration-300 hover:opacity-50">
                SVE
              </button>
            </nav>
          </div>

        </div>


        {/* ================= CENTER LOGO ================= */}
        <div className="flex justify-center md:absolute md:left-1/2 md:top-16 md:-translate-x-1/2">

          <div className="flex h-[120px] w-[150px] items-center justify-center sm:h-[140px] sm:w-[170px]">

            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={100}
              className="h-auto w-[90px] object-contain sm:w-[120px]"
            />

          </div>

        </div>


        {/* ================= RIGHT ================= */}
        <div className="flex items-start gap-6 md:mr-[12%] lg:mr-[20%]">

          <div>

            <p className="mb-5 text-[11px] uppercase tracking-[0.15em] text-[#888]">
              Technologies
            </p>

            <p className="max-w-[220px] text-[11px] leading-[1.5] tracking-[0.05em]">
              Next-field communication
            </p>

          </div>


          {/* Slash */}
          <span className="mt-5 text-[17px] font-light text-[#aaa]">
            /
          </span>

        </div>

      </div>


      {/* ================= BOTTOM ================= */}
      <div className="mt-14 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between md:absolute md:bottom-6 md:left-0 md:mt-0 md:w-full md:border-0 md:px-8 md:pt-0">

        <p className="text-[10px] text-[#999] sm:text-[11px]">
          © 2024 — copyright
        </p>

        <Link
          href="/privacy"
          className="w-fit text-[10px] text-[#999] transition-colors duration-300 hover:text-[#222] sm:text-[11px]"
        >
          privacy
        </Link>

      </div>

    </footer>
  );
}

