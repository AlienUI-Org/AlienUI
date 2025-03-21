import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiAlienStare } from "react-icons/gi";
import { GoMail } from "react-icons/go";

function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold text-white">Aui</h2>
            <p className="mt-2 text-white">
              Empowering developers to build better mobile apps with
              ready-to-use React Native UI components.
            </p>
          </div>

          <div className="flex items-center gap-4 text-white">
            <Link href="mailto:alienuiteam@gmail.com">
              <GoMail size={24} className="text-white" />
            </Link>
            <Link href="https://linkedin.com/company/alien-ui">
              <FaLinkedin size={24} className="text-white" />
            </Link>
            <Link href="https://x.com/alienui">
              <FaXTwitter size={24} className="text-white" />
            </Link>
            <Link href="https://github.com/khaymanii/alienui">
              <FaGithub size={24} className="text-white" />
            </Link>
            <span className="font-medium text-md text-white">160⭐</span>
          </div>
        </div>
        <div className="my-6 border-t border-white"></div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-white">
            &copy; {new Date().getFullYear()} AlienUI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-white text-center mt-8">
          Created by{" "}
          <Link href="https://x.com/kenneth_akpo">
            <span className="text-white font-semibold border-b">
              Kenneth Akpo
            </span>
          </Link>
        </p>
        <GiAlienStare size={24} className="text-white animate-bounce" />
      </div>
    </footer>
  );
}

export default Footer;
