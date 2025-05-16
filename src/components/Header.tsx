
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Github } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-mobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "User Guide", href: "/user-guide" },
    {
      label: "GitHub",
      href: "https://github.com/username/ZMK2Katana",
      external: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-keyboard-dark/80 backdrop-blur-lg z-50 py-4 border-b border-white/5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-bold text-xl md:text-2xl bg-gradient-to-r from-keyboard-primary via-keyboard-accent to-keyboard-secondary bg-clip-text text-transparent"
        >
          ZMK2Kanata
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-keyboard-text"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            {menuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-keyboard-dark/95 backdrop-blur-lg border-b border-white/5 p-4 animate-in slide-in-from-top">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, idx) =>
                    item.external ? (
                      <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-md transition-colors text-keyboard-text/80 hover:text-keyboard-text"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label === "GitHub" && (
                          <Github className="h-4 w-4" />
                        )}
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        key={idx}
                        to={item.href}
                        className={`px-4 py-2 hover:bg-white/5 rounded-md transition-colors ${
                          location.pathname === item.href
                            ? "text-keyboard-primary font-medium"
                            : "text-keyboard-text/80 hover:text-keyboard-text"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )
                  )}
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex items-center space-x-1">
            {navItems.map((item, idx) =>
              item.external ? (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-2 hover:bg-white/5 rounded-md transition-colors text-keyboard-text/80 hover:text-keyboard-text"
                >
                  {item.label === "GitHub" && <Github className="h-4 w-4" />}
                  {item.label}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={item.href}
                  className={`px-3 py-2 hover:bg-white/5 rounded-md transition-colors ${
                    location.pathname === item.href
                      ? "text-keyboard-primary font-medium"
                      : "text-keyboard-text/80 hover:text-keyboard-text"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
