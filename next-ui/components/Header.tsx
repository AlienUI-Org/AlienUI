// import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <h2 className="text-3xl font-semibold">Aui</h2>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://linkedin.com/company/alien-ui">
              <FaLinkedin className="lg:text-2xl text-xl" />
            </Link>
            <Link href="https://x.com/alienui">
              <FaXTwitter className="lg:text-2xl text-xl" />
            </Link>
            <Link href="https://github.com/khaymanii/alienui">
              <FaGithub className="lg:text-2xl text-xl" />
            </Link>
            <span className="font-medium text-base">160⭐</span>
          </div>

          {/* Hamburger Menu (optional, if you want to toggle mobile menu later) */}
          {/*  <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-customPurple focus:outline-none"
              title="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>*/}
        </div>
      </div>
    </nav>
  );
}

export default Header;
