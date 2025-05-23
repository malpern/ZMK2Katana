import React from "react";
import { Code, Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-keyboard-dark border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code className="h-5 w-5 text-keyboard-primary" />
            <span className="font-display font-bold text-lg tracking-tight">
              ZMK2Kanata
            </span>
          </div>

          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a
              href="#features"
              className="text-keyboard-text/70 hover:text-keyboard-primary transition-colors"
            >
              Features
            </a>
            <Link
              to="/user-guide"
              className="text-keyboard-text/70 hover:text-keyboard-primary transition-colors"
            >
              Documentation
            </Link>
            <a
              href="https://github.com/malpern/zmk-to-kanata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-keyboard-text/70 hover:text-keyboard-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-keyboard-text/50 mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} ZMK2Kanata Project. All rights
            reserved.
          </p>
          <div className="flex items-center justify-center md:justify-end">
            <a
              href="https://github.com/malpern/zmk-to-kanata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-keyboard-text/50 hover:text-keyboard-text/70 transition-colors"
            >
              This project is open source and released under the MIT license
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
