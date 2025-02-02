import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <div className="flex items-center justify-center gap-8 py-8">
      <Link
        className="py-2 px-4 rounded bg-transparent border border-white text-white font-bold uppercase text-2xl hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        href={"/categories/sedan"}
      >
        SEDAN
      </Link>
      <Link
        className="py-2 px-4 rounded bg-transparent border border-white text-white font-bold uppercase text-2xl hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        href={"/categories/SUV"}
      >
        SUV
      </Link>
    </div>
  );
}
