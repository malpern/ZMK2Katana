import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Code, Menu, X, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-keyboard-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-keyboard-primary" />
            <span className="font-display font-bold text-lg tracking-tight">
              ZMK2Kanata
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/#features"
              className="text-sm font-medium text-keyboard-text hover:text-keyboard-primary transition-colors"
            >
              Features
            </Link>
            <Link
              to="/user-guide"
              className="text-sm font-medium text-keyboard-text hover:text-keyboard-primary transition-colors"
            >
              User Guide
            </Link>
            <Link
              to="/#mac-enhancements"
              className="text-sm font-medium text-keyboard-text hover:text-keyboard-primary transition-colors"
            >
              Resources
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/malpern/zmk-to-kanata"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-keyboard-primary hover:bg-keyboard-primary/80 text-black font-medium flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-keyboard-text hover:text-keyboard-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-keyboard-dark border-t border-white/10 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/#features"
              className="text-base font-medium text-keyboard-text hover:text-keyboard-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/user-guide"
              className="text-base font-medium text-keyboard-text hover:text-keyboard-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              User Guide
            </Link>
            <Link
              to="/#mac-enhancements"
              className="text-base font-medium text-keyboard-text hover:text-keyboard-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <a
              href="https://github.com/malpern/zmk-to-kanata"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-keyboard-primary hover:bg-keyboard-primary/90 text-black font-medium py-2 px-4 rounded flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
