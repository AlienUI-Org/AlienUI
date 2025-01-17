import React from "react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { GiAlienStare } from "react-icons/gi";

function Footer() {
  return (
    <footer className="bg-brown-800 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-3xl font-semibold text-white">Aui</h2>
            <p className="mt-2 text-white">
              Empowering developers to build better mobile apps with
              ready-to-use React Native components.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 text-white">
            <Link href="https://linkedin.com/company/alien-ui">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://x.com/alienui">
              <FaXTwitter size={24} />
            </Link>
            <Link href="https://github.com/khaymanii/alienui">
              <FaGithub size={24} />
            </Link>
            {/* <span className="font-medium text-md ml-2 text-white">3 ⭐</span>*/}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-brown-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-white">
            &copy; {new Date().getFullYear()} JSFusion. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {" "}
        <p className="text-white text-center mt-8">
          Created by{" "}
          <span className="text-white font-semibold">Kenneth Akpo</span>
        </p>
        <GiAlienStare size={24} className="text-white" />
      </div>
    </footer>
  );
}

export default Footer;
