import DarkMode from '@/components/home/DarkMode';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="text-gray-600 border-b-2 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link
          href="/"
          className="flex items-center mb-4 md:mb-0 dark:text-gray-400"
        >
          <Image
            src="/GDSCUTM-Bracket.png"
            alt="GDSCUTM-Bracket.png"
            width={65}
            height={65}
          />

          <span className="ml-3 text-xl">GDSC DEU</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link
            href="/about-us"
            className="mr-5 hover:text-gray-900 dark:text-gray-400"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 dark:text-gray-400"
          >
            Notice
          </Link>
          <Link
            href="/blog"
            className="mr-5 hover:text-gray-900 dark:text-gray-400"
          >
            Blog
          </Link>
          <Link
            href="/study"
            className="mr-5 hover:text-gray-900 dark:text-gray-400"
          >
            Study
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 dark:text-gray-400"
          >
            Event
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-gray-900 dark:text-gray-400"
          >
            Member
          </Link>
        </nav>
        <DarkMode />
      </div>
    </header>
  );
}
