import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="py-12 flex flex-col items-center justify-center gap-8">
      <h2 className="text-5xl">Whoops! Lost in cyberspace?</h2>
      <p className="text-3xl text-gray-400">
        We couldn’t find the page you were looking for. 😕
      </p>
      <Link
        className="py-2 px-4 rounded bg-transparent border border-white text-white font-bold uppercase text-2xl hover:bg-white hover:text-black transition duration-300 cursor-pointer"
        href="/"
      >
        Take Me Back Home
      </Link>
    </div>
  );
}
