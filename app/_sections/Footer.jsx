import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import facebook from "@/public/facebook.svg";
import instagram from "@/public/instagram.svg";
import twitter from "@/public/twitter.svg";
import linkedIn from "@/public/linkedIn.svg";

export default function Footer() {
  return (
    <footer className="container mb-8">
      <div className="flex flex-row gap-6 items-start justify-between">
        <div className="mr-20">
          <Link href="/" className="inline-block mb-2 logo font-semibold">
            <span className="inline-block">
              <Image
                src={logo}
                alt="logo"
                quality={100}
                className="w-12 h-auto"
              />
            </span>
            Planify
          </Link>
          <div className="flex flex-row items-center justify-start pl-4 gap-4">
            <Link href="">
              <Image
                src={facebook}
                alt="Facebook Logo"
                className="w-6 h-auto"
              />
            </Link>
            <Link href="">
              <Image
                src={instagram}
                alt="Instagram Logo"
                className="w-6 h-auto"
              />
            </Link>
            <Link href="">
              <Image src={twitter} alt="Twitter Logo" className="w-6 h-auto" />
            </Link>
            <Link href="">
              <Image
                src={linkedIn}
                alt="LinkedIn Logo"
                className="w-6 h-auto"
              />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-start">
          <div>
            <ul className="flex flex-col items-start justify-start py-4 text-base">
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
          <div>
            <ul className="flex flex-col items-start justify-start py-4 text-base">
              <Link
                href="/"
                className="my-2 text-gray-600 hover:text-gray-900 transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/"
                className="my-2 text-gray-600 hover:text-gray-900 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="my-2 text-gray-600 hover:text-gray-900 transition"
              >
                Cookie Policy
              </Link>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col items-start justify-start py-4 text-base">
              <Link
                href="/"
                className="my-2 text-gray-600 hover:text-gray-900 transition"
              >
                <strong>Email:</strong> <em>support@planify.com</em>
              </Link>
              <Link
                href="/"
                className="my-2 text-gray-600 hover:text-gray-900 transition"
              >
                <strong>Phone:</strong> +1 (555) 123-4567
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <p className="body-2 mt-6">© 2024 Planify. All rights reserved.</p>
    </footer>
  );
}
