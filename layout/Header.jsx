import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <header className="text-gray-600 border-b-2 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
          <Image
            src="/GDSCUTM-Bracket.png"
            alt="GDSCUTM-Bracket.png"
            width={65}
            height={65}
          />

          <span className="ml-3 text-xl">GDSC DEU</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a className="mr-5 hover:text-gray-900">About Us</a>
          <a className="mr-5 hover:text-gray-900">Notice</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
          <a className="mr-5 hover:text-gray-900">Study</a>
          <a className="mr-5 hover:text-gray-900">Event</a>
          <a className="mr-5 hover:text-gray-900">Member</a>
        </nav>
        <button className="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-100 border-0 rounded focus:outline-none hover:bg-gray-200 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
