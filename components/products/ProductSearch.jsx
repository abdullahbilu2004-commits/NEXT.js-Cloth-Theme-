"use client";

export default function ProductSearch({ value, onChange }) {
  return (
    <div className="flex h-10 w-full items-center bg-[#dededc] px-3">
      <span className="mr-3 text-[15px]">
        ⌕
      </span>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#777]"
      />
    </div>
  );
}