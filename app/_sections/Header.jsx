"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full py-4 md:py-6 lg:py-10 px-4 md:px-10 bg-white">
      <div className="container flex items-center justify-between h-14 md:h-16 max-lg:px-5">
        {/* THE LOGO */}
        <Link href="/" className="logo font-semibold ">
          <span className="inline-block ">
            <Image
              src={logo}
              alt="logo"
              quality={100}
              className="w-12 h-auto"
            />
          </span>
          Planify
        </Link>
        {/* MOBILE NAV */}
        <div className="md:hidden">
          <button
            className="hover:text-gray-900 focus:outline-none focus:text-gray-900"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.2929 4.29289C19.6834 3.90237 20.3166 3.90237 20.7071 4.29289C21.0976 4.68342 21.0976 5.31658 20.7071 5.70711L13.4142 13L20.7071 20.2929C21.0976 20.6834 21.0976 21.3166 20.7071 21.7071C20.3166 22.0976 19.6834 22.0976 19.2929 21.7071L12 14.4142L4.70711 21.7071C4.31658 22.0976 3.68342 22.0976 3.29289 21.7071C2.90237 21.3166 2.90237 20.6834 3.29289 20.2929L10.5858 13L3.29289 5.70711C2.90237 5.31658 2.90237 4.68342 3.29289 4.29289C3.68342 3.90237 4.31658 3.90237 4.70711 4.29289L12 11.5858L19.2929 4.29289Z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C3.44772 6 3 6.44772 3 7C3 7.55228 3.44772 8 4 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H4ZM4 12C3.44772 12 3 12.4477 3 13C3 13.5523 3.44772 14 4 14H20C20.5523 14 21 13.5523 21 13C21 12.4477 20.5523 12 20 12H4ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z"
                />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-14 left-0 w-full bg-white shadow-lg">
              <ul className="flex flex-col items-center justify-center py-4">
                <Link
                  href="/"
                  className="my-2 text-gray-600 hover:text-gray-900 transition"
                >
                  Feature
                </Link>
                <Link
                  href="/"
                  className="my-2 text-gray-600 hover:text-gray-900 transition"
                >
                  Pricing
                </Link>
                <Link
                  href="/"
                  className="my-2 text-gray-600 hover:text-gray-900 transition"
                >
                  Testimonials
                </Link>
                <Link
                  href="/"
                  className="my-2 text-gray-600 hover:text-gray-900 transition"
                >
                  FAQ
                </Link>
                <Link
                  href="/"
                  className="my-2 text-gray-600 hover:text-gray-900 transition"
                >
                  Download
                </Link>
              </ul>
            </div>
          )}
        </div>
        {/* DESKTOP NAVBAR */}
        <nav className="hidden md:block">
          <ul className="flex items-center justify-between max-lg:block max-lg:px-12">
            <Link
              href="/"
              className="mr-8 md:mr-2 lg:mr-6 relative after-hover transition"
            >
              Feature
            </Link>
            <Link
              href="/"
              className="mx-8 md:mx-2 lg:mx-6 relative after-hover transition"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="mx-8 md:mx-2 lg:mx-6 relative after-hover transition"
            >
              Testimonials
            </Link>
            <Link
              href="/"
              className="mx-8 md:mx-2 lg:mx-6 relative after-hover transition"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="ml-8 md:ml-2 lg:ml-6 relative after-hover transition"
            >
              Download
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
